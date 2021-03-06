import { NavLink } from "react-router-dom";

function Home() {
  return (
    <main className="homePage">
      <section className="pictureBanner"></section>
      <h1 className="pageTitle">Andy B Garden Services</h1>
      <div className="homeBlurb">
        <p>
          Do you want to make more use of your garden outdoor space? Do you have
          jobs in your garden that you just never seem to get the time to get
          around to or not sure how to tackle? Do you just want to spend your
          free time relaxing in your garden rather than toiling in it? If so, I
          can help you achieve your goal. Working with you, I can help you
          create the outdoor space to meet you and your family’s needs.
        </p>
        <p>
          Andy B Garden Services can provide the full range of{" "}
          <NavLink to="/services">garden services</NavLink> to meet all your
          needs. Everything from lawn cutting and hedging trimming through to
          complete garden maintenance packages and garden design/ makeovers. As
          an experienced and qualified teacher, I can also teach and coach you
          to how take care of your “outdoor room” yourself if you wish.
        </p>
        <p>
          For all your garden-based needs, please{" "}
          <NavLink to="/contact">get in touch</NavLink> to arrange a free
          no-obligation quote.
        </p>
        <p>
          I get enormous satisfaction from building positive relationships with
          customers and helping them make their{" "}
          <em>“outdoor spaces become blissful places”!</em>
        </p>
      </div>
    </main>
  );
}

export default Home;
