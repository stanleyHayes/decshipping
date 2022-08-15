import {Card, CardContent, Stack, Typography} from "@mui/material";

const Service = ({service}) => {
    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                '&:hover': {

                }
            }}>
            <CardContent>
                <Stack direction="column" spacing={2}>
                    {service.icon}
                    <Typography variant="h6" sx={{color: 'text.primary'}}>
                        {service.name}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {service.description}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Service;
