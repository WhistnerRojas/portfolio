import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material'

export default function PortfolioCard(props:any) {

    const platform = 'Kodego'
    const imgPath = '../../../../resources/img'

    return (
        <Card sx={{ 
                maxWidth: 390, 
                height: 442, 
                marginLeft: 2, 
                marginRight: 2, 
                marginTop: 2, 
                marginBottom: 8, 
                borderRadius: 3,
                background: 'var(--subLinks)',
                '&::before':{
                    content: `"${platform}"`,
                }
            }} className='portfolio_title'>
            <CardActionArea sx={{'&:hover':{cursor: 'default'}}}>
                <CardMedia
                    component="img"
                    height="250"
                    image={`${imgPath}/${props.img}`} 
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" 
                        sx={{color: 'white !important'}}
                    >
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='fs-6'>
                        TechStack: Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a className='btn btn-dark' href='#'>
                    Github
                </a>
                <a className='btn btn-dark' href='#'>
                    Live Demo
                </a>
            </CardActions>
        </Card>
    );
}