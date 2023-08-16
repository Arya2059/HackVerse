import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  },

  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`
  },

  styles: {
    global: ({ colorMode }) => ({
      ".EmojiPickerReact": {
        "--epr-emoji-size": "1.5rem",
        "--epr-category-navigation-button-size": "1.5rem",
        fontSize: "0.8rem"
      },
      "&::-webkit-scrollbar": {
        width: "2px"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: colorMode === "dark" ? "#00FF00" : "#00FF00", // Green color (#00FF00)
        borderRadius: "2px"
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: colorMode === "dark" ? "#000000" : "#000000" // Black color (#000000)
      }
    })
  },

  colors: {
    brandGreen: "#00FF00", // Green color
    brandBlack: "#000000" // Black color
  }
});

export default theme;
