import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael",
    role: "Wedding Couple",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    content: "Emilie captured our wedding day with such artistry and grace. Every photo tells our story beautifully, and we couldn't be happier with the memories she created for us.",
    rating: 5
  },
  {
    id: 2,
    name: "Anna Larsen",
    role: "Portrait Session",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The portrait session exceeded all my expectations. Emilie made me feel comfortable and confident, resulting in photos that I absolutely love. Her artistic eye is incredible.",
    rating: 5
  },
  {
    id: 3,
    name: "Lars & Emma",
    role: "Engagement Photos",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "Working with Emilie was an absolute pleasure. She captured our love story in the most romantic and authentic way. The photos are pure magic!",
    rating: 5
  },
  {
    id: 4,
    name: "Creative Agency",
    role: "Corporate Event",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    content: "Emilie photographed our company gala with professionalism and creativity. The images perfectly captured the atmosphere and energy of our event.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-gray">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-charcoal mb-6">
            What Clients 
            <span className="bg-gradient-gold bg-clip-text text-transparent font-medium"> Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The joy and satisfaction of my clients is what drives my passion for photography. Here's what they have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-white border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] animate-scale-in p-8"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-gold" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-charcoal leading-relaxed mb-8 text-lg italic">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-charcoal">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <Card className="bg-white border-0 shadow-card p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">200+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">5.0</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">5</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;