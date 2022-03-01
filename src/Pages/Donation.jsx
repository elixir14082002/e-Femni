import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Card, CardContent, TextField, makeStyles, Typography, Button} from '@material-ui/core';
import Navbar from '../Components/Navbar';

const useStyles= makeStyles((theme)=>({
  card:{
    width: "40%",
    margin: "0 auto",
    padding: theme.spacing(4),
    textAlign: "center",
    marginTop: theme.spacing(12),
    backgroundColor: "#FDEFF4"
  },

}));

function Donation() {

  const navigate= useNavigate();
    const classes= useStyles();

  return (
    <div> 
    <Navbar />
    <Card className={classes.card}>
    <CardContent className={classes.cardcontent}>
    <TextField label="NAME" variant="filled" color="secondary" focused />
    <br></br>
    <br></br>
    <TextField label="EMAIL" variant="filled" color="secondary" focused />
    <br></br>
    <br></br>
    <TextField label="AMOUNT" variant="filled" color="secondary" focused />
    <br></br>
    <br></br>
    </CardContent>
    <Button variant="contained" color="secondary"
    onClick={()=>{
      navigate("/home");
      }}>Submit</Button>
  </Card></div>
  )
}

export default Donation;