import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
  
import { motion } from "framer-motion";

  import Boomibalagan_god from '../assets/images/Boomibalagan_god.jpg';

  
import Boomibalagan_Temple_story from '../assets/images/banner.jpg'
import Boomibalagan_kovil from '../assets/images/Boomibalagan_kovil.jpg'
import Kovil from '../assets/images/kovil.jpg'

  // Importing Gallery Images
  import Project from '../assets/images/Project.jpeg';
  import Project_Boomibalagan from '../assets/images/Project_Boomibalagan.jpeg';
  import Temple_project from '../assets/images/Temple_project.jpeg';
  import Charity_Project from '../assets/images/Charity_Project.jpeg';
  import Project_hindus from '../assets/images/Project_hindus.jpeg';
  
 
  // import Project_donate from '../assets/images/Project_donate.jpeg';
  // import Temple_story from '../assets/images/Temple_story.jpeg';
  // import SuyambuBoomibalanTrustProject from '../assets/images/SuyambuBoomibalanTrustProject.jpeg';
import OurVision from './Ourvision';

  const images = [Project, Project_Boomibalagan, Project_hindus  ];
  const images1 = [Temple_project, Charity_Project ];

  const Projects = () => {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
    }, []);

    const projectHighlights = [
      "Structural Restoration & Beautification – Repairing and strengthening the temple’s foundation, walls, and sanctum.",
      "Deity Installation & Sanctum Enhancements – Ensuring the temple regains its divine essence and grandeur.",
      "Kumbabishekam Ceremony – A sacred ritual to re-energize the temple, following Vedic traditions.",
      "Improved Facilities for Devotees – Enhancing access, cleanliness, and amenities for a better pilgrimage experience.",
    ];

    

    return (
      <div className="bg-gray-100 py-12 ">
       
 <div
    className="relative bg-cover bg-center h-100 flex items-center justify-center text-center text-white"
    style={{ backgroundImage: `url(${Boomibalagan_Temple_story})` }} 
  >
        <div className="absolute inset-0 "></div>
        <h1 className="text-4xl font-bold relative z-10" data-aos="fade-up">
          Current Project
        </h1>
      </div>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl pb-10 sm:px-6 sm:py-8 lg:px-8">
          <h2 className="text-2xl font-bold text-center tracking-tight text-yellow-500 sm:text-3xl">
                  Renovation & Kumbabishekam of Boomibalagan Temple, Malvoi
                </h2>

                <div className="relative isolate overflow-hidden bg-white px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
  
  {/* Left Column - Project Description */}
  <div className="lg:w-1/2 flex flex-col justify-center">
   
    <p className="mt-6 text-base text-black text-justify">
      We are honored to undertake the renovation and Kumbabishekam (consecration) of the Boomibalagan Temple
      in Malvoi. This sacred temple, deeply rooted in history and devotion, is undergoing meticulous restoration
      to preserve its spiritual essence and architectural grandeur. Our efforts are dedicated to reviving its
      divine energy, ensuring that future generations can continue to seek blessings and experience the temple’s
      rich heritage. Through this restoration, we aim to uphold the cultural and religious significance of this
      sacred space, fostering a renewed sense of devotion and community harmony.
    </p>
    <div className="mt-10">
      <button
        onClick={() => (window.location.href = 'tel:+919655667705')}
        className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg hover:bg-yellow-600 transition-all duration-300"
      >
        Contact Us
      </button>
    </div>
  </div>

  {/* Right Column - Images */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  
  {/* Left Column - One Portrait Image */}
  <div>
    <img
      src={Boomibalagan_god}
      alt="Boomibalagan Temple Deity"
      className="rounded-lg shadow-lg w-full h-[420px] object-cover mt-10"
      data-aos="fade-right"
    />
  </div>

  {/* Right Column - Two Landscape Images */}
  <div className="grid grid-rows-2 gap-4 m-4">
    <img
      src={Kovil}
      alt="Temple Exterior"
      className="rounded-lg shadow-lg w-full h-[200px] object-cover mt-5"
      data-aos="fade-left"
    />
    <img
      src={Boomibalagan_kovil}
      alt="Temple Ritual"
      className="rounded-lg shadow-lg w-full h-[200px] object-cover"
      data-aos="fade-left"
    />
  </div>

</div>


</div>
<OurVision />

           {/* Gallery Section */}
           <div className="bg-gray-100 py-12 px-6 flex justify-center">
      <div className="max-w-6xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6">
        {/* Image Gallery */}
        {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:w-1/2">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg shadow-md w-full h-40 object-cover"
            />
          ))}
        </div> */}

        <div className="grid grid-cols-2 gap-4 md:w-1/2">
  {/* 1st Column: 3 Landscape Images */}
  <div className="flex flex-col gap-4">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Landscape ${index + 1}`}
        className="rounded-lg shadow-md w-full h-[120px] object-cover"
      />
    ))}
  </div>

  {/* 2nd Column: 2 Portrait Images */}
  <div className="flex flex-col gap-4">
    {images1.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Portrait ${index + 1}`}
        className="rounded-lg shadow-md w-full h-[190px] object-cover"
      />
    ))}
  </div>
</div>


        {/* Text Content */}
        <div className="md:w-1/2 px-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Project Gallery</h2>
          <h3 className="text-xl font-semibold mb-2">
            Preserving Heritage, Restoring Divinity
          </h3>
          <p className="text-gray-700 leading-relaxed">
            At Sri Suyambu Boomibalan Trust, we take immense pride in our
            mission to restore and revitalize sacred temples, ensuring their
            spiritual and architectural legacy endures for generations.
          </p>
          <p className="text-gray-700 mt-2">
            From structural repairs and deity installations to beautification
            and Kumbabishekam rituals, these images capture the journey of
            transformation, highlighting devotion and craftsmanship.
          </p>
          <p className="text-black font-bold mt-4">
            Join us in witnessing this divine renewal and be a part of this
            historic restoration journey!
          </p>

      
          <motion.button
        type="submit"
        className="shadow-xl text-lg bg-gray-900 text-white px-4 py-2 rounded-full border-2 hover:text-red-600 hover:bg-white transition-all m-15"
        onClick={() => (window.location.href = "tel:+919655667705")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
              Contact Us
            </motion.button>  </div>
      </div>
      
    </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
