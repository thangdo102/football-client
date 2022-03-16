import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      height: "100vh",
      backgroundColor: 'yellow',
    },
    imgLoginPage:{
      width: "100%",
      height: "100%",
      position: 'relative',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    loginForm: {
      width: 300,
      height: 300,
      position: 'absolute',
      right: "45%",
      top: '20%',
      margin: 20,
      maxWidth: 300,
      padding: 16,
      backgroundColor: "pink",
    },
    input:{
      display: 'flex',
      marginTop: 30
    },
    textField: {
      marginRight: 10,
      width: 100,
      height: 20
    },
    inputText:{
      marginLeft: 10
    }
  }),
  { index: 1 }
);
