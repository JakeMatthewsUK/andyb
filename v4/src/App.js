import "./App.css";
import "./style.css";
import logo from "./Resources/draftLogo.jpg"
import Footer from "./footer";
import home from "./home";
import services from "./services";
import about from "./about";
import gallery from "./gallery";
import reviews from "./reviews";
import blog from "./blog";
import contact from "./contact";
import { Route, NavLink, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="fullHeader">
        <header className="upperHeader">
          <figure className="logoContainer">
            <a href="index.html">
              {<img className="logo" src={logo} alt="Logo" />}
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
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Andy B</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </div>
        </nav>
        <main>
          <Route exact path="/" component={home} />
          <Route path="/services" component={services} />
          <Route path="/about" component={about} />
          <Route path="/gallery" component={gallery} />
          <Route path="/reviews" component={reviews} />
          <Route path="/blog" component={blog} />
          <Route path="/contact" component={contact} />
        </main>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
