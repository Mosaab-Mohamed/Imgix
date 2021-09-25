import { useState, useEffect } from "react";
import Logo from "./Navbar/Logo";
import Navmenu from "./Navbar/Navmenu";
import MenuToggler from "./Navbar/MenuToggler";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Function to close the menu on window click
    const closeOnClick = () => setOpen(false);

    // Invoke the closeOnClick function
    window.addEventListener("click", closeOnClick);

    // CleanUp Function
    return () => {
      window.removeEventListener("click", closeOnClick);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className="my-navbar">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-1">
            <Logo />
          </div>
          <div className="col-9">
            <Navmenu open={open} />
          </div>
          <div className="col-2 d-md-block d-lg-none">
            <MenuToggler open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
