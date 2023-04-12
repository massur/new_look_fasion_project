import "./App.css";
import {
  MantineProvider,
} from "@mantine/core";
import myTheme from "./theme/theme";
import {  useState } from "react";
import { AppSkeleton } from "./AppSkeleton";

function App() {
  const [value, setValue] = useState("");

  return (
    <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
      <AppSkeleton />
    </MantineProvider>
  );
}

export default App;
/**
 * TODO :
 * Use Action Icon inside the input box instead of the normal button
 */
