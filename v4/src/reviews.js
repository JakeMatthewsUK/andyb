import "./style.css";

function Reviews() {

  return (
    <main className="reviews">
        <h1 className="pageTitle">Reviews</h1>
        <section className="reviewCard">
            <section className="currentReview">
                <ul id="currentReview"> 
                    <li><p className="reviewTitle">Title</p><p className="reviewText">Review</p></li>
                </ul>
                <div className="buttonContainer">
                    <figure className="previousArrow">
                        <button id="reviewLeftButton" onclick="reviewClick(-1)"><span className="leftButtonArrow"></span></button>
                        <text className="buttonDescription" onclick="reviewClick(-1)">PREVIOUS</text>
                    </figure>
                    <figure className="nextArrow">
                        <text className="buttonDescription" onclick="reviewClick(+1)">NEXT</text>
                        <button id="reviewRightButton" onclick="reviewClick(+1)"><span className="rightButtonArrow"></span></button>
                    </figure>
                </div>
            </section>
            <ul className="reviewBank" id="reviewBank"> 
                <li><p className="reviewTitle">Andy did a great job tidying up my garden.</p><p className="reviewText">He tidied everything up and made it look amazing. What a legend. I gave him a nice tip and i suggest you do aswell!</p></li>
                <li><p className="reviewTitle">Andy did an even better job in my garden!</p><p className="reviewText">Yes he was amazing.</p></li>
                <li><p className="reviewTitle">Andy did even better than that at my garden!</p><p className="reviewText">He did real good and was good value.</p></li>
                {/* <!--
        ***TO ADD IN A NEW REVIEW:
        ***Copy the line below and paste it above this comment
        ***Replace the text ***COMMENTS*** with the appropriate text
        <li><p className="reviewTitle">***REVIEW TITLE***</p><p className="reviewText">***REVIEW TEXT***</p></li>
    --> */}
            </ul>
        </section>
    </main>
  );
}

export default Reviews;
