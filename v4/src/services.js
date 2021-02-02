import "./style.css";
import lawnMowing from "./Resources/temporaryImages/mowingService.jpg"
import hedgeTrimming from "./Resources/temporaryImages/hedgeTrimmingService.jpg"
import generalMaintenance from "./Resources/Images/andyLawnLookingBack.JPG"
import planting from "./Resources/Images/planting.jpg"
import weedControl from "./Resources/Images/snake.jpg"
import turfing from "./Resources/temporaryImages/lawnLayingService.jpg"
import gardenMakeovers from "./Resources/Images/andyLawnDiagonal.JPG"
import pondInstallations from "./Resources/temporaryImages/pond.jpg"
import plantingPlans from "./Resources/Images/plantingPlans2.jpg"
import coachingServices from "./Resources/temporaryImages/hands.jpg"

function Services() {
  return (
    <main className="services">
      <h1 className="pageTitle">Services</h1>
      <section className="servicesGrid">
        <figure className="serviceCard service1">
          <img
            className="serviceImage"
            src={lawnMowing}
            alt="mowing"
          />
          <figcaption className="serviceHeading">
            Lawn Mowing & Lawn Care
          </figcaption>
          <p className="serviceInfo"></p>
        </figure>

        <figure className="serviceCard service2">
          <img
            className="serviceImage"
            src={hedgeTrimming}
            alt="hedge trimming"
          />
          <figcaption className="serviceHeading">Hedge Trimming</figcaption>
          <p className="serviceInfo">including reductions</p>
        </figure>

        <figure className="serviceCard service1">
          <img
            className="serviceImage"
            src={generalMaintenance}
            alt="nice garden"
          />
          <figcaption className="serviceHeading">
            General Maintenance
          </figcaption>
          <p className="serviceInfo">
            Everything to keep your garden looking pristine, including weeding,
            general tidying, leaf clearance, tree and shrub pruning, lawn
            maintenance
          </p>
        </figure>

        <figure className="serviceCard service2">
          <img
            className="serviceImage"
            src={planting}
            alt="plant pots"
          />
          <figcaption className="serviceHeading">Planting</figcaption>
          <p className="serviceInfo">Everything from annual bedding to trees</p>
        </figure>

        <figure className="serviceCard service1">
          <img
            className="serviceImage"
            src={weedControl}
            alt="snake in weeds"
          />
          <figcaption className="serviceHeading">Weed Control</figcaption>
          <p className="serviceInfo"></p>
        </figure>

        <figure className="serviceCard service2">
          <img
            className="serviceImage"
            src={turfing}
            alt="new turf"
          />
          <figcaption className="serviceHeading">
            Turfing & Seeding New Lawns
          </figcaption>
          <p className="serviceInfo"></p>
        </figure>

        <figure className="serviceCard service1">
          <img
            className="serviceImage"
            src={gardenMakeovers}
            alt="beautiful garden"
          />
          <figcaption className="serviceHeading">Garden Makeovers</figcaption>
          <p className="serviceInfo"></p>
        </figure>

        <figure className="serviceCard service2">
          <img
            className="serviceImage"
            src={pondInstallations}
            alt="pond"
          />
          <figcaption className="serviceHeading">
            Pond Installations & Water Features
          </figcaption>
          <p className="serviceInfo"></p>
        </figure>

        <figure className="serviceCard service1">
          <img
            className="serviceImage"
            src={plantingPlans}
            alt="planting plan"
          />
          <figcaption className="serviceHeading">Planting Plans</figcaption>
          <p className="serviceInfo"></p>
        </figure>

        <figure className="serviceCard service2">
          <img
            className="serviceImage"
            src={coachingServices}
            alt="hands"
          />
          <figcaption className="serviceHeading">
            Advisory/Coaching Services
          </figcaption>
          <p className="serviceInfo">
            As a qualified and experienced teacher, I also love passing on my
            knowledge and skills to others
          </p>
        </figure>

        {/* <!-- 
                ***TO ADD IN A NEW SERVICE:
                ***Copy the figure section below and paste it above this comment
                ***alternate service# between service1 and service2 to keep colour sequence
                ***Replace the text ***COMMENTS*** with the appropriate url or text.

                <figure className="serviceCard service#">
                    <img className="serviceImage" src="./Resources/***IMAGENAME.IMAGETYPE***" alt="***DESCRIBE IMAGE IN A WORD OR TWO***"/>
                    <figcaption className="serviceHeading">***SERVICE HEADING***</figcaption>
                    <p className="serviceInfo">***ANY ADDITIONAL INFORMATION***</p>
                </figure> 
            --> */}
      </section>
    </main>
  );
}

export default Services;
