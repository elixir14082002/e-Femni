import {
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search, Cancel } from "@material-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  linkChild: {
    cursor: "pointer",
    margin: theme.spacing(2),
    color: "#524A4E",
    [theme.breakpoints.down("md")]: {
      marginTop: "0",
      marginLeft: "0",
      marginBottom: "0",
      marginRight: "10px",
    },
  },
  links: {
    display: "flex",
  },
  name: {
    color: "#524A4E",
    fontWeight: "bold",
    fontSize: "x-large",
  },
  side: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: "#FF5C8D",
    height: "45px",
    width: "45px",
    borderRadius: "50%",
  },
  cross: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#FFC0D3",
  },
  searchItems: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FDEFF4",
    borderRadius: "5px",
    width: "40%",
    [theme.breakpoints.down("md")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  icons: {
    display: (props) => (props.open ? "none" : "flex"),
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    width: "120px",
    cursor: "pointer",
  },
  navSm: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: (props) => (props.open ? "none" : "flex"),
    },
    iconType: {
      marginRight: theme.spacing(2),
    },
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ open });
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar className={classes.navbar}>
          {/* Name */}
          <div
            className={classes.side}
            onClick={() => {
              navigate("/");
            }}
          >
            <img className={classes.logo} src="/img/e-Femni.png" alt="logo" />
          </div>

          {/* Search Bar */}
          <div className={classes.searchItems}>
            <Search />
            <InputBase placeholder="Search"></InputBase>
            <Cancel className={classes.cross} onClick={() => setOpen(false)} />
          </div>
          <Search className={classes.navSm} onClick={() => setOpen(true)} />

          {/* Other pages */}
          <div className={classes.links}>
            <Typography
              className={classes.linkChild}
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </Typography>
            <Typography
              className={classes.linkChild}
              onClick={() => {
                navigate("/blogs");
              }}
            >
              Blogs
            </Typography>
            <Typography
              className={classes.linkChild}
              onClick={() => {
                navigate("/donate");
              }}
            >
              Donation
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
