import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Kumbhabhishekam from '../assets/images/Kumbhabhishekam.jpg';
import Devotees from '../assets/images/Devotees.jpg';
import Kumbabishekam from '../assets/images/Kumbabishekam.jpg';
import Enhancements from '../assets/images/Enhancements.jpg';
import Restoration from '../assets/images/Restoration.jpg';

const OurVision = () => {
  AOS.init();

  return (
    <>
    <section className="bg-gradient-to-r from-yellow-100 to-orange-100 py-16 w-full  rounded-lg">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div
            className="space-y-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Our Vision
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                <span className="font-semibold text-orange-600">Temple Restoration –</span> 
                Preserving the ancient structure while ensuring its longevity and sanctity.
              </p>
              <p>
                <span className="font-semibold text-orange-600">Spiritual Revival –</span> 
                Reinstating sacred rituals and enhancing the divine energy of the temple.
              </p>
              <p>
                <span className="font-semibold text-orange-600">Cultural Heritage –</span> 
                Upholding traditions that connect generations to their spiritual roots.
              </p>
              <p>
                <span className="font-semibold text-orange-600">Community Unity –</span> 
                Bringing together devotees and supporters to contribute to this sacred cause.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <img
              src={Kumbhabhishekam}
              alt="Temple Restoration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
     
    </section>
   
    <div className="flex flex-col md:flex-row justify-start px-6 py-12 ">
  
  <div className="md:w-1/2 px-4">
    <h3 className="text-lg font-semibold mb-2">Why This Matters</h3>
    <p className="text-gray-700 leading-relaxed">
      Through this restoration, we aim to:
      <br />
      <strong>Revive</strong> the temple’s divine energy for devotees.  
      <br />
      <strong>Preserve</strong> its rich heritage for future generations.  
      <br />
      <strong>Strengthen</strong> the spiritual and cultural fabric of the community.  
    </p>
  </div>
</div>
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 px-4">
        <h2 className="text-2xl font-bold mb-4">Project Highlights</h2>
        <h3 className="text-lg font-semibold mb-2">
          Structural Restoration & Beautification
        </h3>
        <p className="text-gray-700 leading-relaxed">
          The temple’s foundation, walls, and sanctum are undergoing meticulous
          restoration to ensure longevity and stability. Over time, natural
          wear and environmental factors have affected the structure, making it
          crucial to reinforce its architectural integrity. Our team of skilled
          artisans and engineers is dedicated to preserving the temple’s
          original grandeur while enhancing its aesthetic appeal. Every effort
          is made to maintain the authenticity of the temple’s intricate
          carvings, sculptures, and sacred elements, ensuring that this
          spiritual landmark stands strong for generations to come.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 px-4 flex justify-center">
        <img
          src={Devotees}
          alt="Temple Restoration"
          className="rounded-lg shadow-lg w-full md:w-96"
        />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 px-4">
       
        <h3 className="text-lg font-semibold mb-2">
        Deity Installation & Sanctum Enhancements
        </h3>
        <p className="text-gray-700 leading-relaxed">
          
        The heart of any temple lies in its sanctum, where the deity resides and divine energy is concentrated. As part of this restoration, we are carefully reinstating the temple’s primary deities with utmost devotion and precision. The sanctum is being adorned with traditional embellishments, ensuring that it radiates the spiritual magnificence it was meant to embody. Special attention is given to the Prana Pratishta (life infusion ceremony), a sacred ritual that reawakens the divine presence within the idols, reinstating the temple as a powerful spiritual hub.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 px-4 flex justify-center">
        <img
          src={Kumbabishekam}
          alt="Temple Restoration"
          className="rounded-lg shadow-lg w-full md:w-96"
        />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 px-4">
       
        <h3 className="text-lg font-semibold mb-2">
        Kumbabishekam Ceremony
        </h3>
        <p className="text-gray-700 leading-relaxed">
          
      
        A key highlight of this project is the Kumbabishekam – a grand consecration ceremony performed in accordance with Vedic traditions. This sacred ritual purifies, revitalizes, and re-energizes the temple, restoring its divine vibrations. Priests and scholars will conduct elaborate homams (fire rituals), chanting mantras to invoke divine blessings. This once-in-a-lifetime event signifies the rebirth of the temple, ensuring that it remains a sanctified space where devotees can connect with the divine and receive spiritual upliftment.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 px-4 flex justify-center">
        <img
          src={Enhancements}
          alt="Temple Restoration"
          className="rounded-lg shadow-lg w-full md:w-96"
        />
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 px-4">
       
        <h3 className="text-lg font-semibold mb-2">        
 Improved Facilities for Devotees
        </h3>
        <p className="text-gray-700 leading-relaxed">
        
A temple is not just a place of worship; it is a sanctuary for spiritual seekers and devotees. As part of the renovation, we are enhancing accessibility, cleanliness, and overall infrastructure to provide a comfortable and fulfilling pilgrimage experience. The pathways leading to the temple are being improved, new seating areas are being installed, and modern sanitation facilities are being introduced. Our goal is to create a space that is welcoming, serene, and well-equipped to accommodate devotees from all walks of life, ensuring that their spiritual journey is one of peace and devotion.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 px-4 flex justify-center">
        <img
          src={Restoration}
          alt="Temple Restoration"
          className="rounded-lg shadow-lg w-full md:w-96"
        />
      </div>
    </div>
    </>
    
  );
};

export default OurVision;
