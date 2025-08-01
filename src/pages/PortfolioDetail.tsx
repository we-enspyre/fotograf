import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import portfolioWedding1 from "@/assets/portfolio-wedding-1.jpg";
import portfolioPortrait1 from "@/assets/portfolio-portrait-1.jpg";
import portfolioEvent1 from "@/assets/portfolio-event-1.jpg";
import portfolioTravel1 from "@/assets/portfolio-travel-1.jpg";

const portfolioDetails = {
  "wedding-1": {
    title: "Romantic Garden Wedding",
    category: "Wedding",
    description: "A magical wedding celebration in the heart of Aarhus Botanical Garden. This intimate ceremony captured the essence of timeless romance with natural lighting and elegant compositions.",
    images: [portfolioWedding1, portfolioWedding1, portfolioWedding1], // In real app, these would be different images
    details: {
      location: "Aarhus Botanical Garden",
      date: "June 2024",
      couple: "Sarah & Michael"
    }
  },
  "portrait-1": {
    title: "Senior Portrait Session", 
    category: "Portrait",
    description: "An artistic portrait session showcasing the graduate's personality and achievements through natural lighting and creative compositions.",
    images: [portfolioPortrait1, portfolioPortrait1, portfolioPortrait1],
    details: {
      location: "Downtown Aarhus",
      date: "May 2024",
      client: "Emma"
    }
  },
  "event-1": {
    title: "Corporate Gala",
    category: "Event", 
    description: "Professional event photography capturing the elegance and networking atmosphere of this prestigious corporate gathering.",
    images: [portfolioEvent1, portfolioEvent1, portfolioEvent1],
    details: {
      location: "Hotel Royal Aarhus",
      date: "April 2024",
      event: "Annual Awards Ceremony"
    }
  },
  "travel-1": {
    title: "Nordic Landscapes",
    category: "Travel",
    description: "A breathtaking journey through Scandinavian landscapes, capturing the raw beauty and serene moments of Nordic nature.",
    images: [portfolioTravel1, portfolioTravel1, portfolioTravel1],
    details: {
      location: "Various Nordic Locations",
      date: "Summer 2024",
      project: "Personal Travel Series"
    }
  }
};

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const portfolio = slug ? portfolioDetails[slug as keyof typeof portfolioDetails] : null;

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Portfolio not found</h1>
          <Link to="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/portfolio" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <Link to="/#contact">
              <Button className="bg-gold hover:bg-gold-dark text-white">
                Book Similar Session
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Header Info */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-light mb-4">{portfolio.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {portfolio.description}
          </p>
          
          {/* Details */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {Object.entries(portfolio.details).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <span className="font-medium capitalize">{key}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`${portfolio.title} - Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-subtle rounded-2xl p-12">
          <h2 className="text-2xl font-display font-light mb-4">
            Love this style?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's create something beautiful together. Book your session today and capture your own timeless moments.
          </p>
          <Link to="/#contact">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-white rounded-full px-8">
              Book Your Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;