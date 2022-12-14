
import { useRef } from "react";
import {
  useGsapFeaturedLeftShutter,
  useGsapFeaturedRightShutter,
} from "../hooks/gsap";
// import SectionTitle from "./SectionTitle";

const Featured = ({ minHeight = false }) => {
  const featuredRef = useRef(null);
  const featuredLeftShutter = useRef(null);
  const featuredRightShutter = useRef(null);

  useGsapFeaturedLeftShutter(featuredLeftShutter, featuredRef);
  useGsapFeaturedRightShutter(featuredRightShutter, featuredRef);

  return (
    <section
      className="featured wrapper"
      ref={featuredRef}
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <div className="featured-wrapper">
        <div className="featured-left">
          <span>Practice of a surfer</span>
          <img src="https://i0.heartyhosting.com/www.surfer.com/wp-content/uploads/2019/12/greg-long.jpg?resize=2000%2C1333&ssl=1" />
          <span className="left-shutter" ref={featuredLeftShutter}></span>
        </div>
        <div className="featured-right">
          <span>Bird's eye view of surfer</span>
          <img
            src="https://www.altahousehotel.com/explore/wp-content/uploads/2021/04/shutterstock_1260024421edited-500x380.jpg"
            alt="Women Sitting Together on the Floor"
          />
          <span className="right-shutter" ref={featuredRightShutter}></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;