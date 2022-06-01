import * as React from 'react';
import { Box, Card, CardContent, Typography, CardActionArea, CardActions, Button } from '@mui/material/'



export default function BasicCard() {
    return (
        <Box width='650px' mb={-3} mt={10} ml={30} p={1.5} component={Card}>
            <Card variant="outlined">
                <CardActionArea href="localhost:3000/articles">
                    <CardContent>
                        <Typography gutterBottom variant='h4' component='div'>
                            Title of Article
                        </Typography>
                        <Typography sx={{ fontSize: 12 }}>
                            01/06/2022
                        </Typography>
                        <Typography variant='body2' component='p'>
                            ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facere soluta repellendus impedit autem optio obcaecati. Similique, harum non suscipit veritatis quas sunt culpa dolorum nihil quibusdam animi, ab atque.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box >
    );
}