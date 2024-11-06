import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';


export function Footer(): JSX.Element {
    return (
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: "left" }}>
                    <Typography variant="h6">
                        © 2024 Coupon CraZZZe. All rights reserved.
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
