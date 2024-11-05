import { Mail, MapPin, Phone } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";

export const HomePage: React.FC = () => (
  <div>
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">
          Building Next-Gen Mobile & Web Applications
        </h1>
        <p className="text-xl mb-8">
          We create innovative solutions for businesses worldwide
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
        >
          Get in touch
        </a>
      </div>
    </header>

    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Hikmat va Hayot"
            description="Secure and user-friendly mobile banking solution with advanced features."
            imagePath="/hikmat-va-hayot.png"
            link="https://play.google.com/store/apps/details?id=com.programmsoft.odampsihalogiyasi&pcampaignid=web_share"
          />
          <ProjectCard
            title="Better Not To Do It"
            description="Scalable e-commerce platform with integrated payment systems."
            imagePath="/better-not-to-do.png"
            link="https://play.google.com/store/apps/details?id=com.softtech.betternottodoit&pcampaignid=web_share"
          />
          <ProjectCard
            title="O'zbekcha anekdotlar"
            description="Comprehensive healthcare management system for clinics."
            imagePath="/anekdotlar.png"
            link="https://play.google.com/store/apps/details?id=com.programmsoft.uzbekanekdotlari&pcampaignid=web_share"
          />
        </div>
      </div>
    </section>

    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Mail className="mr-2" /> softtechmobile007@gmail.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" /> +998 90 909 88 28
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2" /> Uzbekistan, Tashkent
              </p>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border rounded-md h-32"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
);
