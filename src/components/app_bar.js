import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ButtonAppBar(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {
                        props.onBack && (
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={props.onBack}
                            >
                                <ArrowBackIosIcon />
                            </IconButton>
                        )
                    }
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {props.title ?? "Moovup"}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}