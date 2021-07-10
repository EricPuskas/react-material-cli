import path from "path";
import fse from "fs-extra";

/**
 * Handles creating a component
 */
export const importDev = async (componentName: string, options: any) => {
  const src = componentName ? `/${componentName}` : "/";
  const devPath = path.join(process.cwd() + "/dev/src/components");

  const withSource = options.src
    ? path.join(process.cwd() + "/" + options.src)
    : false;

  const pathExists = await fse.pathExists(path.join(devPath, src));
  if (!pathExists) {
    await fse.mkdir(path.join(__dirname + `/${componentName}`));
  }

  const output = componentName
    ? path.join(__dirname + `/${componentName}`)
    : path.join(__dirname);

  if (options.all) {
    if (withSource) {
      await fse.copy(withSource, path.join(__dirname));
      return;
    } else {
      const devPath = path.join(process.cwd() + "/dev/src/components");
      await fse.copy(devPath, path.join(__dirname));
    }
  } else {
    await fse.copy(
      withSource
        ? withSource + `/${componentName}`
        : devPath + `/${componentName}`,
      output
    );
  }
};
