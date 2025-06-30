import React from 'react';
import NavBar from '../components/NavBar';
import PersonProfileCard from '../components/PersonProfileCard';

// Import unique images for each person (front and back)
// ASSUME THESE PATHS AND FILENAMES ARE CORRECT IN YOUR PROJECT
import jayaruwanFront from '../assets/images/jayaruwan-prabodya-front.webp';
import jayaruwanBack from '../assets/images/jayaruwan-prabodya-back.webp'; // You need this second image!

import sandevFront from '../assets/images/sandev-ubeysekara-front.webp';
import sandevBack from '../assets/images/sandev-ubeysekara-back.webp';

import hasinduFront from '../assets/images/hasindu-prasanjaya-front.webp';
import hasinduBack from '../assets/images/hasindu-prasanjaya-back.webp';

import hiviruFront from '../assets/images/hiviru-dilneth-front.webp';
import hiviruBack from '../assets/images/hiviru-dilneth-back.webp';

import tasinduFront from '../assets/images/tasindu-wikramasinghe-front.webp';
import tasinduBack from '../assets/images/tasindu-wikramasinghe-back.webp';


const AboutUsPage = () => (
  <div className="bg-black text-white">
    <NavBar setActivePage="about-us" />

    <div className="bg-black py-5 text-center border-b-2 border-gray-800">
      <h1 className="font-photograph text-5xl tracking-widest text-white md:text-6xl lg:text-7xl">
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
        backImageUrl={jayaruwanBack} // Pass the second image URL here
      />

      {/* Person 2: SANDEV UBEYSEKARA */}
      <PersonProfileCard
        name="SANDEV UBEYSEKARA"
        roles={[
          "DIRECTOR",
          "WRITER"
        ]}
        imageUrl={sandevFront}
        backImageUrl={sandevBack}
      />

      {/* Person 3: HASINDU PRASANJAYA */}
      <PersonProfileCard
        name="HASINDU PRASANJAYA"
        roles={[
          "DIRECTOR",
          "WRITER"
        ]}
        imageUrl={hasinduFront}
        backImageUrl={hasinduBack}
      />

      {/* Person 4: HIVIRU DILNETH */}
      <PersonProfileCard
        name="HIVIRU DILNETH"
        roles={[
          "CINEMATOGRAPHER"
        ]}
        imageUrl={hiviruFront}
        backImageUrl={hiviruBack}
      />

      {/* Person 5: TASINDU WIKRAMASINGHE */}
      <PersonProfileCard
        name="TASINDU WIKRAMASINGHE"
        roles={[
          "CINEMATOGRAPHER"
        ]}
        imageUrl={tasinduFront}
        backImageUrl={tasinduBack}
      />
    </div>
  </div>
);

export default AboutUsPage;