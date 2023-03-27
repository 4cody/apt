import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>HEADER CONTENT</header>
      <main>{children}</main>
      <footer>FOOTER CONTENT</footer>
    </div>
  );
};

export default Layout;
