import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  rootElement
);
