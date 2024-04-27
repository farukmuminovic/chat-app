import React from "react";
import {
    Container,
    createTheme,
    CssBaseline,
    ThemeProvider,
} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import router from "./components/Routes";
import client from "./constants/apollo-client";
import {ApolloProvider} from "@apollo/client";
import Guard from "./components/auth/Guard";
import Header from "./components/header/Header";
import Snackbar from "./components/snackbar/Snackbar";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});
const App = () => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Header/>
                <Container>
                    <Guard>
                        <RouterProvider router={router}/>
                    </Guard>
                </Container>
                <Snackbar/>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
