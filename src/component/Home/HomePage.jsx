import React from "react";
import HeroSection from "./HeroSection";

import iphone from "../../assets/iphone-.webp";
import mac from "../../assets/mac-.png";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Exprience the power of the latest iPhone 14 with our Pro camera ever."
        link="/"
        image={iphone}
      />
      
      <FeaturedProducts />

      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add studio Display and colour-matched Magic accessories to your bag after configure your Mac mini. "
        link="/"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
