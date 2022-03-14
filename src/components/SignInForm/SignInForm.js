import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useStyles } from "./SignInForm.style";
import { Typography } from "@material-ui/core";

const SignIn = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState("Ahihi");
  const [passWord, setPassword] = useState("");

  return (
    <>
      <div className={classes.root}>
        <div className={classes.form}>
          <div>
            <p className={classes.logginText}>Log In</p>
          </div>
          <form className={classes.formLoggin}>
            <div className={classes.textInput}>
              <Typography>User Name</Typography>
              <input className={classes.inputText} value={userName}></input>
            </div>
            <div className={classes.textInput}>
              <Typography>Pass Word</Typography>
              <input className={classes.inputText} value={userName}></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
