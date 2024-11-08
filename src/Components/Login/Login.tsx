import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { useAlert } from '../../Alerts/AlertContext';
import authServices from "../../Services/AuthService";

type LoginType = 'Admin' | 'Company' | 'Client';

export function Login(): JSX.Element {

    const { setAlert } = useAlert();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginType, setLoginType] = useState<LoginType>('Client');

    const navigate = useNavigate();


    function submitLogin(event:React.FormEvent) {
        event.preventDefault();

        authServices.login(username,password,loginType)
            .then(res =>{
                localStorage.token = res;
                switch (loginType){
                    case "Admin":
                        navigate("/admin");
                        break;
                    case "Company":
                        navigate("/company");
                        break;
                    case "Client":
                        navigate("/client");
                        break;
                    default:
                        setAlert({
                            type: 'warning',
                            title: 'warning',
                            message: 'unknown login type'
                        });
                        return;
                }

            })
            .catch(err => {
                setAlert({
                    type: 'error',
                    title: 'Error',
                    message: err.response?.data || "An error occurred during login."
                });
            });
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
             }}>
            <form onSubmit={submitLogin}>
                <TextField
                    label="UserName"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}

                />
                <TextField
                    label="Password"
                    type="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}

                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Login Type</InputLabel>
                    <Select
                        label="Login Type"
                        value={loginType}
                        onChange={(e) => setLoginType(e.target.value as LoginType)}>

                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Company">Company</MenuItem>
                        <MenuItem value="Client">Client</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{marginTop: 2}}

                >
                    Login
                </Button>
            </form>
        </Box>
    );
}
