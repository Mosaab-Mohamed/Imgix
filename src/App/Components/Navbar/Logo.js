import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <div className="logo_img">
        <i className="bi bi-camera-fill"></i>
      </div>
      <div className="logo_name">IMGIX</div>
    </Link>
  );
};

export default Logo;
