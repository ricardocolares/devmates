import * as React from 'react';
import { Box, Card, CardContent, Typography, CardActionArea, CardActions, Button } from '@mui/material/'
import styled from 'styled-components';

const CustomBox = styled(Box)`
    width: 650px;
    margin-left: 15rem;
    margin-top: 1.5rem;
`

export default function BasicCard() {
    return (
        <CustomBox component={Card}>
            <Card variant="outlined">
                <CardActionArea href="/articles">
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
        </CustomBox>
    );
}
