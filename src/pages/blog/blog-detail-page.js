import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Chip,
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
import {SearchOutlined} from "@mui/icons-material";
import PopularArticle from "../../components/shared/popular-article";
import moment from "moment";
import {Skeleton} from "@mui/lab";
import RelatedArticle from "../../components/shared/related-article";

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
                                    <Grid item={true} xs={12}>
                                        <Typography align="center" variant="h5" sx={{color: 'white', mb: 2}}>
                                            {article && article.title}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>}
                    image={article && article.image}
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
                            <Grid item={true} xs={12} md={8}>
                                <Container>
                                    {!article && (
                                        <Box>

                                        </Box>
                                    )}
                                    <Stack direction="column" spacing={4} sx={{mb: 4}}>
                                        {articleLoading ? (
                                            <Skeleton variant="text" animation="pulse"/>
                                        ) : (
                                            <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 200, mb: 4}}>
                                                {article && article.title}
                                            </Typography>
                                        )}
                                        {articleLoading ? (
                                            <Stack direction="column" spacing={2}>
                                                <Skeleton variant="rectangular" width="100%" height={100}
                                                          animation="pulse"/>
                                                <Skeleton variant="rectangular" width="100%" height={100}
                                                          animation="pulse"/>
                                                <Skeleton variant="rectangular" width="100%" height={100}
                                                          animation="pulse"/>
                                            </Stack>
                                        ) : (
                                            <Stack direction="column" spacing={2}>
                                                {article && article.details && article.details.map((paragraph, index) => {
                                                    return (
                                                        <Typography
                                                            key={index}
                                                            variant="body2"
                                                            sx={{color: 'text.secondary'}}>
                                                            {paragraph}
                                                        </Typography>
                                                    )
                                                })}
                                            </Stack>
                                        )}

                                        {articleLoading ? (
                                            <Skeleton variant="text" animation="pulse"/>
                                        ) : (
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

                                                <Chip label={article && article.category} variant="filled"/>

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
                                                    {`by ${article?.author?.name}, ${article?.author?.role}`}
                                                </Typography>
                                            </Stack>
                                        )}

                                    </Stack>

                                    {article && article.relatedArticles && article.relatedArticles.length === 0 && (
                                        <Box sx={{
                                            backgroundColor: 'background.paper',
                                            minHeight: '30vh',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Typography
                                                variant="h6"
                                                sx={{color: 'text.secondary'}}>
                                                No news available
                                            </Typography>
                                        </Box>
                                    )}


                                    {
                                        article && article.relatedArticles && article.relatedArticles.length > 0 && (
                                            <Grid sx={{mb: 6}} container={true} spacing={4}>
                                                {article && article.relatedArticles.map(article => {
                                                    return (
                                                        <Grid key={article._id} item={true} xs={12} md={6}>
                                                            <RelatedArticle article={article}/>
                                                        </Grid>
                                                    )
                                                })}
                                            </Grid>
                                        )
                                    }
                                </Container>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <form onSubmit={formik.handleSubmit}>
                                    <Typography variant="body2" sx={{color: 'text.primary', fontWeight: 'bold', mb: 1}}>
                                        Search Here
                                    </Typography>
                                    <Grid container={true} alignItems="center">
                                        <Grid item={true} xs={12} md={10}>
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
                                        <Grid item={true} xs="auto" md={2}>
                                            <SearchOutlined
                                                color="secondary"
                                                sx={{
                                                    backgroundColor: 'primary.main',
                                                    padding: 1,
                                                    fontSize: 40,
                                                    mt: 0.5
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
