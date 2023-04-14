import React, { ReactNode } from "react";
import NavButton from "./NavItem/NavItem";

import "./Navbar.scss";
import "./NavItem/NavItem.scss";

const Navbar: React.FC = () => {
  return (
    <div className="sidebar">
      <NavButton icon={<div>1</div>} text={""} />
      <Divider />
      <NavButton icon={<div>1</div>} text={""} />
      <NavButton icon={<div>1</div>} text={""} />
      <NavButton icon={<div>1</div>} text={""} />
      <Divider />
      <NavButton icon={<div>1</div>} text={""} />
    </div>
  );
};

const Divider: React.FC = () => <hr className="sidebar-hr" />;

export default Navbar;
