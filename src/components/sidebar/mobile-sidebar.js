import {Box, Stack} from "@mui/material";
import SidebarLink from "../shared/sidebar-link";
import {useLocation} from "react-router-dom";
import {
    Article,
    ArticleOutlined,
    Close,
    ContactPage,
    ContactPageOutlined,
    DarkMode,
    Home,
    HomeOutlined,
    Info,
    InfoOutlined,
    LightMode,
    MiscellaneousServices,
    MiscellaneousServicesOutlined
} from "@mui/icons-material";
import {closeDrawer, selectUI, toggleTheme} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const MobileSidebar = () => {

    const {pathname} = useLocation();
    const {themeVariant} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box sx={{minHeight: '100vh', minWidth: "80vw", py: 3, backgroundColor: 'background.default'}}>
            <Stack
                sx={{px: 4, mb: 4}}
                direction="row"
                alignItems="center"
                justifyContent="space-between">
                {themeVariant === 'light' ? (
                    <DarkMode
                        onClick={() => dispatch(toggleTheme())}
                        sx={{
                            cursor: 'pointer',
                            color: 'secondary.main',
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 16,
                            borderBottomLeftRadius: 16,
                            borderTopLeftRadius: 4,
                            padding: 1,
                            fontSize: 32,
                            backgroundColor: 'light.secondary'
                        }}/>
                ) : (
                    <LightMode
                        onClick={() => dispatch(toggleTheme())}
                        sx={{
                            cursor: 'pointer',
                            color: 'secondary.main',
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 16,
                            borderBottomLeftRadius: 16,
                            borderTopLeftRadius: 4,
                            padding: 1,
                            fontSize: 32,
                            backgroundColor: 'light.secondary'
                        }}/>
                )}

                <Close
                    onClick={() => dispatch(closeDrawer())}
                    sx={{
                        cursor: 'pointer',
                        color: 'secondary.main',
                        borderBottomRightRadius: 4,
                        borderTopRightRadius: 16,
                        borderBottomLeftRadius: 16,
                        borderTopLeftRadius: 4,
                        padding: 1,
                        fontSize: 32,
                        backgroundColor: 'light.secondary'
                    }}/>

            </Stack>

            <Stack spacing={2} direction="column">
                <SidebarLink
                    label="Home"
                    active={pathname === '/'}
                    path="/"
                    icon={
                        pathname === '/' ? (
                            <Home
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36
                                }}/>
                        )
                    }
                />

                <SidebarLink
                    label="Services"
                    active={pathname === '/services'}
                    path="/services"
                    icon={
                        pathname === '/services' ? (
                            <MiscellaneousServices
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <MiscellaneousServicesOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36
                                }}/>
                        )
                    }
                />


                <SidebarLink
                    label="About"
                    active={pathname === '/about'}
                    path="/about"
                    icon={
                        pathname === '/about' ? (
                            <Info
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <InfoOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36
                                }}/>
                        )
                    }
                />


                <SidebarLink
                    label="Blog"
                    active={pathname === '/blog'}
                    path="/blog"
                    icon={
                        pathname === '/blog' ? (
                            <Article
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <ArticleOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36
                                }}/>
                        )
                    }
                />


                <SidebarLink
                    label="Contact"
                    active={pathname === '/contact'}
                    path="/contact"
                    icon={
                        pathname === '/contact' ? (
                            <ContactPage
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <ContactPageOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36
                                }}/>
                        )
                    }
                />
            </Stack>
        </Box>
    )
}

export default MobileSidebar;
