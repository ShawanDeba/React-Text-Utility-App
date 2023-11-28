import './App.css';
import AboutDarkMode from './components/AboutDarkMode';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import AlertComponent from './components/AlertComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";



function App() {


  const [color, setcolor] = useState('#fff');
  const [colorName, setcolorName] = useState("Select Color");
  let radio_btn = document.getElementById("flexSwitchCheckDefault");


  function changeTheme() {
    if (color === '#fff') {
      setcolor('#212529');

      // For changing the body background
      document.body.style.background = '#2b2f32'
      showAlert("Dark Mode Has Been enabled", "success");
    }

    else {
      setcolor('#fff');
      document.body.style.background = '#fff'
      showAlert("Light Mode Has Been enabled", "success");
    }

    console.log(color);
    setcolorName("Select Color");
  }



  const [alert, setalert] = useState(null);

  function showAlert(message, type) {
    setalert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 1800);
  }




  const changeColorTheme = (event) => {
    console.log(event.target.id);

    let colorbtn = event.target.id;

    if (colorbtn === 'green') {
      setcolor("#083705");
      setcolorName("Green");
      document.body.style.background = '#057500';
    }

    else if (colorbtn === 'blue') {
      setcolor("#010F4B");
      setcolorName("Blue");
      document.body.style.background = '#011A7D';
    }

    else if (colorbtn === 'red') {
      setcolor("#560505");
      setcolorName("Red");
      document.body.style.background = '#860808';
    }

    else if (colorbtn === 'yellow') {
      setcolor("#D9AA02");
      setcolorName("Yellow");
      document.body.style.background = '#FCC911';
    }

    radio_btn.checked = "loda";

  }

  return (
    <>
      <HashRouter>
        {/* title and about are props which are used in navbar component */}
        <Navbar title="Text-Utils" about="About-Text-Utils" colorProp={color} changeThemeProp={changeTheme} showAlertProp={showAlert} changeColorThemeProp={changeColorTheme} colorNameProp={colorName} checkProp={"checked"} />
        {/* <Navbar/> */}
        {/* <Navbar title="Test"/> */}

        <AlertComponent alertProp={alert} />


        <div className="container my-3" data-bs-theme='dark'>

        <Switch>
            <Route exact path="/about">
              <AboutDarkMode colorProp={color} />
            </Route>

            <Route exact path="/">
              <TextForm heading="Enter the Text to analyze" colorProp={color} showAlertProp={showAlert} />
            </Route>
          </Switch>

        </div>

      </HashRouter>
    </>
  );
}


export default App;
