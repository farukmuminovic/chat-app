import React from "react";
import {
    Container,
    createTheme,
    CssBaseline, Grid,
    ThemeProvider,
} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import router from "./components/Routes";
import client from "./constants/apollo-client";
import {ApolloProvider} from "@apollo/client";
import Guard from "./components/auth/Guard";
import Header from "./components/header/Header";
import Snackbar from "./components/snackbar/Snackbar";
import ChatList from "./components/chat-list/ChatList";
import {usePath} from "./hooks/usePath";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});
const App = () => {
    const {path} = usePath();
    const showChatList = path === "/" || path.includes("chats");
    console.log('API URL:', process.env.REACT_APP_API_URL);
    console.log('WebSocket URL:', process.env.REACT_APP_WS_URL);
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Header/>
                <Guard>
                    <Container maxWidth="xl" sx={{marginTop: "1rem"}}>
                        {showChatList ? (
                            <Grid container spacing={5}>
                                <Grid item xs={12} md={5} lg={4} xl={3}>
                                    <ChatList/>
                                </Grid>
                                <Grid item xs={12} md={7} lg={8} xl={9}>
                                    <Routes/>
                                </Grid>
                            </Grid>
                        ) : (
                            <Routes/>
                        )}
                    </Container>
                </Guard>
                <Snackbar/>
            </ThemeProvider>
        </ApolloProvider>
    );
};

const Routes = () => {
    return <RouterProvider router={router}/>
}

export default App;
