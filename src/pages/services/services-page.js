import Layout from "../../components/layout/layout";
import {Box, Button, CardMedia, Container, Divider, Grid, Link, Stack, Typography} from "@mui/material";
import banner from "../../assets/images/banners/about.jpg";
import Banner from "../../components/shared/banner";
import {ArrowRightAlt} from "@mui/icons-material";

const ServicesPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    children={
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Container>
                                <Stack direction="column" spacing={4}>
                                    <Typography align="center" variant="h3" sx={{color: 'white'}}>
                                        Our Services
                                    </Typography>
                                </Stack>
                            </Container>
                        </Box>
                    }
                    links={[{label: 'Home', link: '/'}, {label: 'Services', link: '/services'}]}
                    backgroundImage={banner}
                />

                <Box sx={{my: 4, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Typography variant="h4" sx={{color: 'text.primary', mb: 4}} align="center">
                            We guarantee fast and safe transport for your packages
                        </Typography>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid container={true} spacing={4} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    src={banner}
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 2}}>
                                        Air Freight
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        These are inbound logistics, outbound logistics, and reverse logistics. The
                                        information about these three supply chain directions is essential to know,
                                        especially to people inclined in the logistics industry. Logistics is the
                                        overseeing of both the inward and outward flow of goods from the manufacturing
                                        point to the end user or point of use.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        The movement of these goods is known as transportation. While some use these
                                        terms interchangeably, they are two very unique aspects of the supply chain.
                                        Here's what you need to know about logistics vs. transportation.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Divider variant="fullWidth" light={true}/>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid container={true} spacing={4} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 2}}>
                                        Warehousing
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        The movement of people, goods, animals from one location to another by air,
                                        rail, road, sea, cable, space, or pipeline is known as transportation.
                                        Transportation services are divided into three aspects: infrastructure,
                                        vehicles, and operations. Transportation is very important because it allows
                                        communication and trade between two parties.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Although both transportation and logistics deal with getting valuables from one
                                        location to another, logistics has added benefits and functions.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    src={banner}
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Divider variant="fullWidth" light={true}/>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid container={true} spacing={4} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    src={banner}
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 2}}>
                                        Ocean Freight
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        These are inbound logistics, outbound logistics, and reverse logistics. The
                                        information about these three supply chain directions is essential to know,
                                        especially to people inclined in the logistics industry. Logistics is the
                                        overseeing of both the inward and outward flow of goods from the manufacturing
                                        point to the end user or point of use.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        The movement of these goods is known as transportation. While some use these
                                        terms interchangeably, they are two very unique aspects of the supply chain.
                                        Here's what you need to know about logistics vs. transportation.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Divider variant="fullWidth" light={true}/>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid container={true} spacing={4} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                        Fast and professional shipping services
                                    </Typography>
                                    <Box sx={{mb: 2}}>
                                        <Typography
                                            variant="body1"
                                            sx={{color: 'text.primary', mb: 2, fontWeight: 'bold'}}>
                                            Delivering goods in the world
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            Find your preferred carriers, e-commerce platforms, third-party logistics
                                            (3PL) providers, and warehouse management solutions under one convenient,
                                            digital roof. We're proud to follow the Pledge !% charitable model: DEC
                                            Shipping donates one percent of employees time, one percent of profit, and
                                            one percent of our product back to the community. But our work is never over
                                            - if you'd like to invite DEC Shipping to volunteer with your organisation,
                                            please reach out
                                            <Link to="mailto:info@decshipping.com">
                                                info@decshipping.com
                                            </Link>
                                        </Typography>
                                    </Box>
                                    <Box sx={{mb: 2}}>
                                        <Typography
                                            variant="body1"
                                            sx={{color: 'text.primary', mb: 2, fontWeight: 'bold'}}>
                                            Partnering with the top carriers, platforms, and providers you do business with.
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            Find your preferred carriers, e-commerce platforms, third-party logistics
                                            (3PL) providers, and warehouse management solutions under one convenient,
                                            digital roof.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    src={banner}
                                    sx={{
                                        borderRadius: 2,
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Typography align="center" variant="h4" sx={{color: 'text.primary', mb: 3}}>
                            Get Started Today for Free
                        </Typography>
                        <Typography align="center" variant="body2" sx={{color: 'text.secondary', mb: 3}}>
                            Everything you need for professional-grade shipping + deep discounts from top carriers.
                        </Typography>
                        <Stack direction="row" justifyContent="center">
                            <Link to={'/auth/register'} style={{textDecoration: 'none'}}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    disableElevation={true}
                                    endIcon={<ArrowRightAlt/>}
                                    sx={{textTransform: 'capitalize'}}>
                                    Sign up for Free
                                </Button>
                            </Link>
                        </Stack>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default ServicesPage;
