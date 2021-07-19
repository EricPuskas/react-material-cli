import path from "path";
import fse from "fs-extra";
import prompts from "prompts";

/**
 * Handles creating a component
 */
export const importComponent = async (componentName: string, options: any) => {
  const { ts } = options;

  const targetPath = path.join(
    process.cwd() + `/src/components/${componentName}`
  );

  const source = ts
    ? path.join(__dirname, "imports", "ts", "/", componentName)
    : path.join(__dirname, "imports", "js", "/", componentName);

  const pathExists = await fse.pathExists(targetPath);
  const sourceExists = await fse.pathExists(source);

  if (!sourceExists) {
    return console.log("Component not found");
  }

  if (!pathExists) {
    await fse.mkdir(
      path.join(process.cwd() + `/src/components/${componentName}`)
    );
  }

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

      await fse.emptyDir(targetPath);
      await fse.copy(source, targetPath);
    })();
  } else {
    await fse.copy(source, targetPath);
  }
};
