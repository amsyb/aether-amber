import bannerImage from "../../assets/images/bg-image.png";
import "./Banner.scss";

function Banner() {
  return (
    <>
      <section className="banner">
        <h1>Aether</h1>
        <p>
          a craft cocktail haven founded by passionate artisans sharing a vision
        </p>

        <img src={bannerImage} className="banner_img" />
      </section>
    </>
  );
}

export default Banner;
