import Layout from "../../components/layout/layout";
import {Box, Container, Stack, Typography} from "@mui/material";
import banner from "./../../assets/images/banners/contact.jpg";
import Banner from "../../components/shared/banner";
import FAQ from "../../components/shared/faq";
import {DEC_SHIPPING_DATA} from "../../utils/data";

const FAQPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    children={
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Container>
                                <Stack direction="column" spacing={4}>
                                    <Typography align="center" variant="h3" sx={{color: 'white'}}>
                                        FAQs
                                    </Typography>
                                </Stack>
                            </Container>
                        </Box>
                    }
                    links={[{label: 'Home', link: '/'}, {label: 'FAQ', link: '/faqs'}]}
                    backgroundImage={banner}
                />
                <Box sx={{py: 8}}>
                    <Container>
                        <Typography align="center" variant="body2" sx={{color: 'text.secondary', mb: 4}}>
                            Questions and Answers
                        </Typography>

                        <Stack direction="column" spacing={2}>
                            {DEC_SHIPPING_DATA.FAQ.map((faq, index) => {
                                return (
                                    <Box item={true} key={index}>
                                        <FAQ faq={faq}/>
                                    </Box>
                                )
                            })}
                        </Stack>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default FAQPage;
