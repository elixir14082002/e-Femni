import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Group } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

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
    fontFamily: "",
  },
  about: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    backgroundColor: "#EEEEEE",
    height: `calc(100vh - 100px)`,
  },
  nav: {
    height: "100px",
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
}));

function Front() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.front}>
      {/* Navbar */}
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
          <div className={classes.leftPart}>
            <Group className={classes.icon} />
            <Typography className={classes.titleName}>e-Femni</Typography>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
