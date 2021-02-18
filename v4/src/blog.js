import blogImage from "./Resources/temporaryImages/blogImage.png";

function Blog() {
  return (
    <main className="blog">
      <h1 className="pageTitle">Blog</h1>
      <section className="blogCard">
        <img src={blogImage} alt="homePageGarden" />
        <p>
          His name was Wilding, and legends about him on Venus and Mars indicate
          that the name suited him peculiarly. There is reason to believe that
          he was always more or less than a man. But when the supply ship had
          vanished completely, he was more alone than ever before in a lonely
          and anti-social life.
        </p>
      </section>
    </main>
  );
}

export default Blog;
