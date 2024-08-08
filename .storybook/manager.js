import { addons } from "@storybook/manager-api";
import accTheme from "./themeAcc";

addons.setConfig({
  theme: accTheme,
  sidebar: {
    showRoots: true,
  },
});
