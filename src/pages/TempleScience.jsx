import React from "react";
import Banner from '../assets/images/banner.jpg'
import Temple from '../assets/images/temple.jpg'
import SuyambuBoomibalanTemple from '../assets/images/SuyambuBoomibalanTemple.jpg'
import Boomibalagan_Temple_story from '../assets/images/Boomibalagan_Temple_story.jpg'
import Boomibalagan_Temple from '../assets/images/Boomibalagan_Temple.jpg'

const TempleScience = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-96">
        <img
          src={Banner}
          alt="Temple Science Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Temple Science
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
          A Deeper Look Into the Mystical Science & Significance of Temples
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Section 1 */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition">
            <img
              src={Temple}
              alt="Why Protect Temples"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700 mb-2">Why Protect Temples?</h3>
            <p className="text-gray-600 text-sm">
              Hindu temples are epicenters of powerful, healing energy of Enlightened Masters and Rishis.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Learn More
            </button>
          </div>

          {/* Section 2 */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition">
            <img
              src={SuyambuBoomibalanTemple}
              alt="Benefits of Renovating Temples"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700 mb-2">Benefits of Renovating Temples</h3>
            <p className="text-gray-600 text-sm">
              Temple Renovation, Reconstruction, and Kumbabhishekam are all considered extremely noble deeds.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Section 3 */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition">
            <img
              src={Boomibalagan_Temple_story}
              alt="The Mystical Importance"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700 mb-2">The Mystical Importance of Preserving Hindu Temples</h3>
            <p className="text-gray-600 text-sm">
              The presence of temples in this world is a great blessing and a great responsibility.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Learn More
            </button>
          </div>

          {/* Section 4 */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition">
            <img
              src={Boomibalagan_Temple}
              alt="Science of Kumbhabhishekam"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700 mb-2">The Science of Temple Kumbhabhishekam</h3>
            <p className="text-gray-600 text-sm">
              It is a truly unique and powerful blessing to participate in or attend a Kumbhabhishekam.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleScience;
