import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import weddingImage from "@/assets/portfolio-wedding-1.jpg";
import portraitImage from "@/assets/portfolio-portrait-1.jpg";
import eventImage from "@/assets/portfolio-event-1.jpg";
import travelImage from "@/assets/portfolio-travel-1.jpg";

const portfolioItems = [
  {
    id: 1,
    image: weddingImage,
    category: "Weddings",
    title: "Romantic Garden Wedding",
    description: "A dreamy celebration of love in natural surroundings",
    slug: "wedding-1"
  },
  {
    id: 2,
    image: portraitImage,
    category: "Portraits",
    title: "Elegant Portrait Session",
    description: "Capturing personality and grace in timeless portraits",
    slug: "portrait-1"
  },
  {
    id: 3,
    image: eventImage,
    category: "Events",
    title: "Corporate Gala Evening",
    description: "Professional event photography with artistic flair",
    slug: "event-1"
  },
  {
    id: 4,
    image: travelImage,
    category: "Travel",
    title: "Destination Photography",
    description: "Beautiful landscapes and travel memories",
    slug: "travel-1"
  },
];

const categories = ["All", "Weddings", "Portraits", "Events", "Travel"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-gray">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-charcoal mb-6">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of moments that tell stories of love, joy, and life's most precious memories.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gold text-white shadow-gold"
                  : "bg-white text-charcoal hover:bg-gold-light hover:text-white border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <Link key={item.id} to={`/portfolio/${item.slug}`}>
              <Card 
                className="group overflow-hidden bg-white shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] animate-scale-in border-0 cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-gold text-white border-0">
                    {item.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link to="/portfolio">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-gold text-white rounded-full font-medium shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-105">
              View Full Portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;