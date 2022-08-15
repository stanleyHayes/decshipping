import {Card, CardMedia, Divider, Grid, Stack, Typography} from "@mui/material";
import moment from "moment";

const Article = ({article}) => {
    return (
        <Card elevation={0}>
            <Grid container={true} spacing={4} alignItems="center">
                <Grid item={true} xs={12} md="auto">
                    <CardMedia
                        component="img"
                        src={article.image}
                        sx={{
                            borderRadius: 2,
                            objectFit: 'cover',
                            objectPosition: 'center',
                            width: 200
                        }}/>
                </Grid>
                <Grid item={true} xs={12} md={6}>
                    <Stack direction="column" spacing={2} divider={<Divider variant="fullWidth"/>}>
                        <Typography variant="body2" sx={{color: 'colors.green'}}>
                            {moment(article.createdAt).fromNow()}
                        </Typography>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                            {article.title}
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            {article.caption}
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Card>
    )
}

export default Article;
