import { Container, Avatar, Paper, Typography, Box, TextField, Button, Grid, Link} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import '../App.css';

export default function Forgot() {
    const handleSubmit = () => {      
        console.log("reset");
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ padding: 2, marginTop: 8 }}>
                <Avatar sx={{ mx: "auto", bgcolor: "primary.main", textAlign: "center", mb: "1" }}>
                </Avatar>
                <Typography component="h1" variant='h5' sx={{ textAlign: "center", paddingBottom: 2 }}>Reset Password</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        placeholder="Enter Username"
                        fullWidth
                        required
                        autoFocus
                        type='username'
                        sx={{ mb: 2 }} />
                    <TextField
                        placeholder="Type new Password"
                        fullWidth
                        required
                        type='password' />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>Reset Password</Button>
                </Box>
                <Grid container justifyContent='space-between' sx={{ mt: 1 }}>
                    <Grid item>
                        <Link component={RouterLink} to="/register">Sign Up</Link>
                    </Grid>
                    <Grid item>
                        <Link component={RouterLink} to="/">Log in</Link>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}