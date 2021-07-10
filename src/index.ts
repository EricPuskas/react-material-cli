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
  .command("create <componentName> [destination]")
  .description("create a component")
  .option("-ts, --ts", "Typescript template", false)
  .option("-b, --boilerplate", "Boilerplate", false)
  .action((componentName, destination, options) => {
    createComponent(componentName, options, destination);
  });

/**
 * Imports a component / or all of them
 */
program
  .command("import [componentName]")
  .description("import a component")
  .option("-all, --all", "Imports all components", false)
  .option("-src, --src <source>", "Source")
  .action((componentName, options) => {
    importDev(componentName, options);
  });

program.parse(process.argv);
