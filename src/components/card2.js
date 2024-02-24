import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);



export default function OutlinedCard(props) {
    return (
        <Box sx={{ minWidth: "100%" }}>
            <div className='card-container'>
                <Card sx={{ backgroundColor: "RGBA(211, 211, 211, 0.2)" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "flex-start" }}>
                        <Typography variant="h5" component="div">
                            name: {props.item.name}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            climate: {props.item.climate}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            population:{props.item.population}
                        </Typography>
                        <Typography variant="body2">
                            terrain:{props.item.terrain}
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </Box>
    );
}