import { GlobalStyles, ThemeProvider, createTheme } from "@mui/material";

import { MainPage } from "./components/MainPage";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { margin: 0, fontFamily: "Ubuntu" } }} />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
