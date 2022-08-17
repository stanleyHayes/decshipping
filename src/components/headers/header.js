import {AppBar, Box} from "@mui/material";
import MobileHeader from "./mobile-header";
import DesktopHeader from "./desktop-header";

const Header = () => {
    return (
        <AppBar color="secondary" sx={{backdropFilter: 'blur(7px)', opacity: 0.8}} elevation={0}>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <DesktopHeader/>
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <MobileHeader/>
            </Box>
        </AppBar>
    )
}

export default Header;
