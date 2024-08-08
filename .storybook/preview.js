/** @type { import('@storybook/vue3').Preview } */

import "../dist/css/styles.js"; // Apply custom css for asset previews and bits

const preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
