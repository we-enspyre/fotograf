import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import portfolioWedding1 from "@/assets/portfolio-wedding-1.jpg";
import portfolioPortrait1 from "@/assets/portfolio-portrait-1.jpg";
import portfolioEvent1 from "@/assets/portfolio-event-1.jpg";
import portfolioTravel1 from "@/assets/portfolio-travel-1.jpg";

const allPortfolioItems = [
  {
    id: 1,
    image: portfolioWedding1,
    category: "Weddings",
    title: "Romantic Garden Wedding",
    description: "Intimate ceremony in Aarhus Botanical Garden",
    slug: "wedding-1"
  },
  {
    id: 2,
    image: portfolioPortrait1,
    category: "Portraits",
    title: "Senior Portrait Session",
    description: "Artistic portraits in natural light",
    slug: "portrait-1"
  },
  {
    id: 3,
    image: portfolioEvent1,
    category: "Events",
    title: "Corporate Gala",
    description: "Professional event photography",
    slug: "event-1"
  },
  {
    id: 4,
    image: portfolioTravel1,
    category: "Travel",
    title: "Nordic Landscapes",
    description: "Travel photography across Scandinavia",
    slug: "travel-1"
  },
  // Add more portfolio items as needed
];

const categories = ["All", "Weddings", "Portraits", "Events", "Travel"];

const FullPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? allPortfolioItems 
    : allPortfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-display font-light">Full Portfolio</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link key={item.id} to={`/portfolio/${item.slug}`}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                      {item.category}
                    </Badge>
                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullPortfolio;