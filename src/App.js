import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(5);
  const [alert, setAlert] = useState(null);

  const backgrounds = [
    "#0A2647",
    "#3E3232",
    "#872341",
    "#3B5249",
    "#393E46",
    "#FFFFFF",
  ];
  const textAreaBackgrounds = [
    "#144272",
    "#503C3C",
    "rgb(190 75 90)",
    "#519872",
    "#7F8487",
  ];
  const btnBackgrounds = [
    "#205295",
    "#7E6363",
    "rgb(208 66 84)",
    "rgb(32 165 94)",
    "#414141",
  ];

  function colorTheme(event) {
    const inputs = document.getElementsByClassName("color-pallete");
    const selectedTheme = Array.from(inputs).indexOf(event.target);

    if (selectedTheme === -1) return;

    setTheme(selectedTheme);
    document.body.style.background = `${backgrounds[selectedTheme]}`;
  }

  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About"
        toggleMode={colorTheme}
        theme={theme}
        backgrounds={backgrounds}
      />
      <Alert alert={alert} />
      {/* <Routes> */}
      {/* <Route
          exact
          path="/"
          element={ */}
      <TextForm
        heading="Try Textutils - To manipulate your text."
        showAlert={showAlert}
        theme={theme}
        textAreaBackgrounds={textAreaBackgrounds}
        btnBackgrounds={btnBackgrounds}
      />
      {/* }
        />
        <Route
          exact
          path="/about"
          element={ */}
      {/* <About
        theme={theme}
        textAreaBackgrounds={textAreaBackgrounds}
        btnBackgrounds={btnBackgrounds}
      /> */}
      {/* }
        />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
