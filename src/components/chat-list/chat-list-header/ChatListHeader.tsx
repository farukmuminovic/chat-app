import AppBar from "@mui/material/AppBar";
import AddCircle from "@mui/icons-material/AddCircle";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";


interface ChatListHeaderProps {
    handleAddChat: () => void;
}

const ChatListHeader = ({handleAddChat}: ChatListHeaderProps) => {
    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                <IconButton size="large" edge="start" onClick={handleAddChat}>
                    <AddCircle/>
                </IconButton>
                Create new chat
            </Toolbar>
        </AppBar>
    )
}

export default ChatListHeader;