import React, { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";

import "./Layout.scss";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
