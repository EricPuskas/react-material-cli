#!/usr/bin/env node
/**
 * External Imports
 */
import { Command } from "commander";
import { version } from "../package.json";

/**
 * Imports scripts
 */
import { createComponent } from "./scripts/create-component";
import { importComponent } from "./scripts/import-component";
import { exportComponent } from "./scripts/export-component";
import { importDev } from "./scripts/import-dev";

/**
 * Creates a local Command object
 */
const program = new Command();

/**
 * Lets commander know what's the version from the package.json
 */
program.version(version);

/**
 * Creates a component
 */
program
  .command("create <componentName>")
  .description("create a component/hook from the library")
  .option("-ts, --ts", "Typescript template", false)
  .option("-b, --boilerplate", "Boilerplate", false)
  .option("-h, --hook", "Hook", false)
  .action((componentName, options) => {
    createComponent(componentName, options);
  });

/**
 * Exports a component from the given source
 */
program
  .command("export [componentName]")
  .description(
    "exports a component and places it into the imports folder of the library"
  )
  .option("-ts, --ts", "Typescript component", false)
  .option("-src, --src <source>", "Source")
  .action((componentName, options) => {
    exportComponent(componentName, options);
  });

/**
 * Imports a component / or all of them
 */
program
  .command("import [componentName]")
  .description("import a component")
  .option("-ts, --ts", "Typescript component", false)
  .option("-src, --src <source>", "Source")
  .action((componentName, options) => {
    importComponent(componentName, options);
  });

/**
 * Imports the dev components
 */
program
  .command("import-dev")
  .description("import the dev components")
  .action((options) => {
    importDev(options);
  });

program.parse(process.argv);
