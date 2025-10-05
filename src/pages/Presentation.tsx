import annie from "@/assets/imgs/AnnieMelissa.jpeg.jpg";
import bryan from "@/assets/imgs/BryanQuispe.jpg";
import stip from "@/assets/imgs/StipSarmiento.jpg";
import amilcar from "@/assets/imgs/AmilcarEstacio.jpg";

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
              <span className="text-primary font-medium text-sm">NASA SPACE APPS CHALLENGE 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient glow-effect">DESIGN</span> the Future of Life Beyond Earth
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We’re building a platform that empowers anyone — not just astronauts — to design, simulate, 
              and experience their own space habitats.
              Combining real NASA data, sustainability systems, and gamified exploration, we’re reimagining 
              how humanity will live among the stars.
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
              <h3 className="text-xl font-bold mb-3">Why ?</h3>
              <p className="text-muted-foreground">
                Because humanity's future isn't limited to Earth, but space exploration shouldn't be just for elite astronauts. 
              </p>
            </div>

            <div className="card-glow bg-card p-8 rounded-xl border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">How ?</h3>
              <p className="text-muted-foreground">
                We combine real-world NASA data and space sustainability principles with an intuitive, gamified interface.
              </p>
            </div>

            <div className="card-glow bg-card p-8 rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">What ?</h3>
              <p className="text-muted-foreground">
                We designed an interactive platform that allows anyone—not just trained astronauts—to create, 
                manage, and experience their own space habitat.
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Annie Estacio", avatar: annie },
            { name: "Bryan Quispe", avatar: bryan },
            { name: "Stip Sarmiento", avatar: stip },
            { name: "Amilcar Estacio", avatar: amilcar },
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
              We took on this challenge because we believe space exploration should not feel distant or unreachable. 
              Our goal is to make people feel part of it — to help anyone understand how space missions work, 
              what challenges they face, and why they matter. We want curiosity to become connection, and 
              understanding to become inspiration.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Through our project, we bring space closer to everyone. We create an experience where users can explore 
              how a mission is planned, how decisions are made, and how every small action can change the course of 
              discovery. We do this because we believe that learning about space is not just about science — 
              it’s about dreaming bigger, questioning more, and realizing that exploration belongs to all of us.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our application works as an interactive simulator that allows users to manage resources, 
              control mission parameters, and observe how their choices affect the outcome of a space journey. 
              It recreates real situations faced by NASA missions — from energy balance and communication delays 
              to navigation decisions and environmental factors — helping users understand the delicate balance 
              behind every mission. The information and models we used are inspired by official NASA research 
              documents such as <em>“Spacecraft Systems Engineering Overview”</em> and 
              <em> “Human Exploration and Operations Mission Directorate Reports.”</em> 
              This ensures that every scenario in the simulator feels authentic, educational, and true to the spirit 
              of exploration.
            </p>
        </div>
      </section>
      <section className="container mx-auto px-6 py-20">
  <div className="max-w-5xl mx-auto bg-card/50 backdrop-blur border border-border rounded-2xl p-12 card-glow text-center">
    <h2 className="text-3xl font-bold mb-10">Technologies We Used</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-center">
      <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
          alt="Illustrator"
          className="w-20 h-20 mx-auto transition-transform hover:scale-110"
        />
        <p className="mt-3 text-sm font-medium text-muted-foreground">Illustrator</p>
      </a>

      <a href="https://www.autodesk.com/products/autocad" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.icons8.com/ios-filled/100/ffffff/autodesk-autocad.png"
          alt="AutoCAD"
          className="w-20 h-20 mx-auto transition-transform hover:scale-110"
        />
        <p className="mt-3 text-sm font-medium text-muted-foreground">AutoCAD</p>
      </a>

       <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg"
          alt="Unity"
          className="w-20 h-20 mx-auto transition-transform hover:scale-110 invert"
        />
        <p className="mt-3 text-sm font-medium text-muted-foreground">Unity</p>
      </a>

      <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg"
          alt="Blender"
          className="w-20 h-20 mx-auto transition-transform hover:scale-110"
        />
        <p className="mt-3 text-sm font-medium text-muted-foreground">Blender</p>
      </a>

      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
          alt="Visual Studio Code"
          className="w-20 h-20 mx-auto transition-transform hover:scale-110"
        />
        <p className="mt-3 text-sm font-medium text-muted-foreground">VS Code</p>
      </a>

      <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
          alt="Git"
          className="w-20 h-20 mx-auto transition-transform hover:scale-110"
        />
        <p className="mt-3 text-sm font-medium text-muted-foreground">Git</p>
      </a>

      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="HTML"
          className="w-20 h-20 mx-auto transition-transform hover:scale-110"
        />
        <p className="mt-3 text-sm font-medium text-muted-foreground">HTML</p>
      </a>

      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          alt="CSS"
          className="w-20 h-20 mx-auto transition-transform hover:scale-110"
        />
        <p className="mt-3 text-sm font-medium text-muted-foreground">CSS</p>
      </a>

      <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          alt="Node.js"
          className="w-20 h-20 mx-auto transition-transform hover:scale-110"
        />
        <p className="mt-3 text-sm font-medium text-muted-foreground">Node.js</p>
      </a>

      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React"
          className="w-20 h-20 mx-auto transition-transform hover:scale-110"
        />
        <p className="mt-3 text-sm font-medium text-muted-foreground">React</p>
      </a>
    </div>
  </div>
</section>
    </div>
  );
};

export default Presentation;
