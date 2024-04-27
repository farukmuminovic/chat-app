import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import customIcon from '../../assets/images/fet-logo.png'
import router from "../Routes";

const Branding = () => {
    return (
        <>
            <Box component="img" src={customIcon} alt="FET"
                 sx={{display: {xs: 'none', md: 'flex'}, mr: 1, width: 48, height: 48}}/>
            <Typography
                variant="h6"
                noWrap
                component="a"
                onClick={() => router.navigate("/")}
                sx={{
                    mr: 2,
                    display: {xs: 'none', md: 'flex'},
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    cursor: 'pointer'
                }}
            >
                FET CHAT
            </Typography>
        </>
    )
};

export default Branding;