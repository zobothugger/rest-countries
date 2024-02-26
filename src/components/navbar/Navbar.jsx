import React from "react";
import { IoMdMoon } from "react-icons/io";

const Navbar = ({ LightMode, setLightmode }) => {
  const handleLightMode = () => {
    const root = document.querySelector("#root");
    // if (root.classlist.contains("light-mode")) {
    //   root.classlist.remove("light-mode");
    // } else {
    //   root.classlist.add("light-mode");
    // }
    // root.classList.toggle("light-mode");
    setLightmode(!LightMode);
  };

  return (
    <div className="bg-element">
      <div className="container ">
        <div className="d-flex justify-content-between py-4">
          <h1>where in the world</h1>
          <div
            onClick={handleLightMode}
            className="d-flex align-items-center gap-2"
            style={{
              cursor: "pointer",
            }}
          >
            <IoMdMoon />
            <p className="m-0">Dark Mode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
