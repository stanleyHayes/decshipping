import {Button, Container, Stack, Toolbar} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import {DarkMode, LightMode} from "@mui/icons-material";
import NavLink from "../shared/nav-link";
import logo from "./../../assets/images/logo/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, toggleTheme} from "../../redux/features/ui/ui-slice";

const DesktopHeader = () => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const {themeVariant} = useSelector(selectUI);

    return (
        <Toolbar variant="regular">
            <Container maxWidth="xl">
                <Stack justifyContent="space-between" alignItems="center" direction="row">
                    <Stack justifyContent="space-between" alignItems="center" direction="row">
                        <Link to='/' style={{textDecoration: 'none'}}>
                            <img
                                src={logo}
                                alt=""
                                style={{width: 50, height: 50, objectFit: 'cover', objectPosition: 'center'}}
                            />
                        </Link>
                    </Stack>
                    <Stack spacing={1} justifyContent="space-between" alignItems="center" direction="row">
                        <NavLink path="/" label="Home" active={pathname === '/'}/>
                        <NavLink path="/services" label="Services" active={pathname === '/services'}/>
                        <NavLink path="/about" label="About" active={pathname === '/about'}/>
                        <NavLink path="/articles" label="Blog" active={pathname === '/articles'}/>
                        <NavLink path="/contact" label="Contact" active={pathname === '/contact'}/>
                    </Stack>
                    <Stack spacing={1} justifyContent="space-between" alignItems="center" direction="row">
                        <Link to='/auth/login' style={{textDecoration: 'none'}}>
                            <Button
                                size="small"
                                variant="outlined"
                                color="primary"
                                sx={{
                                    borderWidth: 2,
                                    backgroundColor: 'light.yellow',
                                    textTransform: 'capitalize',
                                    borderColor: 'colors.yellow',
                                    color: 'colors.yellow'
                                }}>
                                Login
                            </Button>
                        </Link>
                        <Link to='/auth/register' style={{textDecoration: 'none'}}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                disableElevation={true}
                                sx={{textTransform: 'capitalize',}}>
                                Register
                            </Button>
                        </Link>
                        {themeVariant === 'dark' ? (
                            <LightMode
                                color="primary"
                                sx={{
                                    backgroundColor: 'light.yellow',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 32,
                                }}
                                onClick={() => dispatch(toggleTheme())}
                            />
                        ) : (
                            <DarkMode
                                color="primary"
                                sx={{
                                    backgroundColor: 'light.yellow',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 32,
                                    cursor: 'pointer',
                                }}
                                onClick={() => dispatch(toggleTheme())}
                            />
                        )}
                    </Stack>
                </Stack>
            </Container>
        </Toolbar>
    )
}

export default DesktopHeader;
