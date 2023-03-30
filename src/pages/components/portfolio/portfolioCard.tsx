import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material'
import Web from '../../img/web3.png'

export default function PortfolioCard() {

    const kodego = 'kodego'

    return (
        <Card sx={{ 
                maxWidth: 390, 
                height: 450, 
                marginLeft: 2, 
                marginRight: 2, 
                marginTop: 2, 
                marginBottom: 8, 
                borderRadius: 3,
                '&::before':{
                    content: `"${kodego}"`,
                }
            }} className='portfolio_title'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="380"
                    image={Web}
                    alt="green iguana"
                />
                <CardContent sx={{background: 'var(--subLinks)'}}>
                    <Typography gutterBottom variant="h5" component="div" textAlign='center' 
                        sx={{color: 'white !important'}}
                    >
                        Lizard
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}