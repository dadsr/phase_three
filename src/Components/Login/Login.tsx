import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Typography
} from '@mui/material';
import {useNavigate} from "react-router-dom";

type LoginType = 'Admin' | 'Company' | 'Client';


export function Login(): JSX.Element {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginType, setLoginType] = useState<LoginType>('Client');

    const handleLogin = () => {
        // Here you would typically make an API call to authenticate
        // For this example, we'll just simulate a successful login
        const token = 'example_token_' + loginType.toLowerCase();
        localStorage.setItem('token', token);
        localStorage.setItem('userType', loginType);
        alert(`Logged in as ${loginType}. Token stored in localStorage.`);
    };

    function submitLogin(event: React.FormEvent){
        event.preventDefault(); // DO NOT RUN ORIGINAL FORM SUBMIT CODE!
        authService.login(username, password)
            .then(token=>{localStorage.token = token; navigate("/toys");})
            .catch(err=>alert("ERROR! "+ err.response.data));
    }

    return (
        <Box className="Login"
             sx={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 maxWidth: 400,
                 margin: 'auto',
                 marginTop: 8,
                 padding: 3,
                 borderRadius: 2,
                 boxShadow: 3,
             }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Please Log in
            </Typography>
            <form onSubmit={submitLogin}>

                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Login Type</InputLabel>
                    <Select
                        value={loginType}
                        label="Login Type"
                        onChange={(e) => setLoginType(e.target.value as LoginType)}
                    >
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Company">Company</MenuItem>
                        <MenuItem value="Client">Client</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={handleLogin}
                    sx={{marginTop: 2}}
                >
                    Login
                </Button>
            </form>
        </Box>
);

}