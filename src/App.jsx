import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CountryDetail from "./pages/countryDetail/CountryDetail";
import Error404 from "./pages/error404/Error404";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [lightMode, setLightmode] = useState(() => {
    const userMode = JSON.parse(localStorage.getItem("userMode"));
    return userMode || false;
  });

  useEffect(() => {
    const root = document.querySelector("#root");
    if (lightMode) {
      root.classList.add("light-mode");
    } else {
      root.classList.remove("light-mode");
    }
    localStorage.setItem("userMode", JSON.stringify(lightMode));
  },[lightMode]);

  return (
    <>
      <BrowserRouter>
        <Navbar LightMode={lightMode} setLightmode={setLightmode} />
        <Routes>
          <Route path="/" element={<Home lightMode={lightMode} />} />
          <Route path="/detail/:countryName" element={<CountryDetail lightMode={lightMode} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
