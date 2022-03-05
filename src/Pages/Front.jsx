import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  b: {
    marginTop: "2rem",
  },
  buttons: {
    padding: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  aboutContent: {
    padding: theme.spacing(2),
    width: "60%",
    textAlign: "center",
    fontStyle: "oblique",
  },
  aboutHeading: {
    textAlign: "center",
    padding: theme.spacing(2),
    color: "#FF5C8D",
    fontWeight: "bold",
  },
  about: {
    paddingTop: "6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    height: "100vh",
  },
  nav: {
    height: "60px",
    backgroundColor: "#FDEFF4",
    display: "flex",
    justifyContent: "center",
  },
  titleName: {
    marginLeft: theme.spacing(2),
    color: "#FF5C8D",
    fontWeight: "bold",
    fontSize: "xx-large",
    fontFamily: "",
  },
  icon: {
    backgroundColor: "#FF5C8D",
    height: "45px",
    width: "45px",
    borderRadius: "50%",
  },
  leftPart: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logo: {
    width: "120px",
    cursor: "pointer",
  },
  side: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

function Front() {
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt-token");
    try {
      jwt_decode(token);
      navigate("/home");
    } catch (err) {
      Cookies.remove("jwt-token");
    }
  });
  return (
    <div className={classes.front}>
      {/* Navbar */}
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
          <div
            className={classes.side}
            onClick={() => {
              navigate("/");
            }}
          >
            <img className={classes.logo} src="/img/e-Femni.png" alt="logo" />
          </div>
        </Toolbar>
      </AppBar>
      {/* About */}
      {
        <div className={classes.about}>
          <Typography variant="h4" className={classes.aboutHeading}>
            About
          </Typography>
          <hr width="50%" color="#FF5C8D" size="2"></hr>
          <Typography className={classes.aboutContent}>
            E-Femni is a one spot destination for all the sanitary needs. In
            today's world, less than 20% of females use sanitary products. We
            need to raise awareness about important Women Health Topic like
            PCOD, First Period and some irrational Myths about periods. There is
            a Donate Facility for the needy in our society. We can reach out to
            people and help fight the stigma around period.
          </Typography>
          <Typography className={classes.aboutContent}>
            LOGIN NOW TO SHOP/HELP OUR DONATE INITIATIVE
          </Typography>
          <hr width="50%" color="#FF5C8D" size="2"></hr>
          <div className={classes.buttons}>
            <div className={classes.b}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </Button>
            </div>
            <div className={classes.b}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      }
      {/* Buttons */}
      {/* Footer */}
    </div>
  );
}

export default Front;
