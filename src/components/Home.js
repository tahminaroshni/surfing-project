import React from 'react';
import Blog from './Blog';
import Featured from './Feature';
import Footer from './Footer';
import Hero from './Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;