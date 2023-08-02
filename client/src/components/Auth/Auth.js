import React, { useState } from 'react';
import Input from './input.js';
import useStyles from './styles.js';
import { Avatar, Button, Typography,Paper, Grid, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined.js'

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] =useState(false);
    

    const handleShowPassword =() => setShowPassword ((prevShowPassword) => !prevShowPassword);
   
    const handleSubmit =() =>{

    }

    const handleChange =() =>{}

    const switchMode =() =>{}
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);

  return (
    <Container component='main' maxWidth="xs">
        <Paper className={classes.paper}  elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'} </Typography>
       <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {
            isSignup && (
              <>
             
              <Input name="firstName" label="First Name" handleChange ={handleChange} autoFocus half/>
              <Input name="lastName" label="last Name" handleChange ={handleChange}  half/>
              </>
            )
          }
          <Input name='email' label='email address' handleChange={handleChange} type='email'/>
          <Input name='password' label='password' handleChange={handleChange} type={showPassword ? 'text' : 'password'}  handleShowPassword={handleShowPassword}/>
       {isSignup && <Input name='confirmPassword' label='Repeat Password'  handleChange={handleChange} type='password'/>}
        </Grid>
        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
        {isSignup ? 'Sign Up' : 'Sign In'}
        </Button>
       <Grid container justify-content = "flex-end">
        <Grid item>
          <Button onClick={switchMode}>
              {isSignup ? 'Already have an account ? Sign in' : 'Dont have any account? Sign Up'}
          </Button>
        </Grid>
       </Grid>
       </form>
       
        </Paper>
    </Container>
  )
}

export default Auth;