import "./Navbar.css";
import logo from "../../assets/react.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo}></img>
      {/* <a href="aboutus">ABOUT US</a>
      <a href="foryou">FOR YOU</a>
      <a href="services">SERVICES</a>
      <a href="blog">BLOG</a>
      <a href="vlog">VLOG</a>
      <a href="contact">CONTACT</a> */}
    </div>
  );
};
export default Navbar;