import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Kumbhabhishekam from '../assets/images/Kumbhabhishekam.jpg';

const OurVision = () => {
  AOS.init();

  return (
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
  );
};

export default OurVision;
