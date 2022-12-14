import { useRef } from "react";
import { useGsapMiddleShutterUnveil, useGsapPhotoDropping, useGsapPhotoLevitate, useGsapShutterUnveil } from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const worldsRef = useRef(null);
  const bestRef = useRef(null);
  const surfingRef = useRef(null);

  const photoOneRef = useRef(null);
  const photoTwoRef = useRef(null);
  const photoThreeRef = useRef(null);
  const photoFourRef = useRef(null);
  const photoFiveRef = useRef(null);

  const photoArr = [photoOneRef, photoTwoRef, photoThreeRef, photoFourRef, photoFiveRef];

  useGsapShutterUnveil(worldsRef, 2.2, heroRef);
  useGsapMiddleShutterUnveil(bestRef, 2.8, heroRef);
  useGsapShutterUnveil(surfingRef, 3.5, heroRef);

  useGsapPhotoDropping(photoArr, 5);
  useGsapPhotoLevitate(photoArr, heroRef);

  return (
    <section ref={heroRef} className="hero wrapper">
      <div className="hero-section-title">
        <h1 className="worlds">World's <span ref={worldsRef}></span></h1>
        <h1 className="best">Best <span ref={bestRef}></span></h1>
        <h1 className="surfing">Surfing <span ref={surfingRef}></span></h1>
      </div>
      <div className="photos">
        <div ref={photoOneRef} className="photo one"></div>
        <div ref={photoTwoRef} className="photo two"></div>
        <div ref={photoThreeRef} className="photo three"></div>
        <div ref={photoFourRef} className="photo four"></div>
        <div ref={photoFiveRef} className="photo five"></div>
      </div>
    </section>
  );
};

export default Hero; 