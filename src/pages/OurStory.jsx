import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Boomibalagan_Temple_story from '../assets/images/Boomibalagan_Temple_story.jpg'
import Suyambu  from '../assets/images/Suyambu.jpg'
import Trust  from '../assets/images/Trust.jpg'
import Donate_trust  from '../assets/images/Donate_trust.jpg'

const OurStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
    className="relative bg-cover bg-center h-100 flex items-center justify-center text-center text-white"
    style={{ backgroundImage: `url(${Boomibalagan_Temple_story})` }} 
  >
        <div className="absolute inset-0 "></div>
        <h1 className="text-4xl font-bold relative z-10" data-aos="fade-up">
          Our Story
        </h1>
      </div>

      {/* About Us Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8 p-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Content */}
        <div data-aos="fade-right md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-yellow-500">
            About Sri Suyambu Boomibalan Trust
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            At <span className="font-bold">Sri Suyambu Boomibalan Trust</span>, we are dedicated to{" "}
            <span className="text-yellow-500 font-semibold">Dharma Seva</span> — serving society through 
            spiritual, cultural, and humanitarian initiatives. Rooted in the values of 
            "compassion, devotion, and service", our mission is to "preserve ancient temple 
            traditions" while uplifting communities through impactful charitable efforts.
          </p>

          

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Through "faith, service, and dedication", Sri Suyambu Boomibalan Trust remains committed to 
            spreading "divine blessings" and "social welfare". Together, we can build a "harmonious, 
            spiritually enriched, and compassionate society".
          </p>
            </div>
        {/* Right Side - Image */}
        <div data-aos="fade-left" className="flex ">
          <img
            src={Suyambu }
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
{/* our mission */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-6 mb-8 p-6">
  <div className="md:w-1/2 p-4">
    <h3 className="text-3xl font-bold text-yellow-500">Our Mission</h3>
    <div className="text-gray-800 text-justify p-3">
      <p>
        At <span className="font-bold">Sri Suyambu Boomibalan Trust</span>, our mission is rooted in <span className="text-yellow-500 font-semibold">Dharma Seva</span>—dedicated service to society through spiritual, cultural, and humanitarian initiatives. We strive to uplift communities while preserving our ancient traditions.
      </p>
      <p className="mt-2">
        <span className="font-semibold">We Strive To:</span>
      </p>
      <div className="list-disc list-inside mt-2">
        <p><span className="font-semibold">Restore and maintain historic temples</span> – Ensuring the preservation of sacred rituals and traditions.</p>
        <p><span className="font-semibold">Conduct religious services and spiritual programs</span> – Fostering devotion and cultural enrichment.</p>
        <p><span className="font-semibold">Provide education and scholarships</span> – Empowering underprivileged children with knowledge and opportunities.</p>
        <p><span className="font-semibold">Offer healthcare assistance</span> – Organizing free medical camps, health awareness programs, and essential medical support.</p>
        <p><span className="font-semibold">Engage in social welfare activities</span> – Distributing food, offering disaster relief, and running empowerment programs for rural communities.</p>
      </div>
      <p className="mt-2">
        Every act of generosity, no matter how small—whether supporting temple renovations, providing meals, or contributing to community welfare—creates a lasting spiritual impact. Together, we can build a compassionate, spiritually enriched society.
      </p>
    </div>
  </div>
  <div className="md:w-1/2" data-aos="fade-right">
    <img src={Trust} alt="Sri Suyambu Boomibalan Trust Mission" className="w-full h-auto rounded-lg shadow-lg" />
  </div>
</div>



{/* Our impact */}
<div className="flex flex-col md:flex-row items-center gap-6 mb-8 p-6">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    {/* Left Side - Content */}
    <div data-aos="fade-right md:w-1/2 p-4">
      <h2 className="text-3xl font-bold text-yellow-500">Our Impact</h2>
      <p className="mt-4 text-gray-700 text-lg leading-relaxed">
        With the unwavering support of generous donors, volunteers, and devotees, we continue to expand our reach and make a meaningful difference. Our efforts have led to:
      </p>

      <div className="list-disc list-inside mt-4 text-gray-700 text-lg leading-relaxed">
        <p><span className="font-semibold">Successful restoration of multiple temples</span>, preserving sacred heritage.</p>
        <p><span className="font-semibold">Thousands of meals distributed</span> to those in need, ensuring no one goes hungry.</p>
        <p><span className="font-semibold">Numerous educational initiatives</span> that have transformed the lives of students.</p>
        <p><span className="font-semibold">Medical support for the underprivileged</span>, improving community well-being.</p>
      </div>

      <p className="mt-4 text-gray-700 text-lg leading-relaxed">
        Through <span className="text-yellow-500 font-semibold">faith, service, and dedication</span>, Sri Suyambu Boomibalan Trust remains committed to spreading <span className="font-semibold">divine blessings</span> and <span className="font-semibold">social welfare</span>. Together, we can build a <span className="font-semibold">harmonious, spiritually enriched, and compassionate society</span>.
      </p>
    </div>

    {/* Right Side - Image */}
    <div data-aos="fade-left" className="flex">
      <img
        src={Donate_trust}
        alt="Our Impact"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>


      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center text-yellow-500" data-aos="fade-up">
    Our Milestones
  </h2>
  <div className="mt-10 space-y-10">
    {/* 2024 - Foundation of Our Trust */}
    <div className="flex flex-col md:flex-row items-center md:items-start" data-aos="fade-right">
      <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2024</div>
      <div className="ml-6 mt-4 md:mt-0 text-gray-700">
        <h3 className="text-xl font-bold">Foundation of Our Trust</h3>
        <p className="mt-2">Started with a small yet passionate team dedicated to temple restoration and spiritual enrichment.</p>
      </div>
    </div>

    {/* 2025 - First Major Restoration Project */}
    <div className="flex flex-col md:flex-row-reverse items-center md:items-start" data-aos="fade-left">
      <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2025</div>
      <div className="mr-6 mt-4 md:mt-0 text-gray-700 text-right md:text-left">
        <h3 className="text-xl font-bold">First Major Restoration Project</h3>
        <p className="mt-2">Successfully completed the restoration of a historic temple, reviving its lost grandeur and reinstating traditional rituals.</p>
        <p className="mt-2">Launched charity programs, including food distribution, medical aid, and educational support for underprivileged communities.</p>
      </div>
    </div>

    {/* 2025 - Expanding Our Mission */}
    <div className="flex flex-col md:flex-row items-center md:items-start" data-aos="fade-right">
      <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2025</div>
      <div className="ml-6 mt-4 md:mt-0 text-gray-700">
        <h3 className="text-xl font-bold">Expanding Our Mission</h3>
        <p className="mt-2">Launched charity programs, including food distribution, medical aid, and educational support for underprivileged communities.</p>
      </div>
    </div>

    {/* 2025 - First Free Medical Camp */}
    <div className="flex flex-col md:flex-row-reverse items-center md:items-start" data-aos="fade-left">
      <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2025</div>
      <div className="mr-6 mt-4 md:mt-0 text-gray-700 text-right md:text-left">
        <h3 className="text-xl font-bold">First Free Medical Camp</h3>
        <p className="mt-2">Organized a large-scale healthcare camp, offering free check-ups and treatments to hundreds of needy individuals.</p>
      </div>
    </div>

    {/* 2025 - Educational Upliftment Begins */}
    <div className="flex flex-col md:flex-row items-center md:items-start" data-aos="fade-right">
      <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2025</div>
      <div className="ml-6 mt-4 md:mt-0 text-gray-700">
        <h3 className="text-xl font-bold">Educational Upliftment Begins</h3>
        <p className="mt-2">Started scholarship programs and free tuition centers to empower young minds through education.</p>
      </div>
    </div>

    {/* 2026 - Community Outreach Grows */}
    <div className="flex flex-col md:flex-row-reverse items-center md:items-start" data-aos="fade-left">
      <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2026</div>
      <div className="mr-6 mt-4 md:mt-0 text-gray-700 text-right md:text-left">
        <h3 className="text-xl font-bold">Community Outreach Grows</h3>
        <p className="mt-2">Extended our charity work to rural areas, ensuring more people benefit from our seva programs.</p>
      </div>
    </div>

    {/* 2026 - Spiritual & Cultural Renaissance */}
    <div className="flex flex-col md:flex-row items-center md:items-start" data-aos="fade-right">
      <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2026</div>
      <div className="ml-6 mt-4 md:mt-0 text-gray-700">
        <h3 className="text-xl font-bold">Spiritual & Cultural Renaissance</h3>
        <p className="mt-2">Conducted grand spiritual events and heritage awareness programs to reconnect people with their traditions.</p>
      </div>
    </div>

    {/* 2026 - Next Phase of Temple Restoration */}
    <div className="flex flex-col md:flex-row-reverse items-center md:items-start" data-aos="fade-left">
      <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2026</div>
      <div className="mr-6 mt-4 md:mt-0 text-gray-700 text-right md:text-left">
        <h3 className="text-xl font-bold">Next Phase of Temple Restoration</h3>
        <p className="mt-2">Undertook multiple temple restoration projects to safeguard spiritual heritage for future generations.</p>
      </div>
    </div>

    {/* 2026 - Women & Youth Empowerment Initiatives */}
    <div className="flex flex-col md:flex-row items-center md:items-start" data-aos="fade-right">
      <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center rounded-full text-xl font-bold">2026</div>
      <div className="ml-6 mt-4 md:mt-0 text-gray-700">
        <h3 className="text-xl font-bold">Women & Youth Empowerment Initiatives</h3>
        <p className="mt-2">Introduced skill development programs to create self-sufficiency and employment opportunities.</p>
      </div>
    </div>
  </div>
</div>

      {/* Call to Action */}
      <div className="bg-yellow-500 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-bold" data-aos="zoom-in">Be a Part of Our Story</h2>
        <p className="mt-4 text-lg" data-aos="zoom-in" data-aos-delay="200">
          Join us in preserving our heritage and supporting communities in need.
        </p>
        <a href="/donate" className="mt-6 inline-block bg-white text-yellow-500 font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300" data-aos="zoom-in" data-aos-delay="400">
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default OurStory;
