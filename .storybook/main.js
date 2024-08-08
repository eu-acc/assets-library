/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  staticDirs: ["../dist/asset-library"],
};

export default config;
