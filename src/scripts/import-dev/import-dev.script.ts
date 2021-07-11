import path from "path";
import fse from "fs-extra";

/**
 * Handles creating a component
 */
export const importDev = async (options: any) => {
  const devPathJS = path.join(process.cwd() + `/dev/src/components/js/`);
  const devPathTS = path.join(process.cwd() + `/dev/src/components/ts/`);

  const outputJS = path.join(__dirname, "js");
  const outputTS = path.join(__dirname, "ts");

  fse.removeSync(path.join(__dirname, "ts"));
  fse.removeSync(path.join(__dirname, "js"));
  fse.mkdirSync(path.join(__dirname, "ts"));
  fse.mkdirSync(path.join(__dirname, "js"));

  fse.copySync(devPathJS, outputJS);
  fse.copySync(devPathTS, outputTS);
};
