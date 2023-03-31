import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function PortfolioCard({platform, projName, projLang, projDesc, img, projGit, projDemo  }: any) {

    const imgPath = '../../../../resources/img'
    const splitList = ()=>{
        return projLang !=='' && projLang.split(",").map((lang:string, keys:number)=>{
            return <Chip label={lang} variant="outlined" sx={{borderRadius:2}}/>
                    // <Chip label="Chip Outlined" variant="outlined" />
        })
    }

    return (
        <Card sx={{ 
                maxWidth: 390, 
                height: 455, 
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
                    height={250}
                    image={`${imgPath}/${img}`} 
                    alt="green iguana"
                />
                <CardContent sx={{minHeight: 150}}>
                    <Typography gutterBottom variant="h5" component="div" 
                        sx={{color: 'white !important'}}
                    >
                        {projName || "Title"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='fs-6'>
                        TechStack: <br/><Stack direction="row" flexWrap='wrap' spacing={1} className="d-inline-block text-truncate" sx={{maxWidth: 350}}>{splitList()}</Stack>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a className='btn btn-dark' href={projGit} target='_blank'>
                    Github
                </a>
                <a className='btn btn-dark' href={projDemo} target='_blank'>
                    Live Demo
                </a>
                <button className='btn btn-dark ms-2' >
                    more...
                </button>
            </CardActions>
        </Card>
    );
}