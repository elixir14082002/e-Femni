import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Card, CardContent, TextField, makeStyles, Typography, Button} from '@material-ui/core';

const useStyles= makeStyles((theme)=>({
  card:{
    width: "40%",
    margin: "0 auto",
    padding: theme.spacing(4),
    textAlign: "center",
    marginTop: theme.spacing(12),
    backgroundColor: "#FDEFF4"
  },
  cardcontent:{
    
  },
  login:{
    color: "blue"
  }
}));


function Signup() {

    const navigate= useNavigate();
    const classes= useStyles();

  return (
    <div>
    <Card className={classes.card}>
      <CardContent className={classes.cardcontent}>
      <TextField label="NAME" variant="filled" color="secondary" focused />
      <br></br>
      <br></br>
      <TextField label="EMAIL" variant="filled" color="secondary" focused />
      <br></br>
      <br></br>
      <TextField label="PASSWORD" variant="filled" color="secondary" focused />
      <br></br>
      <br></br>
      <Typography onClick={()=>{
        navigate("/login");
        }}>Already have an account? <big className={classes.login}>Login</big></Typography>
      </CardContent>
      <Button variant="contained" color="secondary"
      onClick={()=>{
        navigate("/home");
        }}>Submit</Button>
    </Card>
    </div>
  )
}

export default Signup;