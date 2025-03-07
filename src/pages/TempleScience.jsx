import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Banner from "../assets/images/banner.jpg";
import Temple from "../assets/images/Hindus.jpg";
import SuyambuBoomibalanTemple from "../assets/images/Renovating_Temples.jpg";
import Boomibalagan_Temple_story from "../assets/images/Boomibalagan_Temple_story.jpg";
import Boomibalagan_Temple from "../assets/images/Kumbhabhishekam.jpg";

const TempleScience = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full">  {/* Left Side */}
       {/* Banner Section */}
            <div className="relative w-full h-64 md:h-96">
              <img
                src={Banner}
                alt="Temple Science Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
                <h1 className="text-white text-3xl md:text-5xl font-bold">
                  Temple Science
                </h1>
              </div>
            </div>

       
      </div>

      {/* Temple Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-30">
        {[
          {
            image: Temple,
            title: "Why Protect Temples?",
            desc: "Discover the importance of temple preservation.",
            href: "/temple-science/Why-Protect-Temples",
          },
          {
            image: SuyambuBoomibalanTemple,
            title: "Benefits of Renovating Temples",
            desc: "Explore the spiritual and cultural benefits of temple renovation.",
            href: "/temple-science/Benefits-of-Renovating-Temples",
          },
          {
            image: Boomibalagan_Temple_story,
            title: "The Mystical Importance of Preserving Hindu Temples",
            desc: "Learn about the spiritual impact of preserving ancient temples.",
            href: "/temple-science/hindu-temples",
          },
          {
            image: Boomibalagan_Temple,
            title: "The Science of Temple Kumbhabhishekam",
            desc: "Understand the rituals and their scientific significance.",
            href: "/temple-science/temple-kumbhabhishekam",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            data-aos="fade-up"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-yellow-400">{item.title}</h2>
              <p className="mt-2 text-sm">{item.desc}</p>
              <button
                onClick={() => navigate(item.href)}
                className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-300 transition-all"
              >
                Click Here
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempleScience;