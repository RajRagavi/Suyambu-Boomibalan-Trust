import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSending(true);
      emailjs
        .send(
          "service_b9dx464", 
          "template_m60jfvn",
          formData,
          "sKFgLmhhGvv9hSfST"
        )
        .then(
          (response) => {
            console.log("Email sent successfully", response);
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSending(false);
          },
          (error) => {
            console.log("Failed to send email", error);
            alert("Failed to send message. Please try again.");
            setIsSending(false);
          }
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* Header Section */}
      <div className="text-center py-12 bg-yellow-500 text-white ">
        <h1 className="text-3xl font-bold" data-aos="fade-up">
          Contact Us
        </h1>
        <p className="mt-2 text-lg" data-aos="fade-up" data-aos-delay="200">
        For inquiries, donations, or collaboration opportunities, reach out to us at:
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-right">
          <h2 className="text-xl font-semibold text-yellow-500 mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {Object.keys(formData).map((field) => (
              <div key={field}>
                <label className="text-gray-600 font-medium capitalize">{field}</label>
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder={`Enter your ${field}`}
                  />
                ) : (
                  <textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    rows="4"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Write your message here..."
                  ></textarea>
                )}
                {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
              </div>
            ))}
            <button
              className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition duration-300"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-6" data-aos="fade-left">
  {/* Contact Information */}
  <h2 className="text-xl font-semibold text-yellow-500">Our Contact Details</h2>

  {/* Address */}
  <div className="flex items-center space-x-4">
    <i className="fas fa-map-marker-alt text-yellow-500 text-2xl"></i>
    <p className="text-gray-600"> 📍 Sri Suyambu Bhoomipalagan Trust, <br />
  No.2/65, Perumal Kovil Street, <br />
  Thappai Kallukudi Vazhi, <br />
  Lalgudi Taluk, Tiruchirapalli, <br />
  Tamil Nadu, Pin Code - 621651</p>
  </div>

  {/* Phone */}
  <div className="flex items-center space-x-4">
    <i className="fas fa-phone-alt text-yellow-500 text-2xl"></i>
    <p className="text-gray-600">
      <a href="tel:+919655667705" className="hover:text-yellow-500 transition">
      📞 +91 96556 67705
      </a>
    </p>
  </div>

  {/* Email */}
  <div className="flex items-center space-x-4">
    <i className="fas fa-envelope text-yellow-500 text-2xl"></i>
    <p className="text-gray-600">
      <a href="mailto:info@suyambutrust.com" className="hover:text-yellow-500 transition">
      📧 info@suyambutrust.com
      </a>
    </p>
  </div>

  {/* Google Map (Below Contact Details) */}
  <div className="mt-6">
    <h2 className="text-center text-xl font-bold text-yellow-500 mb-6" data-aos="fade-up">
      Find Us on Google Maps
    </h2>

    <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
    <iframe
  title="Google Map"
  className="w-full h-full border-0"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.8879447203844!2d78.9594519750458!3d11.04702738911864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baae7ff924378f5%3A0xc43b4b3c8c48e908!2sArulmigu%20Boomibalagan%20Temple!5e0!3m2!1sen!2sin!4v1741245439648!5m2!1sen!2sin"
  allowFullScreen
  loading="lazy"
></iframe>

    </div>
  </div>
</div>


{/* Google Maps Section */}


       
      </div>

      {/* Google Map */}
     
    </div>
  );
};

export default Contact;
