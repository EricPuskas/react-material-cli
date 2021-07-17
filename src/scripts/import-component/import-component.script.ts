import path from "path";
import fse from "fs-extra";

/**
 * Handles creating a component
 */
export const importComponent = async (componentName: string, options: any) => {
  const { ts, src } = options;

  const source = path.join(process.cwd() + "/" + src + `/${componentName}`);
  const devPathJS = path.join(__dirname + `/imports/js/`);
  const devPathTS = path.join(__dirname + `/imports/ts/`);

  const output = ts
    ? path.join(devPathTS + `/${componentName}`)
    : path.join(devPathJS + `/${componentName}`);

  fse.copySync(source, output);
};
