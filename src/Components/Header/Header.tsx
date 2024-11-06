import "./Header.css";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Login} from "../Login/Login";

export function Header(): JSX.Element {

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check if user is logged in
    useEffect(()=>
    {
        const token = localStorage.getItem('token');

        if(token)
            setIsLoggedIn(true);
        else
            setIsLoggedIn(false);

    },[]);

    const handleAuthClick =()=>{
        //for logging out
        if(isLoggedIn){
            localStorage.removeItem('token')
            setIsLoggedIn(false);
            navigate('/home');
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Coupon CraZZZe
                    </Typography>
                    <Button color="inherit" onClick={handleAuthClick}>
                        {isLoggedIn?'Logout':'Login'}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );

}



