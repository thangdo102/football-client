import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SignInForm from "./components/SignInForm/SignInForm";

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <HomePage path="/homePage"/>
          <SignInForm path="/login" />
        </Switch>
      </Router>
    </>
  );
}
