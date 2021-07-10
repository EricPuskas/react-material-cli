import path from "path";
import fse from "fs-extra";
import prompts from "prompts";

/**
 * Handles creating a component
 */
export const createComponent = async (
  componentName: string,
  options: any,
  destination?: string
) => {
  const devPath = path.join(process.cwd() + `/src/components/${componentName}`);
  const pathExists = await fse.pathExists(devPath);

  if (!pathExists) {
    await fse.mkdir(
      path.join(process.cwd() + `/src/components/${componentName}`)
    );
  }

  if (pathExists) {
    console.log(pathExists, devPath);
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
      const componentPath = path.join(__dirname + `/${componentName}`);

      await fse.copy(componentPath, devPath);
    })();
  } else {
    const componentPath = path.join(__dirname + `/${componentName}`);
    await fse.copy(componentPath, devPath);
  }
};
