import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AdminMenu from './AdminMenu';
import { Route } from 'react-router';
import MainPage from '../pages/MainPage';





const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function ContainerDesktop() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
                <AdminMenu></AdminMenu>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
                <Route exact path="/admin/" component={MainPage}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
}