import {Card, CardContent, CardMedia, Divider, Grid, Stack, Typography} from "@mui/material";
import moment from "moment";

const PopularArticle = ({article}) => {
    return (
        <Card elevation={0} sx={{backgroundColor: 'background.transparent'}}>
            <Grid container={true} spacing={4} alignItems="center">
                <Grid item={true} xs={12} md={6}>
                    <CardMedia
                        component="img"
                        src={article.image}
                        sx={{
                            borderRadius: 2,
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}/>
                </Grid>
                <Grid item={true} xs={12} md={6}>
                    <CardContent>
                        <Stack direction="column" spacing={2} divider={<Divider variant="fullWidth"/>}>
                            <Typography variant="body2" sx={{color: 'text.primary'}}>
                                {article.title}
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                {moment(article.createdAt).fromNow()}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default PopularArticle;
