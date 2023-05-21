import React,{useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import digitalstory from './Images/digitalstory.png';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js';
import { getPosts } from './actions/posts.js';

const App =()=>{
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect( ()=>{
      dispatch(getPosts ());
  }, [dispatch]);
  return (
    <Container maxidth='lg' >
      <AppBar className ={classes.appBar} position='static' color='inherit' >
      <Typography  className ={classes.heading} variant='h2' align='center'>Digital Story</Typography>
      <img  className ={classes.image} src={digitalstory} alt='digitalstory' height='60'/>

      </AppBar>

      <Grow in >
        <Container>
          <Grid container justify='space-between' alignItems='stretch'  spacing={3} > 
             <Grid item xs={12} sm={7}>
                 <Posts/>
             </Grid>
             <Grid item xs={12} sm={4}>
         <Form/>
        </Grid>
          </Grid>
        </Container>

      </Grow>
    </Container>
  )
}
export default App;