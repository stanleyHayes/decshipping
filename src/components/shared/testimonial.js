import {Card, CardContent, Stack, Typography} from "@mui/material";

const Testimonial = ({testimonial}) => {
    return (
        <Card sx={{height: '100%'}} elevation={0}>
            <CardContent sx={{flex: 1}}>
                <Stack spacing={1}>
                    <Typography
                        variant="h6"
                        sx={{textTransform: 'capitalize', color: 'text.secondary', fontWeight: 500}}>
                        {testimonial.review}
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <Typography
                            variant="body2"
                            sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                            {testimonial.user.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                            -
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                            {testimonial.company}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Testimonial;
