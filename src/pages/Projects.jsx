  import React, { useEffect, useState } from 'react';
  import AOS from "aos";
  import "aos/dist/aos.css";

  import Boomibalagan_Temple from '../assets/images/Boomibalagan_Temple.jpg';

  
import Boomibalagan_Temple_story from '../assets/images/banner.jpg'

  // Importing Gallery Images
  import Project from '../assets/images/Project.jpeg';
  import Project_Boomibalagan from '../assets/images/Project_Boomibalagan.jpeg';
  import Boomibalagan_trust_Temple from '../assets/images/Boomibalagan_trust_Temple.jpeg';
  import Temple_trust from '../assets/images/Temple_trust.jpeg';
  import Temple_project from '../assets/images/Temple_project.jpeg';
  import Project_hindus from '../assets/images/Project_hindus.jpeg';
  import Project_story from '../assets/images/Project_story.jpeg';
  import Charity_Project from '../assets/images/Charity_Project.jpeg';
  import Cultural_Project from '../assets/images/Cultural_Project.jpeg';
 
  import Project_donate from '../assets/images/Project_donate.jpeg';
  import Temple_story from '../assets/images/Temple_story.jpeg';
  import SuyambuBoomibalanTrustProject from '../assets/images/SuyambuBoomibalanTrustProject.jpeg';

  const images = [Project, Project_Boomibalagan, Boomibalagan_trust_Temple, Temple_trust, Temple_project, Project_hindus, Project_story, Charity_Project, Cultural_Project,  Project_donate, Temple_story, SuyambuBoomibalanTrustProject];

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
            <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              
              {/* Left Section - Project Description */}
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                  Renovation & Kumbabishekam of Boomibalagan Temple, Malvoi
                </h2>
                <p className="mt-6 text-base text-black text-justify">
                  We are honored to undertake the renovation and Kumbabishekam (consecration) of the Boomibalagan Temple
                  in Malvoi. This sacred temple, deeply rooted in history and devotion, is undergoing meticulous restoration
                  to preserve its spiritual essence and architectural grandeur. Our efforts are dedicated to reviving its
                  divine energy, ensuring that future generations can continue to seek blessings and experience the temple’s
                  rich heritage. Through this restoration, we aim to uphold the cultural and religious significance of this
                  sacred space, fostering a renewed sense of devotion and community harmony.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <button
                    onClick={() => (window.location.href = "tel:+919655667705")}
                    className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg hover:bg-yellow-600 transition-all duration-300"
                  >
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Right Section - Image */}
              <div className="relative mt-2 h-80 lg:mt-8">
                <img
                  alt="Boomibalagan Temple"
                  src={Boomibalagan_Temple}
                  className="absolute top-0 left-0 w-[40rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 shadow-lg"
                />
              </div>
            </div>

            {/* Project Highlights Section */}
            <div className="mt-10">
              <h2 className="font-bold text-2xl text-center mb-4 text-gray-900">
                Project Highlights
              </h2>
              <ul className="list-none max-w-4xl mx-auto px-6">
                {projectHighlights.map((item, index) => (
                  <li key={index} className="flex items-start mb-4">
                    <span className="text-green-500 text-xl mr-3">✅</span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

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
