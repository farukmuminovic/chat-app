import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import * as React from "react";

interface ChatListProps {
    name?: string | null;
}

const ChatListItem = ({name}: ChatListProps) => {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
        </>
    )
}

export default ChatListItem;