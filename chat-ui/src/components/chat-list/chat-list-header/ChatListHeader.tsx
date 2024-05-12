import AppBar from "@mui/material/AppBar";
import AddCircle from "@mui/icons-material/AddCircle";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

const ChatListHeader = () => {
    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                <IconButton size="large" edge="start">
                    <AddCircle/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default ChatListHeader;