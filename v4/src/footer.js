import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="fullFooter">
      <section className="socialMediaLinks">
        <a href="http://www.facebook.com">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/andybgardenservices/">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://twitter.com/andybgardens">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="http://www.whatsapp.com">
          <i className="fab fa-whatsapp fa-2x"></i>
        </a>
        <a href="http://www.messenger.com">
          <i className="fab fa-facebook-messenger fa-2x"></i>
        </a>
      </section>
      <footer className="PolicyContainer">
        <span>©2021 Andy B Garden Services.</span>
        <NavLink to="/privacy">Privacy Policy</NavLink>
      </footer>
    </div>
  );
}

export default Footer;
