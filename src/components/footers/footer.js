import {Box, Container, Divider, Grid, Link, Stack, Typography} from "@mui/material";
import MobileFooter from "./mobile-footer";
import DesktopFooter from "./desktop-footer";
import {Facebook, Instagram, LinkedIn, Twitter} from "@mui/icons-material";

const Footer = () => {
    return (
        <Box>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <DesktopFooter/>
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <MobileFooter/>
            </Box>
            <Divider variant="middle"/>
            <Box sx={{paddingY: 2}}>
                <Container>
                <Grid container={true} spacing={4} justifyContent="space-between" alignItems="center">
                    <Grid item={true} xs={12} md="auto">
                        <Typography sx={{color: 'text.secondary'}} align="center">
                            DEC Shipping &copy; 2022 - All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Stack spacing={2} direction="row" justifyContent="space-around">
                            <Link href="#" target="_blank" rel="noopener" underline="none">
                                <Facebook
                                    sx={{
                                        backgroundColor: 'light.yellow',
                                        color:"primary.main",
                                        padding: 1,
                                        fontSize: 36,
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 12,
                                        borderBottomLeftRadius: 12,
                                        borderTopLeftRadius: 4,
                                        '&:hover': {
                                            transition: 'all 300ms ease-in-out',
                                            backgroundColor: 'light.secondary',
                                            color: 'secondary.main'
                                        }
                                    }}/>
                            </Link>

                            <Link href="#" target="_blank" rel="noopener" underline="none">
                                <Twitter
                                    sx={{
                                        backgroundColor: 'light.yellow',
                                        color:"primary.main",
                                        padding: 1,
                                        fontSize: 36,
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 12,
                                        borderBottomLeftRadius: 12,
                                        borderTopLeftRadius: 4,
                                        '&:hover': {
                                            transition: 'all 300ms ease-in-out',
                                            backgroundColor: 'light.secondary',
                                            color: 'secondary.main'
                                        }
                                    }}/>
                            </Link>

                            <Link href="#" target="_blank" rel="noopener" underline="none">
                                <LinkedIn
                                    sx={{
                                        backgroundColor: 'light.yellow',
                                        color:"primary.main",
                                        padding: 1,
                                        fontSize: 36,
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 12,
                                        borderBottomLeftRadius: 12,
                                        borderTopLeftRadius: 4,
                                        '&:hover': {
                                            transition: 'all 300ms ease-in-out',
                                            backgroundColor: 'light.secondary',
                                            color: 'secondary.main'
                                        }
                                    }}/>
                            </Link>

                            <Link href="#" rel="noopener" target="_blank" underline="none">
                                <Instagram
                                    sx={{
                                        backgroundColor: 'light.yellow',
                                        color:"primary.main",
                                        padding: 1,
                                        fontSize: 36,
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 12,
                                        borderBottomLeftRadius: 12,
                                        borderTopLeftRadius: 4,
                                        '&:hover': {
                                            transition: 'all 300ms ease-in-out',
                                            backgroundColor: 'light.secondary',
                                            color: 'secondary.main'
                                        }
                                    }}/>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
                </Container>
            </Box>
        </Box>
    )
}
export default Footer;
