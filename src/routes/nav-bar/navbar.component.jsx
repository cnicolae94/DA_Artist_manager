
import { Link } from "react-router-dom";
import "./navbar.styles.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="d-flex justify-content-center py-3">
        <div className="nav nav-pills">
          <Link className="homepage-link nav-item">DeviantartArt Manager</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

<header class="d-flex justify-content-center py-3">
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a href="#" class="nav-link active" aria-current="page">
        Home
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        Features
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        Pricing
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        FAQs
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        About
      </a>
    </li>
  </ul>
</header>;
