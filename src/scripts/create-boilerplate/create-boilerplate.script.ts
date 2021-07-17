import path from "path";
import fse from "fs-extra";
import prompts from "prompts";

/**
 * Imports helpers and utils
 */
import { getPaths, Paths } from "./paths";

/**
 * Handles creating a component
 */
export const createBoilerplate = async (
  componentName: string,
  options: any
) => {
  const { ts } = options;

  /**
   * Defines the current working directory
   */
  const currentWorkingDirectory = process.cwd();

  /**
   * Defines the dist directory
   */
  const distDirectory = __dirname;

  /**
   * Define the component directory
   */
  const componentDirectory = `src/components/${componentName}`;

  /**
   * Defines the target path
   */
  const targetPath = path.join(
    currentWorkingDirectory + "/" + componentDirectory
  );

  /**
   * Get the js and ts paths
   */
  const { jsPaths, tsPaths } = getPaths(componentDirectory, componentName);

  /**
   * Handles formatting the boilerplate
   */
  const formatBoilerplate = (boilerplate: Buffer | string) =>
    boilerplate
      .toString()
      .replace(/COMPONENT_NAME/g, componentName)
      .replace("// @ts-nocheck", "")
      .trimStart();

  /**
   * Handles creating a component file
   */
  const createComponentFile = async (
    path: string,
    boilerplate: Buffer | string
  ) => {
    await fse.writeFile(path, formatBoilerplate(boilerplate));
  };

  /**
   * Handles creating the directory for the component
   */
  const createComponentDirectory = async (componentDirectory: string) => {
    await fse.mkdir(componentDirectory);
  };

  /**
   * Handles getting the component path
   */
  const calculatePath = (p: string) =>
    path.join(path.resolve(currentWorkingDirectory), p);

  /**
   * Handles building the component files
   * @param paths Paths
   */
  const buildComponentFiles = async (paths: Paths, ts?: boolean) => {
    /**
     * Creates the component directory
     */
    await createComponentDirectory(calculatePath(componentDirectory));

    /**
     * Reads the main boilerplate file from dist/boilerplates/js|ts
     */
    const mainBoilerplate = await fse.readFile(
      path.join(distDirectory, paths.TEMPLATE_MAIN_PATH)
    );

    /**
     * Reads the story boilerplate file from dist/boilerplates/js|ts
     */
    const storyBoilerplate = await fse.readFile(
      path.join(distDirectory, paths.TEMPLATE_STORY_PATH)
    );

    /**
     * Reads the test boilerplate file from dist/boilerplates/js|ts
     */
    const testBoilerplate = await fse.readFile(
      path.join(distDirectory, paths.TEMPLATE_TEST_PATH)
    );

    /**
     * Reads the styles boilerplate file from dist/boilerplates/js|ts
     */
    const stylesBoilerplate = await fse.readFile(
      path.join(distDirectory, paths.TEMPLATE_STYLES_PATH)
    );

    if (ts && paths.TEMPLATE_TYPES_PATH && paths.TYPES_PATH) {
      /**
       * Reads the types boilerplate file from dist/boilerplates/js|ts
       */
      const typesBoilerplate = await fse.readFile(
        path.join(distDirectory, paths.TEMPLATE_TYPES_PATH)
      );

      /**
       * Creates the types file
       */
      await createComponentFile(
        calculatePath(paths.TYPES_PATH),
        typesBoilerplate
      );
    }

    /**
     * Reads the index boilerplate file from dist/boilerplates/js|ts
     */
    const indexBoilerplate = await fse.readFile(
      path.join(distDirectory, paths.TEMPLATE_INDEX_PATH)
    );

    /**
     * Creates the main file
     */
    await createComponentFile(calculatePath(paths.MAIN_PATH), mainBoilerplate);

    /**
     * Creates the story file
     */
    await createComponentFile(
      calculatePath(paths.STORY_PATH),
      storyBoilerplate
    );

    /**
     * Creates the test file
     */
    await createComponentFile(calculatePath(paths.TEST_PATH), testBoilerplate);

    /**
     * Creates the styles file
     */
    await createComponentFile(
      calculatePath(paths.STYLES_PATH),
      stylesBoilerplate
    );

    /**
     * Creates the index file
     */
    await createComponentFile(
      calculatePath(paths.INDEX_PATH),
      indexBoilerplate
    );
  };

  /**
   * Handles building the files
   */
  const buildFiles = async () => {
    const componentsFolderExists = await fse.pathExists(
      currentWorkingDirectory + "/src/components"
    );

    if (!componentsFolderExists) {
      fse.mkdirSync(path.join(process.cwd() + "/src/components"));
    }

    return ts
      ? await buildComponentFiles(tsPaths, true)
      : await buildComponentFiles(jsPaths);
  };

  const pathExists = await fse.pathExists(targetPath);

  if (pathExists) {
    const noRegex = /^(?:n|N|No|no)$/;

    (async () => {
      const response = await prompts({
        type: "text",
        name: "command",
        message: "It seems the component exists. Overwrite? (Yes/no)",
        validate: (value) =>
          value.match(/^(?:y|Y|Yes|yes|n|N|no|No)$/) ||
          "Invalid value: please provide a yes or a no"
      });

      if (response.command.match(noRegex)) {
        process.exit();
      }

      /**
       * Removes any old boilerplates directory from dist
       */
      fse.removeSync(path.join(targetPath));
      buildFiles();
    })();
  } else {
    buildFiles();
  }
};
