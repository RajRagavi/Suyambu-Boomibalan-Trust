import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Conservation from "../assets/images/Conservation.jpg";
import Puja from "../assets/images/puja.jpg";
import Charity from "../assets/images/Charity.jpg";
import Devotee_Services from "../assets/images/Devotee_Services.jpg";
import CulturalPrograms from "../assets/images/CulturalPrograms.jpg";

const services = [
  { title: "Temple Restoration & Conservation", image: Conservation },
  { title: "Hindu Rituals and Pujas", image: Puja },
  { title: "Charity & Social Welfare", image: Charity },
  { title: "Devotee Services", image: Devotee_Services },
  { title: "Cultural Programs", image: CulturalPrograms },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);

  return (
    <section className="bg-white py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-10" data-aos="fade-up">
      Our Services
    </h2>

    {/* First Row (3 Cards) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.slice(0, 3).map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay={index * 200} // Staggered effect
        >
          <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-lg font-bold text-black">{service.title}</h3>
            <button className="mt-4 px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Second Row (2 Cards) - Fixed */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {services.slice(3, 5).map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden w-full transform transition duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay={(index + 3) * 200} // Continue stagger effect
        >
          <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-800">{service.title}</h3>
            <button className="mt-4 px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Services;
