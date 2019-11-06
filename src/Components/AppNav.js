import React from "react"
import  { withStyles } from "@material-ui/core/styles"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function AppNav(props){

    const { classes } =props;

    return(
        <AppBar position="static" className={classes.NavColor}>
        <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
            NotiApp
            </Typography>
        </Toolbar>
        </AppBar>
    )
}

export default withStyles({
    NavColor:{
        backgroundColor:"cornflowerblue"
    }
}) (AppNav)
