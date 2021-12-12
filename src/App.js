// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); // This State check whether dark mode is enabled or not, initially it is light
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils- Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils- Light mode";
    }
  };
  return (
    <>
      {/* <Navbar title="NavBar2"  mode ={mode}/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText = "About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Switch> */}
         {/* <Route exact path="/about">       exact should be used to go to exact location */}
         
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */} 
              <TextForm
                showAlert={showAlert}
                heading="Enter the text below to analyze"
                mode={mode}
              />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
