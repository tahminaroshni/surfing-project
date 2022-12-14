import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStagger, useGsapLeftStagger, useGsapRightStagger } from "../hooks/gsap";
import '../index.css'

const Navbar = () => {

  const logoRef = useRef(null);
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const li4 = useRef(null);
  const bookNowBtn = useRef(null);

  const liArr = [li1, li2, li3, li4];

  useGsapRightStagger(liArr, 1);
  useGsapDownStagger([logoRef]);
  useGsapLeftStagger([bookNowBtn], 5);

  return (
    <nav className="wrapper">
      <div ref={logoRef} className="logo">
        <Link to='/'>
          <h2><i>Surfing</i></h2>
        </Link>
      </div>

      <ul className="links">
        <li ref={li1}><Link to="/about">About</Link></li>
        <li ref={li2}><Link to="/features">Features</Link></li>
        <li ref={li3}><Link to="/gallery">Gallery</Link></li>
        <li ref={li4}><Link to="/contact">Contact Us</Link></li>
        <button ref={bookNowBtn} className="book-now-btn">Book Now</button>
      </ul>
    </nav>
  );
};

export default Navbar;