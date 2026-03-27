import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import WaCarousel from "@awesome.me/webawesome/dist/react/carousel/index.js";
import WaCarouselItem from "@awesome.me/webawesome/dist/react/carousel-item/index.js";

const BASE = import.meta.env.BASE_URL;

const categories = [
  {
    id: 1,
    name: "Atrium",
    title: "Stunning Atrium Designs",
    description:
      "Multi-story atriums featuring tropical plants and dramatic living installations.",
    featureImage: `${BASE}images/atrium-overhead-wide.jpg`,
    imageStyle: { objectPosition: "calc(50% + 100px) center" },
    gallery: [
      `${BASE}images/atrium-garden.jpg`,
      `${BASE}images/atrium-overhead-2.jpg`,
      `${BASE}images/atrium-overhead-trees.jpg`,
      `${BASE}images/atrium-planted-benches.jpg`,
      `${BASE}images/atrium-plants-staircase.jpg`,
      `${BASE}images/atrium-tree-grand.jpg`,
      `${BASE}images/atrium-tree-wide.jpg`,
      `${BASE}images/atrium-tropical-seating.jpg`,
    ],
  },
  {
    id: 2,
    name: "Green Walls",
    title: "Living Green Walls",
    description:
      "Vertical gardens that transform any space into a vibrant, living work of art.",
    featureImage: `${BASE}images/living-wall-pattern.jpg`,
    gallery: [
      `${BASE}images/living-wall-1.jpg`,
      `${BASE}images/living-wall-2.jpg`,
      `${BASE}images/living-wall-closeup.jpg`,
      `${BASE}images/living-wall-large.jpg`,
      `${BASE}images/living-wall-lobby-wide.jpg`,
      `${BASE}images/living-wall-pattern.jpg`,
    ],
  },
  {
    id: 3,
    name: "Water Features",
    title: "Indoor Water Features",
    description:
      "Tranquil water features surrounded by lush tropical plantings for a serene atmosphere.",
    featureImage: `${BASE}images/water-feature-rocks.jpg`,
    imageStyle: { objectPosition: "center bottom" },
    gallery: [
      `${BASE}images/water-feature-indoor.jpg`,
      `${BASE}images/water-feature-plants.jpg`,
    ],
  },
  {
    id: 4,
    name: "Seasonal",
    title: "Delivering Seasonal Magic",
    description:
      "Festive seasonal decorations that delight visitors and transform spaces during the holidays.",
    featureImage: `${BASE}images/Christmas_Tree2.jpg`,
    imageStyle: { objectPosition: "center top" },
    gallery: [
      `${BASE}images/Christmas_Lobby.jpg`,
      `${BASE}images/Christmas_Tree1.jpg`,
      `${BASE}images/Christmas_Tree3.jpg`,
      `${BASE}images/Garland.jpg`,
      `${BASE}images/indoor-garden-holiday.jpg`,
      `${BASE}images/poinsettia_tree.jpg`,
    ],
  },
  {
    id: 5,
    name: "Lobby",
    title: "Professional Lobby Plantscaping",
    description:
      "Elegant interior plantscaping that elevates professional spaces and creates lasting impressions.",
    featureImage: `${BASE}images/indoor-garden-seating.jpg`,
    gallery: [
      `${BASE}images/corporate-lobby-trees.jpg`,
      `${BASE}images/floral-anthurium.jpg`,
      `${BASE}images/indoor-garden-holiday.jpg`,
      `${BASE}images/lobby-plants-window.jpg`,
      `${BASE}images/planted-benches-garden.jpg`,
      `${BASE}images/plantscaping-lobby.jpg`,
      `${BASE}images/tropical-arrangement-bowl.jpg`,
      `${BASE}images/tropical-arrangement.jpg`,
    ],
  },
];

const Portfolio = ({ isFullPage = false }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const carouselRef = useRef(null);

  const openGallery = (category) => setActiveCategory(category);
  const closeGallery = () => setActiveCategory(null);

  return (
    <section className="py-24 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — hidden when page already has a hero */}
        {!isFullPage && (
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-sage-200 text-sage-700 rounded-full text-sm font-medium mb-4">
              Installations We're Proud of
            </span>
            <h2 className="section-heading">Selected Works</h2>
            <p className="section-subheading">
              Explore our diverse collection of interior plantscaping designs
              across the Treasure Valley.
            </p>
          </div>
        )}

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => openGallery(cat)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4]"
            >
              <img
                src={cat.featureImage}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={cat.imageStyle}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/95 via-forest-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-sage-200 text-sm font-medium mb-1">
                  {cat.name}
                </span>
                <h3 className="text-white text-xl font-display font-semibold mb-2 drop-shadow-lg">
                  {cat.title}
                </h3>
                <p className="text-gray-200 text-sm line-clamp-2 drop-shadow-lg">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center text-sage-300">
                  <span className="text-sm font-medium">
                    View Gallery ({cat.gallery.length} photos)
                  </span>
                </div>
              </div>
              {/* Always-visible label at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-forest-900/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-lg font-display font-semibold drop-shadow-lg">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button (on homepage) */}
        {!isFullPage && (
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary">
              View All Designs
            </Link>
          </div>
        )}
      </div>

      {/* Gallery Lightbox */}
      {activeCategory && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6"
          style={{
            background: "rgba(38, 48, 18, 0.76)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
          onClick={closeGallery}
        >
          {/* Header bar */}
          <div
            className="w-full max-w-4xl flex items-center justify-between mb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium mb-1">
                {activeCategory.name}
              </span>
              <h3 className="text-white text-lg font-display font-semibold leading-snug drop-shadow-lg">
                {activeCategory.title}
              </h3>
            </div>
            <button
              onClick={closeGallery}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel + arrows */}
          <div
            className="flex items-center gap-4 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left arrow */}
            <button
              onClick={() => carouselRef.current?.previous()}
              className="shrink-0 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Carousel */}
            <div
              className="flex-1"
              style={{
                borderRadius: "1.25rem",
                boxShadow:
                  "0 30px 80px rgba(0,0,0,0.6), 0 10px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)",
                transform: "perspective(1000px) translateZ(0)",
              }}
            >
            <WaCarousel
              ref={carouselRef}
              pagination
              loop
              mouseDragging
              style={{
                "--aspect-ratio": "4/3",
                borderRadius: "1.25rem",
                overflow: "hidden",
              }}
            >
              {activeCategory.gallery.map((img, idx) => (
                <WaCarouselItem key={idx}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    {/* Blurred photo background — fills letterbox areas */}
                    <div
                      style={{
                        position: "absolute",
                        inset: "-30px",
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(24px)",
                        transform: "scale(1.1)",
                        opacity: 0.75,
                      }}
                    />
                    {/* Actual photo */}
                    <img
                      src={img}
                      alt={`${activeCategory.name} ${idx + 1}`}
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </WaCarouselItem>
              ))}
            </WaCarousel>
            </div>

            {/* Right arrow */}
            <button
              onClick={() => carouselRef.current?.next()}
              className="shrink-0 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
