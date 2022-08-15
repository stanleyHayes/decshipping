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
                            color: 'primary.main',
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 16,
                            borderBottomLeftRadius: 16,
                            borderTopLeftRadius: 4,
                            padding: 1,
                            fontSize: 32,
                            backgroundColor: 'light.primary'
                        }}/>
                ) : (
                    <LightMode
                        onClick={() => dispatch(toggleTheme())}
                        sx={{
                            cursor: 'pointer',
                            color: 'primary.main',
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 16,
                            borderBottomLeftRadius: 16,
                            borderTopLeftRadius: 4,
                            padding: 1,
                            fontSize: 32,
                            backgroundColor: 'light.primary'
                        }}/>
                )}

                <Close
                    onClick={() => dispatch(closeDrawer())}
                    sx={{
                        cursor: 'pointer',
                        color: 'primary.main',
                        borderBottomRightRadius: 4,
                        borderTopRightRadius: 16,
                        borderBottomLeftRadius: 16,
                        borderTopLeftRadius: 4,
                        padding: 1,
                        fontSize: 32,
                        backgroundColor: 'light.primary'
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
                                    color: 'primary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.primary'
                                }}/>
                        ) : (
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.primary',
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
                                    color: 'primary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.primary'
                                }}/>
                        ) : (
                            <MiscellaneousServicesOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.primary',
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
                                    color: 'primary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.primary'
                                }}/>
                        ) : (
                            <InfoOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.primary',
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
                    active={pathname === '/articles'}
                    path="/articles"
                    icon={
                        pathname === '/articles' ? (
                            <Article
                                sx={{
                                    cursor: 'pointer',
                                    color: 'primary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.primary'
                                }}/>
                        ) : (
                            <ArticleOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.primary',
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
                                    color: 'primary.main',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 36,
                                    backgroundColor: 'light.primary'
                                }}/>
                        ) : (
                            <ContactPageOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.primary',
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
