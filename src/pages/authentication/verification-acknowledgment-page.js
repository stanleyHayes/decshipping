import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import loginLogo from "../../assets/images/auth/account-success.png";
import "yup-phone";
import {Link} from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import {DEC_SHIPPING_DATA} from "../../utils/data";
import BannerSliderItem from "../../components/shared/banner-slider-item";

const VerificationAcknowledgmentPage = () => {


    return (
        <Box
            sx={{
                maxWidth: '100vw',
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: 'background.default',
                overflow: 'hidden'
            }}>
            <Box sx={{display: {xs: 'none', lg: 'block'}, flex: 1, maxHeight: '100vh'}}>
                <Stack justifyContent="center" alignItems="center" sx={{height: '100%'}}>
                    <img
                        style={{
                            maxHeight: '100vh',
                            width: '50%',
                            height: '50%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                        alt=""
                        src={loginLogo}
                    />
                </Stack>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    overflowY: {xs: 'scroll', lg: 'hidden'},
                    backgroundColor: 'background.paper',
                    paddingY: {xs: 4, lg: 2}
                }}>
                <Container sx={{mb: 4}} maxWidth="sm">
                    <Typography mb={3} variant="h6" sx={{color: 'text.secondary'}}>
                        Welcome to
                    </Typography>
                    <Typography mb={3} variant="h4" sx={{color: 'primary.main'}}>
                        DEC Shipping
                    </Typography>
                    <Typography mb={4} variant="body1" sx={{color: 'text.secondary', fontWeight: 400}}>
                        Take the complexity out of customs Freight Solutions with customs brokerage services
                    </Typography>
                    <Box>
                        <Grid container={true} spacing={2} alignItems="center">
                            <Grid item={true} xs={12}>
                                <Link to="/auth/login" style={{textDecoration: 'none'}}>
                                    <Button
                                        color="primary"
                                        fullWidth={true}
                                        sx={{
                                            textTransform: 'capitalize'
                                        }}
                                        variant="contained"
                                        disableElevation={true}>
                                        Sign In
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Container maxWidth="sm">
                    <Carousel
                        autoPlay={true}
                        stopAutoPlayOnHover={true}
                        duration={3000}
                        indicators={false}
                        cycleNavigation={true}>
                        {DEC_SHIPPING_DATA.FEATURES.map((item, index) => {
                            return (
                                <Box key={index}>
                                    <BannerSliderItem item={item}/>
                                </Box>
                            )
                        })}
                    </Carousel>
                </Container>
            </Box>
        </Box>
    )
}

export default VerificationAcknowledgmentPage;
