import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  margin: "0",
  fonts: {
    body: "Roboto sans-serif"
  },
  styles: {
    global: {
      body: {
        color: "#000",
        bg: "#fff"
      }
    }
  }
});
