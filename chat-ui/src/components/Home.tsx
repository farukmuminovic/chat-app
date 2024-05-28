import Box from "@mui/material/Box";
import customIcon from '../assets/images/background-chat-wallpaper.jpg'

const Home = () => {
    return (
        <Box component="img" src={customIcon} alt="Welcome" sx={{width: '100%', height: '85%'}}>
        </Box>
    );
}

export default Home;