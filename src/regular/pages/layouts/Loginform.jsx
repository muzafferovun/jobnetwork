import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import { useHistory } from 'react-router';
import Mainpage from '../../../admin/AdminMainpage';
import AdminMainpage from '../../../admin/AdminMainpage';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000/">
                www.jobnetwork.org
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const UseStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function Loginform() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    async function login() {
        let item = { email, password };
        let result = fetch("http://localhost:8080/api/user/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await (await result).json();
        sessionStorage.setItem('ssid', result.sessioncode)
        if(result.sessioncode!=""){
            if(result.userType===100)
                history.push("/admin")
            else if(result.userType===10)
            history.push("/company")
        else if(result.userType===1)
             history.push("/person")
        }

    }
    
      
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        JobNetwork
                    </Typography>
                            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
             value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
             value={password}
               onChange={(e) => setPassword(e.target.value)}
          />
                   
                   <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
             onClick={login}
          >
            Sign In
          </Button>
                   
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Yeni Şirket Hesabı oluştur
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Yeni JobNetwork Hesabı oluştur"}
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid container justify="center">
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Şifremi unuttum?"}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>

        </div>
    )
}
