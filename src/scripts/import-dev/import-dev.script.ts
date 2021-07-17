import path from "path";
import fse from "fs-extra";

/**
 * Handles creating a component
 */
export const importDev = async (options: any) => {
  /**
   * Defines the current working directory
   */
  const currentWorkingDirectory = process.cwd();

  /**
   * Defines the dist directory
   */
  const distDirectory = __dirname;

  /**
   * Defines the dev paths
   * Where the default components reside
   */
  const devPathJS = path.join(
    currentWorkingDirectory + "/dev/src/components/js/"
  );
  const devPathTS = path.join(
    currentWorkingDirectory + "/dev/src/components/ts/"
  );

  /**
   * Defines the dev paths for hooks
   */
  const devPathHooksJS = path.join(
    currentWorkingDirectory + "/dev/src/hooks/js/"
  );
  const devPathHooksTS = path.join(
    currentWorkingDirectory + "/dev/src/hooks/ts"
  );

  /**
   * Defines the template paths
   * Where the boilerplate components reside
   */
  const templatePathJS = path.join(
    currentWorkingDirectory + "/src/scripts/create-boilerplate/templates/js"
  );
  const templatePathTS = path.join(
    currentWorkingDirectory + "/src/scripts/create-boilerplate/templates/ts"
  );

  /**
   * Defines the defaults JS and TS output directories in the dist folder
   * Structure:
   *   - dist
   *      - defaults
   *        - js
   *        - ts
   */
  const outputJS = path.join(distDirectory, "defaults", "js");
  const outputTS = path.join(distDirectory, "defaults", "ts");

  /**
   * Defines the boilerplates output directory in the dist folder
   * Structure:
   *   - dist
   *      - boilerplates
   *          - js
   *          - ts
   */
  const templatesJS = path.join(distDirectory, "boilerplates", "js");
  const templatesTS = path.join(distDirectory, "boilerplates", "ts");

  /**
   * Defines the hooks output directory in the dist folder
   * Structure:
   *   - dist
   *      - hooks
   *          - js
   *          - ts
   */
  const outputHooksJS = path.join(distDirectory, "hooks", "js");
  const outputHooksTS = path.join(distDirectory, "hooks", "ts");

  /**
   * Defines the imports output directory in the dist folder
   * Structure:
   *   - dist
   *      - imports
   *          - js
   *          - ts
   */
  const importsDir = path.join(distDirectory, "imports");
  const importsJS = path.join(distDirectory, "imports", "js");
  const importsTS = path.join(distDirectory, "imports", "js");

  /**
   * Checks if the imports folder exists
   */
  const importsDirExists = await fse.pathExists(importsDir);

  /**
   * Creates the imports folder and it's subfolders if it doesn't exist
   */
  if (!importsDirExists) {
    /**
     * Creates the imports folder in dist
     */
    fse.mkdirSync(path.join(distDirectory, "imports"));
    fse.mkdirSync(path.join(distDirectory, "imports", "js"));
    fse.mkdirSync(path.join(distDirectory, "imports", "ts"));
  }

  /**
   * Edge-case, checks if the js folder exists in the imports directory
   *
   * Creates the imports/js folder in dist if it doesn't exist
   */
  const importsJsExists = await fse.pathExists(importsJS);
  if (!importsJsExists) {
    fse.mkdirSync(path.join(distDirectory, "imports", "js"));
  }

  /**
   * Edge-case, checks if the ts folder exists in the imports directory
   *
   * Creates the imports/ts folder in dist if it doesn't exist
   */
  const importsTsExists = await fse.pathExists(importsTS);
  if (!importsTsExists) {
    fse.mkdirSync(path.join(distDirectory, "imports", "ts"));
  }

  /**
   * Removes any old templates directory from dist
   */
  fse.removeSync(path.join(distDirectory, "boilerplates"));

  /**
   * Removes any old defaults directory from dist
   */
  fse.removeSync(path.join(distDirectory, "defaults"));

  /**
   * Removes any old hooks directory from dist
   */
  fse.removeSync(path.join(distDirectory, "hooks"));

  /**
   * Creates the defaults folder in dist
   */
  fse.mkdirSync(path.join(distDirectory, "defaults"));

  /**
   * Creates new ts and js directories in dist/defaults
   */
  fse.mkdirSync(path.join(distDirectory, "defaults", "ts"));
  fse.mkdirSync(path.join(distDirectory, "defaults", "js"));

  /**
   * Creates a new boilerplates directory in dist
   */
  fse.mkdirSync(path.join(distDirectory, "boilerplates"));

  /**
   * Creates new ts and js directories in boilerplates
   */
  fse.mkdirSync(path.join(distDirectory, "boilerplates", "js"));
  fse.mkdirSync(path.join(distDirectory, "boilerplates", "ts"));

  /**
   * Creates a new hooks directory in dist
   */
  fse.mkdirSync(path.join(distDirectory, "hooks"));

  /**
   * Creates new ts and js directories in hooks
   */
  fse.mkdirSync(path.join(distDirectory, "hooks", "js"));
  fse.mkdirSync(path.join(distDirectory, "hooks", "ts"));

  /**
   * Copies the js folder from dev/src/components/js to dist/defaults/js
   */
  fse.copySync(devPathJS, outputJS);

  /**
   * Copies the ts folder from dev/src/components/ts to dist/defaults/ts
   */
  fse.copySync(devPathTS, outputTS);

  /**
   * Copies the js folder from
   *   src/scripts/create-boilerplate/templates/js
   * to
   *  dist/templates/js
   */
  fse.copySync(templatePathJS, templatesJS);

  /**
   * Copies the ts folder from
   *   src/scripts/create-boilerplate/templates/ts
   * to
   *  dist/templates/ts
   */
  fse.copySync(templatePathTS, templatesTS);

  /**
   * Copies the js folder from dev/src/hooks/js to dist/hooks/js
   */
  fse.copySync(devPathHooksJS, outputHooksJS);

  /**
   * Copies the ts folder from dev/src/hooks/ts to dist/hooks/ts
   */
  fse.copySync(devPathHooksTS, outputHooksTS);
};
