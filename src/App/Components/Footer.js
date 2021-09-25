import Logo from "./Navbar/Logo";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <Logo />
          </div>
          <div className="col">
            <div>All Copyrights reserved @2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
