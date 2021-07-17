import path from "path";
import fse from "fs-extra";
import prompts from "prompts";

/**
 * Handles creating a hook
 */
export const createHook = async (hookName: string, options: any) => {
  const { ts } = options;

  const targetBasePath = path.join(process.cwd() + `/src/hooks`);
  const targetPath = path.join(process.cwd() + `/src/hooks/${hookName}`);

  const source = ts
    ? path.join(__dirname, "hooks", "ts", "/", hookName)
    : path.join(__dirname, "hooks", "js", "/", hookName);

  const basePathExists = await fse.pathExists(targetBasePath);

  if (!basePathExists) {
    await fse.mkdir(path.join(process.cwd() + `/src/hooks`));
  }

  const pathExists = await fse.pathExists(targetPath);

  if (!pathExists) {
    await fse.mkdir(path.join(process.cwd() + `/src/hooks/${hookName}`));
  }

  if (pathExists) {
    const noRegex = /^(?:n|N|No|no)$/;

    (async () => {
      const response = await prompts({
        type: "text",
        name: "command",
        message: "It seems the hook exists. Overwrite? (Yes/no)",
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
