import React, { useRef } from 'react';
import { useGsapFooterReveal } from '../hooks/gsap'

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadlineRef = useRef(null);

  useGsapFooterReveal(footerHeadlineRef, footerRef);

  return (
    <section ref={footerRef} className='footer wrapper'>
      <h2 ref={footerHeadlineRef} className='footer-headline'>Enjoy Vacation</h2>
      <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
    </section>
  );
};

export default Footer;