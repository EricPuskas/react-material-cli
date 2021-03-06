/**
 * Defines the Paths interface
 */
export interface Paths {
  TEMPLATE_MAIN_PATH: string;
  TEMPLATE_STORY_PATH?: string;
  TEMPLATE_DOC_PATH?: string;
  TEMPLATE_TEST_PATH?: string;
  TEMPLATE_STYLES_PATH: string;
  TEMPLATE_TYPES_PATH?: string;
  TEMPLATE_INDEX_PATH: string;
  MAIN_PATH: string;
  STORY_PATH?: string;
  TEST_PATH?: string;
  STYLES_PATH: string;
  TYPES_PATH?: string;
  INDEX_PATH: string;
}

/**
 * Handles defining and returning the js and ts paths for all files and boilerplates
 * @param directoryName String
 * @param fileName String
 * @returns
 */
export const getPaths = (directoryName: string, fileName: string) => {
  /**
   * Defines the base paths
   */
  const baseJsTemplatePath = "./boilerplates/js";
  const baseTsTemplatePath = "./boilerplates/ts";

  /**
   * Javascript paths
   */
  const jsPaths: Paths = {
    TEMPLATE_MAIN_PATH: `${baseJsTemplatePath}/component.js`,
    TEMPLATE_STORY_PATH: `${baseJsTemplatePath}/component.stories.js`,
    TEMPLATE_DOC_PATH: `${baseJsTemplatePath}/component.md`,
    TEMPLATE_TEST_PATH: `${baseJsTemplatePath}/component.test.js`,
    TEMPLATE_STYLES_PATH: `${baseJsTemplatePath}/component.styles.js`,
    TEMPLATE_INDEX_PATH: `${baseJsTemplatePath}/index.js`,
    MAIN_PATH: `${directoryName}/${fileName}.js`,
    STORY_PATH: `${directoryName}/${fileName}.stories.js`,
    TEST_PATH: `${directoryName}/${fileName}.test.js`,
    STYLES_PATH: `${directoryName}/${fileName}.styles.js`,
    INDEX_PATH: `${directoryName}/index.js`
  };

  /**
   * Typescript paths
   */
  const tsPaths: Paths = {
    TEMPLATE_MAIN_PATH: `${baseTsTemplatePath}/component.tsx`,
    TEMPLATE_STYLES_PATH: `${baseTsTemplatePath}/component.styles.ts`,
    TEMPLATE_TYPES_PATH: `${baseTsTemplatePath}/component.types.ts`,
    TEMPLATE_INDEX_PATH: `${baseTsTemplatePath}/index.ts`,
    MAIN_PATH: `${directoryName}/${fileName}.tsx`,
    STYLES_PATH: `${directoryName}/${fileName}.styles.ts`,
    TYPES_PATH: `${directoryName}/${fileName}.types.ts`,
    INDEX_PATH: `${directoryName}/index.ts`
  };

  return { jsPaths, tsPaths };
};
