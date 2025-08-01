import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Image, Download, Heart, Users, Camera } from "lucide-react";
import { scrollToSectionWithPreselect } from "@/utils/scroll";

const services = [
  {
    id: 1,
    name: "Mini Session",
    price: "1,500 DKK",
    duration: "1 Hour",
    images: "15-20 Edited Images",
    delivery: "Digital Gallery",
    popular: false,
    icon: Camera,
    features: [
      "Perfect for couples or small families",
      "1 hour photography session",
      "15-20 professionally edited images",
      "Online gallery for easy sharing",
      "Print release included"
    ]
  },
  {
    id: 2,
    name: "Full Session",
    price: "3,500 DKK",
    duration: "3 Hours",
    images: "60-80 Edited Images",
    delivery: "Digital Gallery + USB",
    popular: true,
    icon: Heart,
    features: [
      "Ideal for weddings and special events",
      "3 hours of comprehensive coverage",
      "60-80 professionally edited images",
      "Premium online gallery",
      "USB drive with all images",
      "Print release and guidance"
    ]
  },
  {
    id: 3,
    name: "Destination Package",
    price: "From 7,500 DKK",
    duration: "Full Day",
    images: "100+ Edited Images",
    delivery: "Complete Package",
    popular: false,
    icon: Users,
    features: [
      "Perfect for destination weddings",
      "Full day photography coverage",
      "100+ professionally edited images",
      "Travel expenses included (Denmark)",
      "Premium gallery and USB delivery",
      "Engagement session included"
    ]
  }
];

const Services = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-charcoal mb-6">
            Services & 
            <span className="bg-gradient-gold bg-clip-text text-transparent font-medium"> Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your special moments. Each session is carefully crafted to capture your unique story.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className={`relative overflow-hidden bg-white border-0 hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] animate-scale-in ${
                service.popular ? 'ring-2 ring-gold shadow-gold' : 'shadow-card'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-gold text-white border-0">
                  Most Popular
                </Badge>
              )}

              <div className="p-8">
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  service.popular ? 'bg-gradient-gold' : 'bg-warm-gray'
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    service.popular ? 'text-white' : 'text-gold'
                  }`} />
                </div>

                {/* Service Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-charcoal mb-2">
                    {service.name}
                  </h3>
                  <div className="text-3xl font-bold text-gold mb-4">
                    {service.price}
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-3 text-gold" />
                    {service.duration}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Image className="w-4 h-4 mr-3 text-gold" />
                    {service.images}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Download className="w-4 h-4 mr-3 text-gold" />
                    {service.delivery}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={() => scrollToSectionWithPreselect('contact', service.name)}
                  className={`w-full font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                    service.popular 
                      ? 'bg-gold hover:bg-gold-dark text-white shadow-gold hover:shadow-xl' 
                      : 'bg-white border-2 border-gold text-gold hover:bg-gold hover:text-white'
                  }`}
                  size="lg"
                >
                  Choose This Package
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <Card className="bg-white border-0 shadow-card p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-charcoal mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every story is unique, and I'm happy to create a custom photography package that perfectly fits your vision and budget. Let's discuss your specific needs and create something beautiful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white rounded-full px-8">
                Download Pricing Guide
              </Button>
              <Button 
                onClick={() => scrollToSectionWithPreselect('contact')}
                className="bg-gold hover:bg-gold-dark text-white rounded-full px-8"
              >
                Request Custom Quote
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;