  import React, { useEffect, useState } from 'react';
  import AOS from "aos";
  import "aos/dist/aos.css";

  import Boomibalagan_god from '../assets/images/Boomibalagan_god.jpg';

  
import Boomibalagan_Temple_story from '../assets/images/banner.jpg'
import Boomibalagan_kovil from '../assets/images/Boomibalagan_kovil.jpg'
import Kovil from '../assets/images/kovil.jpg'

  // Importing Gallery Images
  import Project from '../assets/images/Project.jpeg';
  import Project_Boomibalagan from '../assets/images/Project_Boomibalagan.jpeg';
  import Boomibalagan_trust_Temple from '../assets/images/Boomibalagan_trust_Temple.jpeg';
  import Temple_trust from '../assets/images/Temple_trust.jpeg';
  import Temple_project from '../assets/images/Temple_project.jpeg';
  import Project_hindus from '../assets/images/Project_hindus.jpeg';
  import Project_story from '../assets/images/Project_story.jpeg';
  import Cultural_Project from '../assets/images/Cultural_Project.jpeg';
 
  // import Project_donate from '../assets/images/Project_donate.jpeg';
  // import Temple_story from '../assets/images/Temple_story.jpeg';
  // import SuyambuBoomibalanTrustProject from '../assets/images/SuyambuBoomibalanTrustProject.jpeg';
import OurVision from './Ourvision';

  const images = [Project, Project_Boomibalagan, Boomibalagan_trust_Temple, Temple_trust, Temple_project, Project_hindus, Project_story,Cultural_Project,  ];

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
           <div className="mt-12">
            <h2 className="font-bold text-2xl text-center mb-6 text-gray-900">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
              {images.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
