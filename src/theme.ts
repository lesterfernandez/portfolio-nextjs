import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const theme: ThemeOverride = {
  config: {
    initialColorMode: "light",
    // for now
    // useSystemColorMode: true,
  },

  styles: {
    global: {
      code: {
        fontFamily:
          "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
      },
      body: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
    },
  },
};

export default extendTheme(theme);
