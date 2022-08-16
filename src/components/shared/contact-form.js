import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    TextField,
    Typography
} from "@mui/material";
import {useSelector} from "react-redux";
import {selectMessage} from "../../redux/features/message/message-slice";
import {useFormik} from "formik";
import * as yup from "yup";

const ContactForm = ({title, caption}) => {

    const {messageLoading, messageError} = useSelector(selectMessage);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',

        },
        validateOnChange: true,
        onSubmit: (values, {resetForm}) => {
            console.log(values, resetForm);
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('First name required'),
            email: yup.string().email('Invalid email').required('email required'),
            message: yup.string().required('Message required'),
        })
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <Typography variant="h4" align="center" sx={{color: 'text.primary', mb: 2}}>
                {title}
            </Typography>
            <Typography variant="body2" align="center" sx={{color: 'text.secondary', mb: 4}}>
                {caption}
            </Typography>

            <Card
                variant="elevation"
                elevation={0}
                sx={{
                    borderBottomRightRadius: 4,
                    borderTopRightRadius: 32,
                    borderBottomLeftRadius: 32,
                    borderTopLeftRadius: 4,
                }}>
                {messageLoading && <LinearProgress variant="query" color="secondary"/>}
                <CardContent>
                    {messageError && (
                        <Alert sx={{mb: 4}} variant="standard" severity="error">
                            <AlertTitle>{messageError}</AlertTitle>
                        </Alert>
                    )}
                    <Box sx={{mb: 4}}>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12} md={6}>
                                <Typography variant="body2" sx={{color: 'text.secondary', mb: 1, fontWeight: 'bold'}}>
                                    Name
                                </Typography>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Name"
                                    required={true}
                                    label="Name"
                                    variant="outlined"
                                    helperText={formik.touched.name && formik.errors.name}
                                    name="name"
                                    error={Boolean(formik.touched.name && formik.touched.name)}
                                    size="medium"
                                    color="secondary"
                                    sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Typography variant="body2" sx={{color: 'text.secondary', mb: 1, fontWeight: 'bold'}}>
                                    Email
                                </Typography>
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
                                    sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{mb: 4}}>
                        <Typography variant="body2" sx={{color: 'text.secondary', mb: 1, fontWeight: 'bold'}}>
                            Write Your Comment Here
                        </Typography>
                        <TextField
                            fullWidth={true}
                            placeholder="Message"
                            required={true}
                            label="Message"
                            type="text"
                            variant="outlined"
                            helperText={formik.touched.message && formik.errors.message}
                            name="message"
                            error={Boolean(formik.touched.message && formik.touched.message)}
                            size="medium"
                            color="secondary"
                            sx={{backgroundColor: 'background.light', borderRadius: 1}}
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            multiline={true}
                            minRows={5}
                        />
                    </Box>

                    <Button
                        onClick={formik.handleSubmit}
                        type="submit"
                        color="primary"
                        disableElevation={true}
                        variant="contained"
                        sx={{textTransform: 'capitalize'}}
                        size="large">
                        Send Message
                    </Button>
                </CardContent>
            </Card>
        </form>
    )
}

export default ContactForm;
