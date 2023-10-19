import Heading from "./Heading ";
import "./Container.css";
import myImage from './Photo.jpg';
import "./Photo.css"
import About from "./About";
import Resume from "./Resume";
import Footer from "./Footer";
import logo from "./github.png"
import "./Github.css"
import logoin from "./linkedin.png"
import "./linkedIn.css"

export default function Container() {
  return (
    <div className="holder">
      <Heading />
      <img src={myImage} alt="Image not available" className="Photo"></img>
      <About />
      <Resume />
      <Footer />
      <img src={logo} alt="Image not available" className="Github"></img>
      <img src={logoin} alt="Image not available" className="LinkedIn"></img>
    </div>
  );
}
