import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="logo-website">
        <div>
          logo <br /> img
        </div>
        <h1>
          <Link to="/">Mystic trips</Link>
        </h1>
      </div>
      <nav>
        <ul>
          <Link to="/star-wars">
            <li>Far far away</li>
          </Link>

          <Link to="/middle-earth">
            <li>Middle earth</li>
          </Link>

          <Link to="/caribbean-cruise">
            <li>Caribbean cruise</li>
          </Link>

          <Link to="/wisard">
            <li>Wizard’s</li>
          </Link>

          <Link to="/pandora">
            <li>Pandora</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

//
//<Link to="/CGU">CGUPage</Link>
