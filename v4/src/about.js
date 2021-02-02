import "./style.css";
import andyTurnip from "./Resources/Images/andyTurnip.jpg"
import terryWalton from "./Resources/Images/TerryWalton.jpg"

function About() {
  return (
    <main className="about">
      <h1 className="pageTitle">About Andy B</h1>
      <section>
        <img
          id="andyImage"
          src={andyTurnip}
          alt="andy holding giant turnip"
        />
        <p>
          Gardening is in my blood. Initially inspired my grandfather. Whenever
          I’d visit, he’d spend all his time outside working in his garden at
          his miners terraced house in the Rhondda valley in South Wales. I was
          his shadow, always helping and getting “stuck-in”, particularly
          fascinated by his greenhouse packed with exotic cacti! Then of course
          there’s my dad, Terry Walton, BBC Radio2’s adopted “allotmenteer”.{" "}
        </p>
        <img
          id="terryImage"
          src={terryWalton}
          alt="andy with Terry Walton"
        />
        <p>
          Many happy childhood hours were spent helping at his allotment plots
          or helping grow and tending the thousands of bedding plants that were
          planted out in the garden at home (it wasn’t until years later that I
          realised that not all kids did this!). My dad’s passion for everything
          garden related is infectious, and infected I became at a very early
          age.
        </p>
        <p>
          However, for various reasons, I didn’t follow this up in my career
          choices. A 1st class BSc (Hons) degree in Product Design initially led
          to an Engineering career that eventually led to becoming a qualified
          teacher in this area. However, through all this time, my evenings and
          weekends were spent doing what I do best and love – gardening! I have
          always taken a massive amount of pleasure in creating beautiful
          outdoor spaces that can be enjoyed by my family, alongside growing
          fruit and vegetables to feed us all (we’re virtually self sufficient
          all year round with home grown vegetables.
        </p>
        <p>
          Being a lover of all things that grow and live in our gardens, I am
          also passionate about nature,conservation, the protection of the
          environment and sustainability. I always gently try to encourage
          others to take these things into consideration when managing their
          gardens and believe I have a role to play in this in my position as a
          professional gardener.
        </p>
        <p>
          Andy B Garden Services (the B is from my middle name – Brian!) evolved
          out of a realisation that I could channel all my skills, knowledge and
          experience, alongside my passion for all of our flora and fauna, to
          help others with everything gardening related. I now have the best job
          in the world.I love seeing “outdoor spaces becoming blissful places”!
        </p>
      </section>
    </main>
  );
}

export default About;
