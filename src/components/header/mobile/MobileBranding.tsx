import {Typography} from "@mui/material";
import router from "../../Routes";
import Box from "@mui/material/Box";
import customIcon from "../../../assets/images/fet-logo.png";
import * as React from "react";

const MobileBranding = () => {
    return (
        <>
            <Box component="img" src={customIcon} alt="FET"
                 sx={{display: {xs: "flex", md: "none"}, mr: 1, width: 48, height: 48}}/>
            <Typography
                variant="h5"
                noWrap
                component="a"
                onClick={() => router.navigate("/")}
                sx={{
                    mr: 2,
                    display: {xs: "flex", md: "none"},
                    flexGrow: 1,
                    fontFamily: "monospace",
                    cursor: "pointer",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                }}
            >
                FET CHAT
            </Typography>
        </>
    );
};

export default MobileBranding;