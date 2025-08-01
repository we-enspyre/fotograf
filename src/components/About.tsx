import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Heart, Star, Award } from "lucide-react";
import emiliePortrait from "@/assets/emilie-portrait.jpg";

const About = () => {
  const achievements = [
    { icon: Award, text: "Wedding Photography Award 2023" },
    { icon: Star, text: "Featured in Photography Magazine" },
    { icon: Heart, text: "200+ Happy Couples" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src={emiliePortrait}
                alt="Emilie Nørgaard - Photographer"
                className="w-full h-[800px] object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold">
                <Camera className="w-12 h-12 text-white" />
              </div>
            </div>
            
            {/* Floating Badge */}
            <Badge className="absolute top-6 left-6 bg-white text-charcoal shadow-card px-4 py-2">
              Aarhus, Denmark
            </Badge>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-charcoal mb-6">
                Meet 
                <span className="bg-gradient-gold bg-clip-text text-transparent font-medium"> Emilie</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 5 years of experience capturing life's most precious moments, I believe every photograph should tell a story that resonates for generations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                My approach blends artistic vision with authentic emotion, creating timeless images that reflect the true essence of who you are. Based in beautiful Aarhus, I'm passionate about crafting visual narratives that celebrate love, joy, and the unique beauty in every moment.
              </p>
            </div>

            {/* My Approach */}
            <Card className="bg-warm-gray border-0 p-6 mb-8">
              <h3 className="text-xl font-semibold text-charcoal mb-4 flex items-center">
                <Heart className="w-5 h-5 text-gold mr-3" />
                My Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in creating a comfortable, natural environment where genuine emotions can unfold. My style is characterized by soft, romantic lighting and timeless compositions that focus on authentic connections and candid moments.
              </p>
            </Card>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Recognition & Experience</h3>
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-card hover:shadow-elegant transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-charcoal font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* Philosophy Quote */}
            <div className="mt-8 p-6 border-l-4 border-gold bg-warm-gray/50 rounded-r-xl">
              <p className="text-lg italic text-charcoal leading-relaxed">
                "Photography is about finding the extraordinary in ordinary moments and preserving them with artistic grace."
              </p>
              <p className="text-gold font-medium mt-2">— Emilie Nørgaard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;