import { Link } from "react-router-dom";
import fb from "../assets/images/icons/footer-fb.svg";
import instagram from "../assets/images/icons/footer-instagram.svg";
import twitter from "../assets/images/icons/footer-twitter.svg";
import snapchat from "../assets/images/icons/footer-snapchat.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <nav className="footer-left">
        <ul>
          <Link to="/about-us">
            <li>About us</li>
          </Link>

          <Link to="/CGU">
            <li>Legal Notice</li>
          </Link>

          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>
      <nav className="footer-right">
        <img src={fb} alt="fb" className="footer-fb" />
        <img src={instagram} alt="instagram" className="footer-instagram" />
        <img src={twitter} alt="twitter" className="footer-twitter" />
        <img src={snapchat} alt="snapchat" className="footer-snapchat" />
      </nav>
    </div>
  );
}
