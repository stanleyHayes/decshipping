import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import Overlay from "../../components/shared/overlay";
import {Link} from "react-router-dom";
import banner from "./../../assets/images/banners/home.jpg";
import truck2 from "./../../assets/images/services/truck2-1.jpg";
import image2 from "./../../assets/images/services/ocean-freight-img.jpg";
import image3 from "./../../assets/images/services/air-freight-img.jpg";
import {ArrowRightAlt} from "@mui/icons-material";
import {DEC_SHIPPING_DATA} from "../../utils/data";
import 'react-multi-carousel/lib/styles.css';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {selectTracking, TRACKING_ACTION_CREATORS} from "../../redux/features/tracking/tracking-slice";
import {useNavigate} from "react-router";
import * as yup from "yup";
import {LoadingButton} from "@mui/lab";
import {useSnackbar} from "notistack";
import Service from "../../components/shared/service";
import CalculatorForm from "../../components/shared/calculator-form";
import {selectArticle} from "../../redux/features/article/article-slice";
import Article from "../../components/shared/article";

const HomePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {enqueueSnackbar} = useSnackbar();

    const showMessage = (message, options) => {
        enqueueSnackbar(message, options);
    }

    const {shipmentLoading} = useSelector(selectTracking);
    const {articles} = useSelector(selectArticle);

    const trackingFormik = useFormik({
        initialValues: {
            tracking: '',
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {
            dispatch(TRACKING_ACTION_CREATORS.track({
                trackingID: values.tracking,
                resetForm,
                setSubmitting,
                navigate,
                showMessage
            }));
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            tracking: yup.string().required('tracking required'),
        })
    });

    return (
        <Layout>
            <Box>
                <Overlay
                    children={
                        <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                            <Container>
                                <Grid container={true} spacing={4} alignItems="center" justifyContent="flex-end">
                                    <Grid item={true} xs={12} md={4}>
                                        <Typography variant="h3" sx={{color: 'white', mb: 2}}>
                                            DEC Shipping
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'white', mb: 2, fontWeight: 400}}>
                                            Take the complexity out of customs Freight Solutions with customs brokerage
                                            services
                                        </Typography>
                                        <form autoComplete="off" onSubmit={trackingFormik.handleSubmit}>
                                            <Card variant="outlined" sx={{
                                                backgroundColor: 'background.transparent',
                                                backdropFilter: 'blur(5px)'
                                            }}>
                                                <CardContent>
                                                    <Box>
                                                        <Typography
                                                            mb={1} variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Tracking Number
                                                        </Typography>
                                                        <Grid container={true} spacing={2} alignItems="center">
                                                            <Grid item={true} xs={12} md={8}>
                                                                <TextField
                                                                    fullWidth={true}
                                                                    value={trackingFormik.values.tracking}
                                                                    id="tracking"
                                                                    name="tracking"
                                                                    type="tracking"
                                                                    error={Boolean(trackingFormik.touched.tracking && trackingFormik.errors.tracking)}
                                                                    onChange={trackingFormik.handleChange}
                                                                    onBlur={trackingFormik.handleBlur}
                                                                    placeholder="Enter yout tracking number"
                                                                    required={true}
                                                                    label="Tracking No."
                                                                    size="small"
                                                                    color="secondary"
                                                                    margin="dense"
                                                                />
                                                            </Grid>
                                                            <Grid item={true} xs={12} md={4}>
                                                                <LoadingButton
                                                                    type="submit"
                                                                    size="large"
                                                                    color="primary"
                                                                    sx={{
                                                                        textTransform: 'capitalize'
                                                                    }}
                                                                    fullWidth={true}
                                                                    loadingPosition="start"
                                                                    startIcon={shipmentLoading ?
                                                                        <CircularProgress color="secondary"/> : null}
                                                                    loadingIndicator={shipmentLoading ?
                                                                        <CircularProgress color="secondary"/> : null}
                                                                    loading={shipmentLoading}
                                                                    variant="contained"
                                                                    disableElevation={true}>
                                                                    {shipmentLoading ? 'Tracking...' : 'Track'}
                                                                </LoadingButton>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </form>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>}
                    image={banner}
                    backgroundColor="#000000"/>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                            We guarantee fast and safe transport for your packages
                        </Typography>
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

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 2}}>
                                        Reliable Logistics & Transport Solutions
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        DEC Shipping Group is a representative logistics operator providing full range
                                        of service in the sphere of customs clearance transportation worldwide for any
                                        cargo.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 4}}>
                                        We pride ourselves on providing the best transport and shipping services
                                        available all over the world. Our skilled personnel, utilising the latest
                                        communications.
                                    </Typography>
                                    <Link to={'/about'} style={{textDecoration: 'none'}}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            disableElevation={true}
                                            endIcon={<ArrowRightAlt/>}
                                            sx={{textTransform: 'capitalize'}}>
                                            Learn More
                                        </Button>
                                    </Link>

                                    <Divider variant="fullWidth" sx={{my: 3}}/>

                                    <Typography variant="body1" sx={{color: 'text.primary', mb: 2, fontWeight: 'bold'}}>
                                        Trusted By Some of The World wide Companies for over 10 years
                                    </Typography>

                                </Box>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    src={truck2}
                                    sx={{
                                        borderRadius: 2,
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'contain',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    src={image2}
                                    sx={{
                                        borderRadius: 2,
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'contain',
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
                                            <Typography variant="body1" sx={{color: 'text.primary', mb: 2}}>
                                                100% Safe Delivery
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                                Organically grow the holistic world view of disruptive innovation via
                                                workplace diversity.
                                            </Typography>
                                        </Grid>
                                        <Grid item={true} xs={12} md={4}>
                                            <Typography variant="body1" sx={{color: 'text.primary', mb: 2}}>
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
                                            <Typography variant="body1" sx={{color: 'text.primary', mb: 2}}>
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

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Typography align="center" variant="h5" sx={{color: 'text.primary', mb: 4}}>
                            Find out the approximate cost of delivery of your shipments
                        </Typography>
                        <Grid spacing={4} container={true} justifyContent="space-between">
                            <Grid item={true} xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    src={image3}
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <CalculatorForm/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.default'}}>
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

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={6}>
                                <Typography align="center" variant="h4" sx={{color: 'text.primary', mb: 4}}>
                                    Latest blog posts
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12} md="auto">
                                <Link to={'/articles'} style={{textDecoration: 'none'}}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        disableElevation={true}
                                        endIcon={<ArrowRightAlt/>}
                                        sx={{textTransform: 'capitalize'}}>
                                        View All
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>

                        <Grid item={true} xs={12} md={6}>
                            <Stack
                                divider={<Divider variant="fullWidth" light={true}/>}
                                direction="column"
                                spacing={2}>
                                {articles && articles.map((article, index) => {
                                    return (
                                        <Box key={index}>
                                            <Article article={article}/>
                                        </Box>
                                    )
                                })}
                            </Stack>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default HomePage;
