// import Navbar from "./navbar";
// import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="appWrapper">{children}</main>
      {/* <Footer /> */}
    </>
  );
}