import {Box, Button, Container, Grid, Stack, Typography, Link as MUILink} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

const DesktopFooter = () => {
    return (
        <Box sx={{backgroundColor: 'background.default', paddingY: 4}}>
            <Container>
                <Grid container={true} justifyContent="space-around">
                    <Grid item={true} xs={3}>
                        <Stack direction="column" spacing={4}>
                            <Stack direction="row" spacing={0}>
                                <Link to='/' style={{textDecoration: 'none'}}>
                                    <img
                                        src={logo}
                                        alt=""
                                        style={{
                                            width: 50,
                                            height: 50,
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}
                                    />
                                </Link>
                            </Stack>
                            <Stack direction="row" spacing={0}>
                                <Typography variant="h4" sx={{color: 'colors.white'}}>
                                    DEC
                                </Typography>
                                <Typography variant="h4" sx={{color: 'colors.yellow'}}>
                                    Shipping
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item={true} xs={3}>
                        <Typography variant="h6" sx={{color: 'text.primary', mb: 4}}>
                            Address
                        </Typography>

                        <Stack direction="column" spacing={1}>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                Intersection 10 Hudson Yards,
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                26th Floor, New York 10001
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid item={true} xs={3}>
                        <Typography variant="h6" sx={{color: 'text.primary', mb: 4}}>
                            Reach Us
                        </Typography>

                        <Stack direction="column" spacing={2}>
                            <MUILink href="tel:+10095555420" underline="none">
                                <Typography
                                    variant="body2"
                                    sx={{color: 'text.secondary'}}>
                                    +1 (009)-555-540
                                </Typography>
                            </MUILink>
                            <MUILink href="mailto:hello@decshipping.com" underline="none">
                                <Typography
                                    variant="body2"
                                    sx={{color: 'text.secondary'}}>
                                    info@decshipping.com
                                </Typography>
                            </MUILink>
                        </Stack>
                    </Grid>

                    <Grid item={true} xs={3}>
                        <Typography variant="h6" sx={{color: 'text.primary', mb: 4}}>
                            Quick Links
                        </Typography>

                        <Stack direction="column" spacing={1}>
                            <Link to='/faq' style={{textDecoration: 'none'}}>
                                <Button variant="text" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    FAQs
                                </Button>
                            </Link>
                            <Link to='/contact' style={{textDecoration: 'none'}}>
                                <Button variant="text" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    Contact Us
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default DesktopFooter;
