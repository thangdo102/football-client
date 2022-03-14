import { useEffect, useState } from "react";
import Course from "./models/course.js";
import GlobalContextProvider from "./context/index.js";
import Routes from "./Routes.js";

const App = () => {
  const [state, setState] = useState("");

  const callAPI = async () => {
    const course = await Course.listCourses();
    setState(course[0].name);
  };
  useEffect(() => {
    callAPI();
  });

  return (
    <GlobalContextProvider>
      <Routes/>
    </GlobalContextProvider>
  );
};

export default App;
