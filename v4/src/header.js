import logo from "./logo192.png";
import "./style.css";

function Header() {
  return (
    <div className="fullHeader">
      <header className="upperHeader">
        <figure className="logoContainer">
          <a href="index.html">
            <img className="logo" src={logo} alt="Logo" />
          </a>
        </figure>
        <section className="upperHeaderRight">
          <div className="container">
            <a
              href="mailto:andybgardenservices@gmail.com"
              className="contactText"
            >
              andybgardenservices@gmail.com
            </a>
            <a href="index.html">
              <span
                className="contactText"
                onclick="window.location.href='tel:+441989568726';"
              >
                01989 568726
              </span>
              <text> | </text>
              <span
                className="contactText"
                onclick="window.location.href='tel:+447799063905';"
              >
                07799063905
              </span>
            </a>
          </div>
        </section>
      </header>
      <nav>
        <div className="navBar">
          <a href="index.html" className="current">
            Home
          </a>
          <a href="services.html" id="services">
            Services
          </a>
          <a href="about.html">About Andy B</a>
          <a href="gallery.html">Gallery</a>
          <a href="reviews.html">Reviews</a>
          <a href="blog.html">Blog</a>
          <a href="contact.html">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
