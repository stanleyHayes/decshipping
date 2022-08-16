import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Link as MUILink, Link, Stack, Typography} from "@mui/material";
import banner from "./../../assets/images/banners/contact.jpg";
import Banner from "../../components/shared/banner";
import {Facebook, Instagram, LinkedIn, Twitter} from "@mui/icons-material";
import "yup-phone";
import ContactForm from "../../components/shared/contact-form";

const ContactPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    children={
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Container>
                                <Stack direction="column" spacing={4}>
                                    <Typography align="center" variant="h3" sx={{color: 'white'}}>
                                        Contact Us
                                    </Typography>
                                </Stack>
                            </Container>
                        </Box>
                    }
                    links={[{label: 'Home', link: '/'}, {label: 'Contact', link: '/contact'}]}
                    backgroundImage={banner}
                />
                <Box sx={{py: 8}}>
                    <Container>
                        <Grid container={true} spacing={4}>
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <ContactForm
                                        title="Get in touch with us"
                                        caption="To get in touch with DEC Shipping, please call or email us. For site specific contact details please use the form below."
                                    />
                                </Box>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Box sx={{backgroundColor: 'background.transparent', padding: 6}}>
                                    <Stack direction="column" spacing={3}>
                                        <Box>
                                            <Typography
                                                variant="body2"
                                                sx={{color: 'text.primary', mb: 2, fontWeight: 'bold'}}>
                                                Social Links
                                            </Typography>
                                            <Stack spacing={2} direction="row" justifyContent="flex-start">
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
                                        </Box>

                                        <Box>
                                            <Typography variant="body1" sx={{color: 'text.primary', mb: 2, fontWeight: 'bold'}}>
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
                                        </Box>

                                        <Box>
                                            <Typography variant="body1" sx={{color: 'text.primary', mb: 2, fontWeight: 'bold'}}>
                                                Contact
                                            </Typography>

                                            <Stack direction="column" spacing={2}>
                                                <MUILink href="tel:+10095555420" underline="none">
                                                    <Typography
                                                        variant="body2"
                                                        sx={{color: 'text.secondary'}}>
                                                        +1 (009)-555-540
                                                    </Typography>
                                                </MUILink>
                                                <MUILink href="tel:+10095555420" underline="none">
                                                    <Typography
                                                        variant="body2"
                                                        sx={{color: 'text.secondary'}}>
                                                        +1 (009)-555-540
                                                    </Typography>
                                                </MUILink>
                                            </Stack>
                                        </Box>

                                        <Box>
                                            <Typography variant="body1" sx={{color: 'text.primary', mb: 2, fontWeight: 'bold'}}>
                                                Email Address
                                            </Typography>

                                            <Stack direction="column" spacing={2}>
                                                <MUILink href="mailto:hello@decshipping.com" underline="none">
                                                    <Typography
                                                        variant="body2"
                                                        sx={{color: 'text.secondary'}}>
                                                        hello@decshipping.com
                                                    </Typography>
                                                </MUILink>
                                            </Stack>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default ContactPage;
