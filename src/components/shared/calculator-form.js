import {Box, Button, Card, CardContent, Grid, TextField} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";

const CalculatorForm = () => {

    const formik = useFormik({
        initialValues: {
            senderName: '',
            senderPhone: '',
            email: '',
            phone: '',
            weight: '',
            fragile: '',
            receiverAddress: '',
            senderAddress: '',
            pickupArea: '',
            deliveryArea: '',
        },
        validateOnChange: true,
        onSubmit: (values, {resetForm}) => {
            console.log(values, resetForm);
        },
        validationSchema: yup.object().shape({
            senderName: yup.string().required('First name required'),
            senderPhone: yup.string().required('Last name required'),
            email: yup.string().email('Invalid email').required('email required'),
            phone: yup.string().phone('Invalid phone').required('Phone name required'),
            weight: yup.string().required('Subject required'),
            fragile: yup.string().required('Message required'),
            receiverAddress: yup.string().required('Receiver Address required'),
            senderAddress: yup.string().required('Sender Address required'),
            pickupArea: yup.string().required('Pickup required'),
            deliveryArea: yup.string().required('Pickup required')
        })
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <Card
                variant="elevation"
                elevation={0}
                sx={{}}>
                <CardContent>
                    <Box sx={{mb: 2}}>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12} md={6}>
                                <TextField
                                    fullWidth={true}
                                    placeholder="First Name"
                                    required={true}
                                    label="First Name"
                                    variant="outlined"
                                    helperText={formik.touched.senderName && formik.errors.senderName}
                                    name="senderName"
                                    error={Boolean(formik.touched.senderName && formik.touched.senderName)}
                                    size="medium"
                                    color="secondary"
                                    sx={{backgroundColor: 'background.light'}}
                                    value={formik.values.senderName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Last Name"
                                    required={true}
                                    label="Last Name"
                                    variant="outlined"
                                    helperText={formik.touched.senderPhone && formik.errors.senderPhone}
                                    name="senderPhone"
                                    error={Boolean(formik.touched.senderPhone && formik.touched.senderPhone)}
                                    size="medium"
                                    color="secondary"
                                    sx={{backgroundColor: 'background.light'}}
                                    value={formik.values.senderPhone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12} md={6}>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Email"
                                    required={true}
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    helperText={formik.touched.email && formik.errors.email}
                                    name="email"
                                    error={Boolean(formik.touched.email && formik.touched.email)}
                                    size="medium"
                                    color="secondary"
                                    sx={{backgroundColor: 'background.light'}}
                                    value={formik.values.senderName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Phone Number"
                                    required={true}
                                    label="Phone Number"
                                    type="tel"
                                    variant="outlined"
                                    helperText={formik.touched.phone && formik.errors.phone}
                                    name="phone"
                                    error={Boolean(formik.touched.phone && formik.touched.phone)}
                                    size="medium"
                                    color="secondary"
                                    sx={{backgroundColor: 'background.light'}}
                                    value={formik.values.senderPhone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                        </Grid>
                    </Box>


                    <Box sx={{mb: 2}}>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12} md={6}>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Subject"
                                    required={true}
                                    label="Subject"
                                    type="text"
                                    variant="outlined"
                                    helperText={formik.touched.weight && formik.errors.weight}
                                    name="weight"
                                    error={Boolean(formik.touched.weight && formik.touched.weight)}
                                    size="medium"
                                    color="secondary"
                                    sx={{backgroundColor: 'background.light'}}
                                    value={formik.values.senderPhone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Message"
                                    required={true}
                                    label="Message"
                                    type="text"
                                    variant="outlined"
                                    helperText={formik.touched.fragile && formik.errors.fragile}
                                    name="fragile"
                                    error={Boolean(formik.touched.fragile && formik.touched.fragile)}
                                    size="medium"
                                    color="secondary"
                                    sx={{backgroundColor: 'background.light'}}
                                    value={formik.values.senderPhone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12} md={6}>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Pickup Area"
                                    required={true}
                                    label="Pickup Area"
                                    variant="outlined"
                                    helperText={formik.touched.pickupArea && formik.errors.pickupArea}
                                    name="senderAddress"
                                    error={Boolean(formik.touched.pickupArea && formik.touched.pickupArea)}
                                    size="medium"
                                    color="secondary"
                                    sx={{backgroundColor: 'background.light'}}
                                    value={formik.values.pickupArea}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Delivery Area"
                                    required={true}
                                    label="Delivery Area"
                                    variant="outlined"
                                    helperText={formik.touched.deliveryArea && formik.errors.deliveryArea}
                                    name="receiverAddress"
                                    error={Boolean(formik.touched.deliveryArea && formik.touched.deliveryArea)}
                                    size="medium"
                                    color="secondary"
                                    sx={{backgroundColor: 'background.light'}}
                                    value={formik.values.deliveryArea}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12} md={6}>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Sender Address"
                                    required={true}
                                    label="Sender Address"
                                    variant="outlined"
                                    helperText={formik.touched.senderAddress && formik.errors.senderAddress}
                                    name="senderAddress"
                                    error={Boolean(formik.touched.senderAddress && formik.touched.senderAddress)}
                                    size="medium"
                                    color="secondary"
                                    sx={{backgroundColor: 'background.light'}}
                                    value={formik.values.senderAddress}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    multiline={true}
                                    minRows={5}
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Receiver Address"
                                    required={true}
                                    label="Receiver Address"
                                    variant="outlined"
                                    helperText={formik.touched.receiverAddress && formik.errors.receiverAddress}
                                    name="receiverAddress"
                                    error={Boolean(formik.touched.receiverAddress && formik.touched.receiverAddress)}
                                    size="medium"
                                    color="secondary"
                                    sx={{backgroundColor: 'background.light'}}
                                    value={formik.values.receiverAddress}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    multiline={true}
                                    minRows={5}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Grid container={true} justifyContent="center">
                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Button
                                fullWidth={true}
                                onClick={formik.handleSubmit}
                                type="submit"
                                color="primary"
                                disableElevation={true}
                                variant="contained"
                                sx={{textTransform: 'capitalize'}}
                                size="large">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </form>
    )
}

export default CalculatorForm;
