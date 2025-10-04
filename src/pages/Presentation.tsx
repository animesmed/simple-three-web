import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-space.jpg";

const Presentation = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Space background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        </div>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">NASA Space Apps Challenge 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient glow-effect">Innovating</span> for the
              <br />
              Future of Space
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team is developing cutting-edge solutions to tackle real-world space challenges, 
              combining technology, innovation, and passion for exploration.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/team">
                <Button variant="hero" size="lg" className="gap-2">
                  Meet Our Team <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/simulator">
                <Button variant="accent" size="lg" className="gap-2">
                  Try Simulator <Zap className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-gradient">Mission</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-glow bg-card p-8 rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing boundaries with creative solutions to space exploration challenges.
              </p>
            </div>

            <div className="card-glow bg-card p-8 rounded-xl border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Precision</h3>
              <p className="text-muted-foreground">
                Building accurate simulations and tools for space mission planning.
              </p>
            </div>

            <div className="card-glow bg-card p-8 rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <p className="text-muted-foreground">
                Creating solutions that can make a real difference in space exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The talented individuals driving our mission forward
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Alex Rivera", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
            { name: "Sarah Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
            { name: "Marcus Johnson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
            { name: "Emma Wilson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" },
            { name: "David Park", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
            { name: "Olivia Martinez", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia" },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative mb-3">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm font-medium text-center">{member.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge Description */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur border border-border rounded-2xl p-12 card-glow">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We're tackling one of NASA's most exciting challenges: developing innovative tools and 
            simulations that help visualize and understand complex space phenomena. Our solution 
            combines real-time data processing with interactive visualization to make space 
            exploration more accessible and understandable.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Through our simulator, users can explore various scenarios, test hypotheses, and gain 
            insights into the dynamics of space missions. This tool is designed to be both 
            educational and practical for mission planning.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
