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
    currentWorkingDirectory + `/dev/src/components/js/`
  );
  const devPathTS = path.join(
    currentWorkingDirectory + `/dev/src/components/ts/`
  );

  /**
   * Defines the template paths
   * Where the boilerplate components reside
   */
  const templatePathJS = path.join(
    currentWorkingDirectory + `/src/scripts/create-boilerplate/templates/js`
  );
  const templatePathTS = path.join(
    currentWorkingDirectory + `/src/scripts/create-boilerplate/templates/ts`
  );

  /**
   * Defines the JS and TS output directories in the dist folder
   * Structure:
   *   - dist
   *      - js
   *      - ts
   */
  const outputJS = path.join(distDirectory, "js");
  const outputTS = path.join(distDirectory, "ts");

  /**
   * Defines the template output directory in the dist folder
   * Structure:
   *   - dist
   *      - templates
   *          - js
   *          - ts
   */
  const templatesJS = path.join(distDirectory, "templates", "js");
  const templatesTS = path.join(distDirectory, "templates", "ts");

  /**
   * Removes any old js or ts directories from dist
   */
  fse.removeSync(path.join(distDirectory, "ts"));
  fse.removeSync(path.join(distDirectory, "js"));

  /**
   * Removes any old templates directory from dist
   */
  fse.removeSync(path.join(distDirectory, "templates"));

  /**
   * Creates new ts and js directories in dist
   */
  fse.mkdirSync(path.join(distDirectory, "ts"));
  fse.mkdirSync(path.join(distDirectory, "js"));

  /**
   * Creates a new templates directory in dist
   */
  fse.mkdirSync(path.join(distDirectory, "templates"));

  /**
   * Creates new ts and js directories in templates
   */
  fse.mkdirSync(path.join(distDirectory, "templates", "js"));
  fse.mkdirSync(path.join(distDirectory, "templates", "ts"));

  /**
   * Copies the js folder from dev/src/components/js to dist/js
   */
  fse.copySync(devPathJS, outputJS);

  /**
   * Copies the ts folder from dev/src/components/ts to dist/ts
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
};
