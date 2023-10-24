import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

ReactDOM.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Notifications />
    <App />
  </MantineProvider>,
  document.getElementById("root")
);
