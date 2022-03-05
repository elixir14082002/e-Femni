import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  TextField,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Cookies from "js-cookie";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "40%",
    margin: "0 auto",
    padding: theme.spacing(4),
    textAlign: "center",
    marginTop: theme.spacing(12),
    backgroundColor: "#FDEFF4",
  },
  cardcontent: {},
  signup: {
    color: "blue",
    cursor: "pointer",
  },
  err: {
    color: "red",
  },
}));

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function SignIn() {
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const navigate = useNavigate();
  const classes = useStyles();

  const loginUser = async (data) => {
    const res = await axios.post(
      "https://efemni.kiitians.com/api/login",
      data,
      {
        core: "no-cors",
      }
    );
    if (res.data.status === "error") {
      setError({
        status: true,
        message: res.data.error,
      });
    }
    if (res.data.status === "success") {
      setError({
        status: false,
        message: "",
      });
      Cookies.set("jwt-token", res.data.token);
      navigate("/home");
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      await loginUser({
        email: values.email,
        pass: values.password,
      });
      actions.setSubmitting(false);
    },
  });

  return (
    <div>
      <Card className={classes.card}>
        <form onSubmit={formik.handleSubmit}>
          <CardContent className={classes.cardcontent}>
            <TextField
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant="filled"
              color="secondary"
              focused
            />
            <br></br>
            <br></br>
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              variant="filled"
              color="secondary"
              focused
            />
            <br></br>
            <br></br>
            <Typography className={classes.err}>
              {error.status ? error.message : ""}
            </Typography>
            <Typography
              onClick={() => {
                navigate("/signup");
              }}
            >
              New here? <big className={classes.signup}>Sign Up</big>
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={formik.isSubmitting}
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default SignIn;
