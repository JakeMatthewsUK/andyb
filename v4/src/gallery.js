import "./style.css";
import pinkFlower from "./Resources/Images/pinkFlower.jpg"
import longRedPlant from "./Resources/Images/longRedPlant.JPG"
import yellowFlower from "./Resources/Images/yellowFlower.JPG"
import pinkFlowerBush from "./Resources/Images/pinkFlowerBush.JPG"
import pinkFlowers from "./Resources/Images/pinkFlowers.jpg"
import beeFlower from "./Resources/Images/beeFlower.JPG" 
import plantsAndSky from "./Resources/Images/plantsAndSky.jpg"
import andyTerry from "./Resources/Images/andyTerry.jpg"
import andyTurnip from "./Resources/Images/andyTurnip.jpg"
import before2 from "./Resources/Images/before2.jpg"
import onions from "./Resources/Images/onions.jpg"
import planting from "./Resources/Images/planting.jpg"
import plantPots from "./Resources/Images/plantPots.jpg"
import snake from "./Resources/Images/snake.jpg"
import after from "./Resources/Images/after.jpg"
import garden from "./Resources/Images/andyLawnFromHouse.JPG"

function Gallery() {
  return (
    <main className="gallery">
        <h1 className="pageTitle">Gallery</h1>
        {/* <!--Top gallery section--> */}
        <section className="galleryFeature gallery1">
            <figure className="featurePhoto">
                <div className = "imageScrollerDiv">
                    <div id="comparison">
                        <figure> 
                        <div id="divisor"></div>
                        </figure>
                        <input type="range" min="2" max="99" value="50" id="slider" oninput="moveDivisor()"/>
                    </div>
                </div>                
                <figcaption>Drag the blue slider above to see my work transform this garden</figcaption>
            </figure>
            <section className="featureSubPhotos">
                <figure>
                    <img src={pinkFlower} alt="pink flower"/>
                    <figcaption>Image Description</figcaption>
                </figure>
                <figure>
                    <img src={longRedPlant} alt="long red plant"/>
                    <figcaption>Image Description</figcaption>
                </figure>
                <figure>
                    <img src={yellowFlower} alt="yellow flower"/>
                    <figcaption>Image Description</figcaption>
                </figure>
            </section>
         
        </section>
        {/* <!--Middle section, to which new images can be added--> */}
        <section className="galleryGrid" loading="lazy">
        
        <img src={andyTerry} alt="andyTerry"/>
        <img src={andyTurnip} alt="andy with turnip"/>
        <img src={beeFlower} alt="bee flower"/>
        <img src={before2} alt="garden"/>
        <img src={onions} alt="onions"/>
        <img src={planting} alt="planting"/>
        <img src={plantPots} alt="plant pots"/>
        <img src={snake} alt="snake"/>
        <img src={after} alt="nice garden"/>
        <img src={garden} alt="nice garden"/>

            {/* ***TO ADD IN A NEW IMAGE:
            ***Copy the line below and paste it above this comment
            ***Replace the text ***COMMENTS*** with the appropriate text
            <img src="./Resources/Images/***IMAGENAME.IMAGETYPE***" loading="lazy" alt="***DESCRIBE IMAGE IN A WORD OR TWO***"/> */}
  
        </section>
        {/* <!--Bottom gallery section--> */}
        <section className="galleryFeature gallery2">
            <figure className="featurePhoto">
                <img src={pinkFlowerBush} alt="pink flower bush"/>
                <figcaption>Title of photos</figcaption>
            </figure>
            <section className="featureSubPhotos">
                <figure>
                    <img src={pinkFlowers} alt="pink flowers"/>
                    <figcaption>Image Description</figcaption>
                </figure>

                <figure>
                    <img src={beeFlower} alt="bee on yellow flower"/>
                    <figcaption>Image Description</figcaption>
                </figure>

                <figure>
                    <img src={plantsAndSky}alt="plants and sky"/>
                    <figcaption>Image Description</figcaption>
                </figure>
            </section>
        </section>
    </main>
  );
}

export default Gallery;
