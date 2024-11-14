import { Container, Avatar, Paper, Typography, Box, TextField, FormControlLabel, Button, Checkbox, Grid, Link } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

export default function Register() {
    const handleSubmit = () => {
        console.log("login");
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ padding: 2, marginTop: 8 }}>
                <Avatar sx={{ mx: "auto", bgcolor: "primary.main", textAlign: "center", mb: "1" }}>
                </Avatar>
                <Typography component="h1" variant='h5' sx={{ textAlign: "center", paddingBottom: 2 }}>Sign Up</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        placeholder="Enter First Name"
                        fullWidth
                        required
                        autoFocus
                        sx={{ mb: 2 }} />
                    <TextField
                        placeholder="Enter Last Name"
                        fullWidth
                        required
                        autoFocus
                        sx={{ mb: 2 }} />
                        <TextField
                        placeholder="Enter Username"
                        fullWidth
                        required
                        autoFocus
                        sx={{ mb: 2 }} />
                    <TextField
                        placeholder="Enter Password"
                        fullWidth
                        type='password' />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>Log in</Button>
                </Box>
                <Grid container justifyContent='space-between' sx={{ mt: 1 }}>
                <Grid item>
                        <Link component={RouterLink} to="/"> Log in</Link><h5>Already have an account?</h5>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}