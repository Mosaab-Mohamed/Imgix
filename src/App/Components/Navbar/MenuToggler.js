const MenuToggler = ({ open, setOpen }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <div
      className={`menu-toggler d-flex d-lg-none ${
        open ? "active" : "not-active"
      }`}
      onClick={(e) => handleClick(e)}
    >
      <div className="menu-toggler_bar"></div>
      <div className="menu-toggler_bar"></div>
      <div className="menu-toggler_bar"></div>
    </div>
  );
};

export default MenuToggler;
