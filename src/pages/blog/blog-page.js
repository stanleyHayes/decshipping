import Layout from "../../components/layout/layout";
import {Box, Container, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import Overlay from "../../components/shared/overlay";
import banner from "../../assets/images/banners/home.jpg";
import Article from "../../components/shared/article";
import {useSelector} from "react-redux";
import {selectArticle} from "../../redux/features/article/article-slice";
import {useFormik} from "formik";
import * as yup from "yup";
import {DarkMode, SearchOutlined} from "@mui/icons-material";
import PopularArticle from "../../components/shared/popular-article";
import Banner from "../../components/shared/banner";

const BlogPage = () => {

    const {articles} = useSelector(selectArticle);

    const formik = useFormik({
        initialValues: {
            query: '',
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {

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
                <Banner
                    children={
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Container>
                                <Stack direction="column" spacing={4}>
                                    <Typography align="center" variant="h3" sx={{color: 'white'}}>
                                        Blog
                                    </Typography>
                                </Stack>
                            </Container>
                        </Box>
                    }
                    links={[{label: 'Home', link: '/'}, {label: 'Blog', link: '/articles'}]}
                    backgroundImage={banner}
                />

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container maxWidth="xl">
                        <Grid container={true} spacing={4}>
                            <Grid item={true} xs={12} md={9}>
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
                            <Grid item={true} xs={12} md={3}>
                                <form onSubmit={formik.handleSubmit}>
                                    <Typography variant="body2" sx={{color: 'text.primary', fontWeight: 'bold', mb: 1}}>
                                        Search Here
                                    </Typography>
                                    <Stack direction="row" alignItems="center">
                                            <TextField
                                                fullWidth={true}
                                                value={formik.values.query}
                                                id="query"
                                                name="query"
                                                type="text"
                                                sx={{flex: 1}}
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
                                    </Stack>
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

export default BlogPage;
