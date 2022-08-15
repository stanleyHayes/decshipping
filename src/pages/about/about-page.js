import Layout from "../../components/layout/layout";
import {Box, CardMedia, Container, Divider, Grid, ListItem, ListItemText, Stack, Typography, List} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/banners/about.jpg";
import {DEC_SHIPPING_DATA} from "../../utils/data";
import Leader from "../../components/shared/leader";
import Service from "../../components/shared/service";
import Carousel from "react-multi-carousel";
import Testimonial from "../../components/shared/testimonial";
import {UTILS} from "../../utils/utils";

const AboutPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    children={
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Container>
                                <Stack direction="column" spacing={4}>
                                    <Typography align="center" variant="h3" sx={{color: 'white'}}>
                                        About Us
                                    </Typography>
                                </Stack>
                            </Container>
                        </Box>
                    }
                    links={[{label: 'Home', link: '/'}, {label: 'About', link: '/about'}]}
                    backgroundImage={banner}
                />
                <Box sx={{py: 8}}>
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
                                    <Typography variant="h4" sx={{color: 'text.primary', mb: 2}}>
                                        Everyone within our business understands our mission
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{color: 'text.secondary', fontWeight: 'bold', mb: 2}}>
                                        It means we don't just come to work to do a job, we come to work to make a
                                        difference
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        To make the process of buying and managing shipping and logistics services
                                        simple, efficient, stress free and cost effective.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        We do this by providing a friendly, efficient and personalised service combined
                                        with innovative IT Solutions that enable our customers to always be in control
                                        of their supply chains.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid container={true} spacing={2} justifyContent="space-between">
                            {DEC_SHIPPING_DATA.SERVICES.map((service, index) => {
                                return (
                                    <Grid xs={12} md={4} item={true} spacing={2} key={index}>
                                        <Service service={service}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Container>
                </Box>

                <Divider variant="fullWidth" light={true}/>

                <Box sx={{py: 8}}>
                    <Container>
                        <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
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
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                        Why We Exist?
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        We exist because billions of lives have been lived, each with an amazing story
                                        to tell. Turning hearts wants to make learning about those that have gone on a
                                        more intimate, informative, and life-changing experience.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        We want to help everyone feel more connected to those around us whether it’s in
                                        our local communities or our global family.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8}}>
                    <Container>
                        <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
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
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 2}}>
                                        Between the point departure and destination there is DEC Shipping
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{color: 'text.secondary', mb: 2, fontWeight: 'bold'}}>
                                        DEC Transport & Logistics keeps your business in motion and your cargo on track.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                        We offer dedicated transport, logistics and warehousing solutions in Europe and
                                        across the world with customised personal service and guaranteed quality.
                                        Privately owned since the founding in 2012 with branches in Denmark ,Sweden,
                                        Norway, Finland and China we are one of the leading transport and logistics
                                        companies.
                                    </Typography>

                                    <Divider variant="fullWidth" sx={{my: 3}}/>

                                    <Grid container={true} spacing={2}>
                                        <Grid item={true} xs={12} md={4}>
                                            <Typography variant="h5" sx={{color: 'text.primary', mb: 2}}>
                                                100% Safe Delivery
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                                Organically grow the holistic world view of disruptive innovation via
                                                workplace diversity.
                                            </Typography>
                                        </Grid>
                                        <Grid item={true} xs={12} md={2}>
                                            <Typography variant="h5" sx={{color: 'text.primary', mb: 2}}>
                                                Weather Insurance
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                                Organically grow the holistic world view of disruptive innovation via
                                                workplace diversity.
                                            </Typography>
                                        </Grid>
                                        <Grid item={true} xs={12} md={4}>
                                            <Typography variant="h5" sx={{color: 'text.primary', mb: 2}}>
                                                Fast & On Time
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                                Organically grow the holistic world view of disruptive innovation via
                                                workplace diversity.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                    <Container>
                        <Grid container={true} spacing={4}>
                            <Grid item={true} xs={12} md={3}>
                                <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                    Delivered Packages
                                </Typography>
                                <Typography variant="h2" sx={{color: 'text.primary'}}>
                                    7255+
                                </Typography>
                            </Grid>

                            <Grid item={true} xs={12} md={3}>
                                <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                    KM Per Month
                                </Typography>
                                <Typography variant="h2" sx={{color: 'text.primary'}}>
                                    5348
                                </Typography>
                            </Grid>

                            <Grid item={true} xs={12} md={3}>
                                <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                    Tons of Goods
                                </Typography>
                                <Typography variant="h2" sx={{color: 'text.primary'}}>
                                    8500
                                </Typography>
                            </Grid>

                            <Grid item={true} xs={12} md={3}>
                                <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                    Satisfied Clients
                                </Typography>
                                <Typography variant="h2" sx={{color: 'text.primary'}}>
                                    10K+
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8}}>
                    <Container>
                        <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
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
                                    <Typography variant="h4" sx={{color: 'text.primary', mb: 2}}>
                                        Quality service and committed employees. How do we do it?
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        DEC Shipping is a representative logistics operator providing full range of
                                        service in the sphere of customs clearance transportation worldwide for any
                                        cargo.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        In addition to its core business of overland transport, air & sea freight and
                                        logistics, the company also operates a number of highly specialized industry
                                        solutions and subsidiaries under the umbrella of DEC Shipping Logistics Holding
                                        Ag based in Lauterach (Vorariberg, Austria)
                                    </Typography>

                                    <Grid container={true} spacing={4}>
                                        <Grid item={true} xs={12} md={6}>
                                            <List dense={true}>
                                                <ListItem>
                                                    <ListItemText
                                                        primary={
                                                            <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                                                Commercial expertise
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText
                                                        primary={
                                                            <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                                                Logistics expertise
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText
                                                        primary={
                                                            <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                                                Sustainability expertise
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <List dense={true}>
                                                <ListItem>
                                                    <ListItemText
                                                        primary={
                                                            <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                                                Cost Optimization
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText
                                                        primary={
                                                            <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                                                Reduce Transit Time
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText
                                                        primary={
                                                            <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                                                Managing Logistics
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                    <Container>
                        <Box>
                            <Typography align="center" variant="h4" sx={{color: 'text.primary', mb: 4}}>
                                Meet our team of experts
                            </Typography>
                            <Grid container={true} spacing={2}>
                                {DEC_SHIPPING_DATA.LEADERSHIP.map((leader, index) => {
                                    return (
                                        <Grid item={true} key={index} xs={12} md={3}>
                                            <Leader leader={leader}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Box>
                    </Container>
                </Box>

                <Box sx={{py: 8}}>
                    <Container>
                        <Carousel
                            infinite={true}
                            keyBoardControl={true}
                            pauseOnHover={true}
                            showDots={false}
                            arrows={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            responsive={UTILS.testimonialResponsive}>
                            {DEC_SHIPPING_DATA.REVIEWS.map((review, index) => {
                                return (
                                    <Box key={index}>
                                        <Testimonial testimonial={review}/>
                                    </Box>
                                )
                            })}
                        </Carousel>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default AboutPage;
