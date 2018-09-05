import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Login extends Component {
    render() {
        return (
            <div className="background_div">
                <div className="main_div">Welcome to <br />Soiree!</div>
                <Grid
                    container
                    justify="flex-end"
                    className="padding_top"
                    >
                    <Grid item xs={12} sm={6} lg={6} xl={3} >
                        <div className="float_right">Not a member? <br /><span className="signUpText">SIGN UP</span></div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} xl={3}>
                        <div className="float_left">Already a member? <br /><span className="loginText">LOG IN</span></div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Login;