import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import CTA from "../components/CTA";
import { CheckCircle } from "lucide-react";
import {
  IconPlantscape,
  IconGreenWall,
  IconAtrium,
  IconHoliday,
  IconFlorals,
  IconMaintenance,
  IconMossWall,
  OrganicIcon,
} from "../components/icons/BotanicalIcons";

const servicesDetailed = [
  {
    id: "interior-plantscaping",
    icon: IconPlantscape,
    title: "Interior Plantscaping",
    description:
      "Transform your indoor spaces with custom-designed plant installations that bring life, color, and natural beauty to any environment.",
    features: [
      "Custom design consultations",
      "Professional installation",
      "Wide variety of plant species",
      "Suitable for any space size",
      "Lease or purchase options",
    ],
    image: `${import.meta.env.BASE_URL}images/plantscaping-lobby.jpg`,
  },
  {
    icon: IconGreenWall,
    id: "green-walls",
    title: "Green Walls",
    description:
      "Make a bold statement with stunning vertical gardens that transform ordinary walls into living works of art.",
    features: [
      "Custom modular systems",
      "Integrated irrigation",
      "Low maintenance designs",
      "Improves air quality",
    ],
    image: `${import.meta.env.BASE_URL}images/living-wall-large.jpg`,
  },
  {
    icon: IconMossWall,
    id: "moss-walls",
    title: "Moss Walls",
    description:
      "Transform any wall into a stunning living feature that brings the calm and beauty of nature into your space — with zero maintenance required.",
    features: [
      "No watering, no sunlight required",
      "Creates a calming, nature-inspired focal point that reduces workplace stress",
      "Naturally absorbs sound, reducing echo and noise pollution",
      "Adds texture and dimension that flat walls can't achieve",
    ],
    image: `${import.meta.env.BASE_URL}images/greenwall-1.jpg`,
  },
  {
    icon: IconAtrium,
    id: "atrium-design",
    title: "Large Atrium Design",
    description:
      "Create dramatic, show-stopping installations for lobbies, atriums, and large commercial spaces.",
    features: [
      "Architectural integration",
      "Large-scale tropical installations",
      "Lighting design",
      "Automated watering design and installation",
    ],
    image: `${import.meta.env.BASE_URL}images/atrium-overhead-trees.jpg`,
  },
  {
    icon: IconHoliday,
    id: "holiday-decorations",
    title: "Holiday Decorations",
    description:
      "Delight customers and employees with festive seasonal displays that create magical holiday atmospheres.",
    features: [
      "Custom themed designs",
      "Professional installation",
      "Custom Poinsettia programs",
      "Timely setup and removal",
      "Storage available",
    ],
    image: `${import.meta.env.BASE_URL}images/atrium-holiday.jpg`,
  },
  {
    icon: IconFlorals,
    id: "color-program",
    title: "Color Program",
    description:
      "Beautiful living arrangements for offices, lobbies, and events that bring color and elegance to any space.",
    features: [
      "Quarterly changeouts",
      "Custom designs for any occasion",
      "Corporate programs available",
      "Creates a welcoming first impression for clients and visitors",
    ],
    image: `${import.meta.env.BASE_URL}images/tropical-arrangement.jpg`,
  },
  {
    icon: IconMaintenance,
    id: "plant-maintenance",
    title: "Plant Maintenance",
    description:
      "Keep your plants healthy and thriving year-round with our professional maintenance programs.",
    features: [
      "Regular watering schedules",
      "Fertilization programs",
      "Pest management",
      "Pruning and grooming",
      "Plant replacement guarantee",
    ],
    image: `${import.meta.env.BASE_URL}images/planted-benches-garden.jpg`,
  },
];

const ServicesPage = () => {
  const { hash } = useLocation();
  const lineRef = useRef(null);
  const mobileLineRef = useRef(null);

  useEffect(() => {
    const rows = document.querySelectorAll("[data-service-row]");
    if (!rows.length) return;
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll("[data-reveal]");
            reveals.forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 120);
            });
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    rows.forEach((row) => revealObserver.observe(row));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.classList.add("process-line-grow");
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(line);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const line = mobileLineRef.current;
    if (!line) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.classList.add("process-line-v-grow");
          observer.disconnect();
        }
      },
      { rootMargin: "-30% 0px 0px 0px", threshold: 0 }
    );
    observer.observe(line);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (!el) return;
    requestAnimationFrame(() => {
      const prev = el.previousElementSibling;
      const top = prev
        ? prev.getBoundingClientRect().bottom + window.scrollY
        : el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    });
  }, [hash]);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/moss-wall-bg.jpeg)` }} />
        <div className="absolute inset-0 bg-forest-900/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1 bg-white/20 text-white ring-1 ring-white/40 rounded-full text-sm font-medium mb-6">
            Our Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Complete Plantscaping Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial design to ongoing maintenance, we provide comprehensive
            services to bring natural beauty into your space.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {servicesDetailed.map((service, index) => (
              <div
                key={service.title}
                id={service.id}
                data-service-row
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div data-reveal className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
                <div data-reveal className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="mb-4">
                    <OrganicIcon Icon={service.icon} />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-sage-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-sage-200 text-sage-700 rounded-full text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="section-heading">Our Process</h2>
            <p className="section-subheading">
              A simple, streamlined approach to transforming your space.
            </p>
          </div>

          <div className="relative">
            {/* Animated connecting line — desktop horizontal */}
            <div
              ref={lineRef}
              className="process-line hidden md:block absolute left-[12.5%] z-0 h-0.5 bg-sage-300"
              style={{ top: "calc(50% - 1px)", width: "75%" }}
            />
            {/* Animated connecting line — mobile vertical */}
            <div
              ref={mobileLineRef}
              className="process-line-v block md:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 z-0 bg-sage-300"
            />
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "1",
                  title: "Consultation",
                  description:
                    "We visit your space to understand your vision and needs.",
                },
                {
                  step: "2",
                  title: "Design",
                  description:
                    "Our team creates a custom plant design tailored to your space.",
                },
                {
                  step: "3",
                  title: "Installation",
                  description:
                    "Professional installation with minimal disruption to your business.",
                },
                {
                  step: "4",
                  title: "Maintenance",
                  description:
                    "Ongoing care keeps your plants healthy and beautiful.",
                },
              ].map((item) => (
                <div key={item.step}>
                  <div className="bg-white rounded-2xl p-8 text-center relative z-10 h-full flex flex-col items-center justify-start">
                    <span className="text-6xl font-bold text-sage-200">
                      {item.step}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-forest-800 mt-4 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default ServicesPage;
