import React from 'react';
import NavBar from '../components/NavBar';
import PersonProfileCard from '../components/PersonProfileCard';

// Import unique images for each person (front and back)
// ASSUME THESE PATHS AND FILENAMES ARE CORRECT IN YOUR PROJECT
import jayaruwanFront from '../assets/images/profiles/jayaruwan-prabodya.jpg';

import sandevFront from '../assets/images/profiles/sandev-ubeysekara.jpg';

import hasinduFront from '../assets/images/profiles/hasindu-prasanjaya.jpg';

import hiviruFront from '../assets/images/profiles/hiviru-dilneth.jpg';

import tasinduFront from '../assets/images/profiles/tasindu-wikramasinghe.jpg';


const AboutUsPage = () => (
  <div className="bg-black text-white">
     <div className="sticky top-0 z-50 w-full"> {/* Added this wrapper div */}
          <NavBar setActivePage='about-us' />
        </div>

    <div className="bg-black py-5 text-center border-b-2 border-gray-800">
      <h1 className="text-5xl tracking-widest md:text-6xl lg:text-7xl" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#FFFF' }}>
        DANCE CORE HIGHER FAMILY
      </h1>
    </div>

    <div className="py-10 space-y-20">
      {/* Person 1: JAYARUWAN PRABODYA PREMACHANDRA */}
      <PersonProfileCard
        name="JAYARUWAN PRABODYA PREMACHANDRA"
        roles={[
          "DIRECTOR",
          "WRITER",
          "DANCING TEACHER",
          "CHOREOGRAPHER",
          "FOUNDER OF STUDIO DANCE CORE"
        ]}
        imageUrl={jayaruwanFront}
        instagramUrl="https://www.instagram.com/jayaruwan.official?igsh=M3VkYjdjb3p5bjU2" // **ADD THIS LINE**
      />

      {/* Person 2: SANDEV UBEYSEKARA */}
      <PersonProfileCard
        name="SANDEV UBEYSEKARA"
        roles={[
          "DIRECTOR",
          "WRITER"
        ]}
        imageUrl={sandevFront}
        instagramUrl="https://www.instagram.com/sandev_ubeysekara" // **ADD THIS LINE**
      />

      {/* Person 3: HASINDU PRASANJAYA */}
      <PersonProfileCard
        name="HASINDU PRASANJAYA"
        roles={[
          "DIRECTOR",
          "WRITER"
        ]}
        imageUrl={hasinduFront}
        instagramUrl="https://www.instagram.com/hasindu_prasanjaya" // **ADD THIS LINE**
      />

      {/* Person 4: HIVIRU DILNETH */}
      <PersonProfileCard
        name="HIVIRU DILNETH"
        roles={[
          "CINEMATOGRAPHER"
        ]}
        imageUrl={hiviruFront}
        instagramUrl="https://www.instagram.com/hiviru_dilneth" // **ADD THIS LINE**
      />

      {/* Person 5: TASINDU WIKRAMASINGHE */}
      <PersonProfileCard
        name="TASINDU WIKRAMASINGHE"
        roles={[
          "CINEMATOGRAPHER"
        ]}
        imageUrl={tasinduFront}
        instagramUrl="https://www.instagram.com/tasindu_wikramasinghe" // **ADD THIS LINE**
      />
    </div>
  </div>
);

export default AboutUsPage;