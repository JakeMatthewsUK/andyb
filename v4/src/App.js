import "./style.css";
import "./Resources/SocialMediaIcons/css/all.css";
import logo from "./Resources/Images/Logo - White Background.png";
import { Route, BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./home";
import Services from "./services";
import About from "./about";
import Gallery from "./gallery";
import Reviews from "./reviews";
import Blog from "./blog";
import Contact from "./contact";
import Privacy from "./privacy";

function App() {
  return (
    <BrowserRouter>
      <figure className="logoContainer">
        <a href="index.html">
          {<img className="logo" src={logo} alt="Logo" />}
        </a>
      </figure>
      <Navbar />
      <main className="pageContent">
        <Route exact path="/" component={Home} />
        <Route path="/services" className="servicePage" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
