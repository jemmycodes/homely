import Buttons from "../UI/RandomBtns";
import heroImg from "../../assets/hero-img.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from "../../assets/low-quality-img/low-yam.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";

function Hero() {
  return (
    <section className="hero-section ">
      <div className="flex flex-col justify-between md:flex-row items-center gap-8 ">
        <div className="space-y-2 ">
          <h1>
            Enjoy <span className="orange-color">home made meals</span> far away
            from home
          </h1>
          <p>
            Helping you enjoy confortable and health food anywhere and anytime
            on the go
          </p>
          <div className="btn-div">
            <Buttons>Order Now</Buttons>
          </div>
        </div>
        <figure className="w-full max-w-[320px] md:mx-0 mx-auto">
          <LazyLoadImage
            placeholderSrc={placeholder}
            src={heroImg}
            alt="Local Nigerian Food"
            effect="blur"
          />
          {/* <img src={heroImg} alt="" className="object-cover" /> */}
        </figure>
      </div>
      <div className="flex justify-center items-center ">
        <div className="flex flex-col  gap-14 md:flex-row ">
          <hgroup>
            <h1>500K+</h1>
            <p>Food Partners</p>
          </hgroup>
          <hgroup>
            <h1>1K+</h1>
            <p>Other Partners</p>
          </hgroup>
          <hgroup>
            <h1>12K+</h1>
            <p>Clients</p>
          </hgroup>
        </div>
      </div>
    </section>
  );
}

export default Hero;
