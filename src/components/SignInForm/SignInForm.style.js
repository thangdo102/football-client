import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      height: "100vh",
    },
    logginText: {
      color: 'red',
      fontSize: 18
    },
    inputText: {
      width: 200,
      height: 50,
    },
    textInput:{
display : 'flex'
    },
    formLoggin:{
      // display: 'flex'
    },
    form: {
      width: 200,
      height: 200,
      top: "20%",
      left: "50%",
      position: 'absolute'
    },
  }),
  { index: 1 }
);
