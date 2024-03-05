import i1 from "../../../Assests/1.jpg";
import i2 from "../../../Assests/2.jpg";
import i3 from "../../../Assests/3.jpg";
import i4 from "../../../Assests/4.jpg";
import "../../../Styles/Hero.css";
import Carousel from "./Carousel";

const Hero = () => {
  const images = [i1, i2, i3, i4];
  return (
    <>
      <div className="corousel">
        <Carousel images={images} />
      </div>
    </>
  );
};
export default Hero;
