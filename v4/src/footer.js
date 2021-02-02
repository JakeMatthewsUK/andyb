import "./style.css";

function Footer() {
  return (
    <div className="fullFooter">
      <section className="socialMediaLinks">
        <a href="http://www.facebook.com">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="http://www.instagram.com">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="http://www.skype.com">
          <i className="fab fa-skype fa-2x"></i>
        </a>
        <a href="http://www.twitter.com">
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
        <a href="privacy.html">
          <span className="contactText">Privacy Policy</span>
        </a>
      </footer>
      <script src="website.js" type="text/javascript"></script>
    </div>
  );
}

export default Footer;
