import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  TextField,
  makeStyles,
  Button,
} from "@material-ui/core";
import Navbar from "../Components/Navbar";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "40%",
    margin: "0 auto",
    padding: theme.spacing(4),
    textAlign: "center",
    marginTop: theme.spacing(6),
    backgroundColor: "#FDEFF4",
    marginBottom: theme.spacing(6),
  },
  img: {
    width: "500px",
  },
  main: {
    width: "60%",
    display: "flex",
    margin: "auto",
    alignItems: "center",
    marginTop: theme.spacing(5),
    flexDirection: "column",
  },
  imgDiv: {
    borderRadius: "20px",
    overflow: "hidden",
  },
  message:{
    width: "80%",
    fontSize: ".7rem",
    marginTop: theme.spacing(3),
  },
  message2:{
    width: "80%",
    fontSize: ".7rem",
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
  }
}));

function Donation() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.main}>
        <div className={classes.imgDiv}>
          <img className={classes.img} src="/img/donate.jpeg" alt="donate" />
        </div>
        <div className={classes.message}>
          We here at e-Femni are presenting you a "DONATE NOW" portal to donate
          the needy in your society. Each penny of your contributed money goes
          in purchase of sanitary products for underprivileged. The feeling of
          giving and helping others is a blessing in itself. You can also be a
          part by contributing and helping in this good cause. We are very
          grateful for your appreciation and support.
        </div>
        <div className={classes.message2}>
        -Team, e-Femni.
         </div> 
      </div>

      <Card className={classes.card}>
        <CardContent className={classes.cardcontent}>
          <TextField label="NAME" variant="filled" color="secondary" focused />
          <br></br>
          <br></br>
          <TextField label="EMAIL" variant="filled" color="secondary" focused />
          <br></br>
          <br></br>
          <TextField
            label="AMOUNT"
            variant="filled"
            color="secondary"
            focused
          />
          <br></br>
          <br></br>
        </CardContent>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            navigate("/home");
          }}
        >
          Submit
        </Button>
      </Card>
    </div>
  );
}

export default Donation;
