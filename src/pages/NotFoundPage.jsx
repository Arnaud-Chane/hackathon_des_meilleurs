import { Link } from "react-router-dom";
import error from "../assets/images/Group3.svg";

export default function NotFoundPage() {

  return (
    <div className="NotFoundPage">
      <img src={error}  alt="404" />
      <Link to="/">
        <div className="home-redirect">Home</div>
      </Link>
    </div>
  );
}
