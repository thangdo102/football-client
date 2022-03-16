import { useEffect, useState } from "react";
import { useStyles } from "./SignInForm.style";
import { Formik, Form } from "formik";
import {
  Button,
  Grid,
  Typography,
  Fade,
  Container,
  TextField,
  Input,
  Link,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import loginImg from "../../assets/img/login.jpeg";
import Auth from "../../models/auth";
import Course from "../../models/course";

const SignIn = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState();
  const [passWord, setPassword] = useState("password");

  return (
    <>
      <div className={classes.root}>
        {/* <img className={classes.imgLoginPage} src={loginImg} alt="logo"/> */}
        <Fade in={true}>
          <Container>
            <Grid container spacing={2}>
              <div className={classes.loginForm}>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    const rs = await Auth.login(values.email, values.password);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className={classes.form}>
                        <div className={classes.input}>
                          <Typography>UserName: </Typography>
                          <input
                            type="email"
                            name="email"
                            className={classes.inputText}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                        </div>
                        {errors.email && touched.email && errors.email}

                        <div className={classes.input}>
                          <Typography>PassWord: </Typography>
                          <input
                            type="password"
                            name="password"
                            className={classes.inputText}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                        </div>
                      </div>

                      {errors.password && touched.password && errors.password}
                      <button type="submit" disabled={isSubmitting}>
                        Submit
                      </button>
                    </form>
                  )}
                </Formik>
                {userName}
              </div>
            </Grid>
          </Container>
        </Fade>
      </div>
    </>
  );
};

export default SignIn;
