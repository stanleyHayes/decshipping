import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import Overlay from "../../components/shared/overlay";
import banner from "../../assets/images/banners/home.jpg";
import {useSelector} from "react-redux";
import {selectArticle} from "../../redux/features/article/article-slice";
import {useFormik} from "formik";
import * as yup from "yup";
import {DarkMode} from "@mui/icons-material";
import PopularArticle from "../../components/shared/popular-article";
import moment from "moment";

const BlogDetailPage = () => {

    const {article, articles, articleLoading, articleError} = useSelector(selectArticle);

    const formik = useFormik({
        initialValues: {
            query: '',
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {
            console.log(values, resetForm, setSubmitting);
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            query: yup.string().required('Search query required'),
        })
    });

    return (
        <Layout>
            <Box>
                <Overlay
                    children={
                        <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                            <Container>
                                <Grid container={true} spacing={4} alignItems="center">
                                    <Grid item={true} xs={12} md={6}>
                                        <Typography variant="h3" sx={{color: 'white', mb: 2}}>
                                            Our Blog
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>}
                    image={banner}
                    backgroundColor="#000000"/>
                {articleLoading && <LinearProgress variant="query" color="secondary"/>}

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container maxWidth="xl">
                        {articleError && (
                            <Alert severity="error">
                                <AlertTitle>{articleError}</AlertTitle>
                            </Alert>
                        )}
                        <Grid container={true} spacing={4}>
                            <Grid item={true} xs={12} md={9}>
                                {article && (
                                    <Stack
                                        divider={<Divider variant="fullWidth" light={true}/>}
                                        direction="column"
                                        spacing={2}>
                                        <Typography variant="h4" sx={{color: 'text.primary'}}>
                                            {article.title}
                                        </Typography>

                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                {article && moment(article.createdAt).format('MMMM, DD YYYY')}
                                            </Typography>
                                            {article &&
                                                (
                                                    <Typography
                                                        variant="body1"
                                                        sx={{color: 'text.secondary'}}>
                                                        &#8226;
                                                    </Typography>
                                                )
                                            }

                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                {`by ${article?.author?.name}, ${article?.author?.role} at DEC Shipping`}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                )}

                                {!article && (
                                    <Box>

                                    </Box>
                                )}
                            </Grid>
                            <Grid item={true} xs={12} md={3}>
                                <form onSubmit={formik.handleSubmit}>
                                    <Typography variant="body2" sx={{color: 'text.primary', fontWeight: 'bold', mb: 1}}>
                                        Search Here
                                    </Typography>
                                    <Grid container={true} alignItems="center">
                                        <Grid item={true} xs={12} md={8}>
                                            <TextField
                                                fullWidth={true}
                                                value={formik.values.query}
                                                id="query"
                                                name="query"
                                                type="text"
                                                error={Boolean(formik.touched.query && formik.errors.query)}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder="Enter"
                                                required={true}
                                                label="Search"
                                                size="small"
                                                color="secondary"
                                                margin="dense"
                                            />
                                        </Grid>
                                        <Grid item={true} xs="auto">
                                            <DarkMode
                                                sx={{
                                                    backgroundColor: 'light.active',
                                                    padding: 0.4,
                                                    fontSize: 32,
                                                    color: 'white'
                                                }}
                                                onClick={formik.handleSubmit}
                                            />

                                        </Grid>
                                    </Grid>
                                </form>
                                <Box sx={{my: 2}}>
                                    <Typography variant="body2" sx={{color: 'text.primary', fontWeight: 'bold', mb: 1}}>
                                        Popular Blogs
                                    </Typography>
                                    <Stack
                                        divider={<Divider variant="fullWidth" light={true}/>}
                                        direction="column"
                                        spacing={2}>
                                        {articles && articles.map((article, index) => {
                                            return (
                                                <Box key={index}>
                                                    <PopularArticle article={article}/>
                                                </Box>
                                            )
                                        })}
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

export default BlogDetailPage;
