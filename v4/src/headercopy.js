import logo from "./Resources/Images/Social Media Round Logo.png";

function Header() {
  return (
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
          <a className="contactText" href="tel:+441989568726">
            01989 568726
          </a>
          <a className="contactText" href="tel:+447799063905">
            07799 063905
          </a>
        </div>
      </section>
    </header>
  );
}

export default Header;

// <HashRouter>
// <Header/>
// <Body/>
// <Footer/>
// </HashRouter>
