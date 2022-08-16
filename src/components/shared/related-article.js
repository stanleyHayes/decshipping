import React from "react";
import {Box, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const RelatedArticle = ({article}) => {
    return (
        <Card variant="outlined" sx={{height: '100%'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <CardMedia
                    src={article.image} component="img"
                    sx={{height: 200, objectFit: 'cover', objectPosition: 'center', borderRadius: 1}}/>
                <CardContent sx={{flex: 1}}>
                    <Stack direction="column" spacing={2}>
                        <Link to={`/article/${article._id}`} style={{textDecoration: 'none'}}>
                            <Typography sx={{color: 'text.primary', fontWeight: 200}} variant="h6">
                                {article.title}
                            </Typography>
                        </Link>
                        <Typography sx={{color: 'text.secondary'}} variant="body2">
                            {article.caption}
                        </Typography>
                    </Stack>
                </CardContent>
            </Box>
        </Card>
    )
}

export default RelatedArticle;
