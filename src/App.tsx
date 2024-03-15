import React from 'react';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const App = () => {
  return <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container>
      <h1>Dark themed Chat App</h1>
    </Container>
    </ThemeProvider>;
};

export default App;
