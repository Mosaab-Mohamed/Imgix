import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navmenu = ({ open }) => {
  const location = useLocation();

  return (
    <div
      className={`nav-menu ${open ? "active" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="main-menu">
        <li>
          <Link
            className={`main-menu_item ${
              location.pathname === "/" && "active"
            }`}
            to="/"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            className={`main-menu_item ${
              location.pathname.includes("gallery") && "active"
            }`}
            to="/gallery"
          >
            GALLERY
          </Link>
        </li>
        <li>
          <Link
            className={`main-menu_item ${
              location.pathname.includes("services") && "active"
            }`}
            to="/services"
          >
            SERVICES
          </Link>
        </li>
        <li>
          <Link
            className={`main-menu_item ${
              location.pathname.includes("about") && "active"
            }`}
            to="/about"
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            className={`main-menu_item ${
              location.pathname.includes("contact") && "active"
            }`}
            to="/contact"
          >
            CONTACT US
          </Link>
        </li>
      </ul>
      <ul className="menu-social">
        <li className="menu-social_item">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li className="menu-social_item">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
        </li>
        <li className="menu-social_item">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li className="menu-social_item">
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <i className="bi bi-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navmenu;
