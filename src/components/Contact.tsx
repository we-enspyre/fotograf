import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MapPin, Phone, Mail, Instagram, Facebook, CalendarIcon, Send } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    // Check for preselected session type
    const preselected = sessionStorage.getItem('preselectedSessionType');
    if (preselected) {
      setFormData(prev => ({ ...prev, sessionType: preselected }));
      sessionStorage.removeItem('preselectedSessionType');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { ...formData, date });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-charcoal mb-6">
            Let's Create 
            <span className="bg-gradient-gold bg-clip-text text-transparent font-medium"> Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to capture your special moments? I'd love to hear about your vision and discuss how we can bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <Card className="bg-warm-gray border-0 shadow-card p-8">
              <h3 className="text-2xl font-semibold text-charcoal mb-6">
                Book Your Session
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-white border-0 focus:ring-2 focus:ring-gold"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-white border-0 focus:ring-2 focus:ring-gold"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-white border-0 focus:ring-2 focus:ring-gold"
                      placeholder="+45 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Session Type *
                    </label>
                    <Select onValueChange={(value) => handleInputChange("sessionType", value)} value={formData.sessionType}>
                      <SelectTrigger className="bg-white border-0 focus:ring-2 focus:ring-gold">
                        <SelectValue placeholder="Select session type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mini Session">Mini Session</SelectItem>
                        <SelectItem value="Full Session">Full Session</SelectItem>
                        <SelectItem value="Destination Package">Destination Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Preferred Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white border-0 focus:ring-2 focus:ring-gold",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Tell me about your vision *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-white border-0 focus:ring-2 focus:ring-gold min-h-32"
                    placeholder="Share details about your event, style preferences, location, or any special requests..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-white shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] font-medium py-3"
                  size="lg"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="bg-white border-0 shadow-card p-8">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">Location</h4>
                      <p className="text-muted-foreground">Aarhus, Denmark</p>
                      <p className="text-sm text-muted-foreground">Available for travel throughout Denmark and Europe</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">Email</h4>
                      <p className="text-muted-foreground">hello@norgaardvisuals.com</p>
                      <p className="text-sm text-muted-foreground">I'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">Phone</h4>
                      <p className="text-muted-foreground">+45 12 34 56 78</p>
                      <p className="text-sm text-muted-foreground">Available Mon-Fri, 9AM-6PM</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="bg-gradient-gold border-0 shadow-gold p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">
                  Follow My Work
                </h3>
                <p className="mb-6 text-white/90">
                  Stay updated with my latest work and behind-the-scenes moments on social media.
                </p>
                
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-gold backdrop-blur-sm transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-gold backdrop-blur-sm transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Button>
                </div>
              </Card>

              {/* Response Time */}
              <div className="bg-warm-gray rounded-2xl p-6">
                <h4 className="font-semibold text-charcoal mb-3">Quick Response Guaranteed</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I understand how exciting it is to plan your special day! I typically respond to all inquiries within 24 hours, often much sooner. For urgent requests, feel free to call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;