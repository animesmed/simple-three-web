import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Team Lead & Full Stack Developer",
      description: "Passionate about space tech and building innovative solutions for complex problems.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      name: "Sarah Chen",
      role: "Data Scientist & AI Specialist",
      description: "Expert in machine learning models and data analysis for space mission optimization.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Marcus Johnson",
      role: "UI/UX Designer",
      description: "Creating beautiful and intuitive interfaces that make complex data accessible.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    },
    {
      name: "Emma Wilson",
      role: "Aerospace Engineer",
      description: "Bringing real-world aerospace knowledge to ensure technical accuracy and feasibility.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    {
      name: "David Park",
      role: "Backend Developer",
      description: "Building robust APIs and data pipelines for real-time simulation processing.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
      name: "Olivia Martinez",
      role: "DevOps Engineer",
      description: "Ensuring smooth deployment and scalability of our hackathon solutions.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
          <span className="text-primary font-medium text-sm">Meet the Team</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          The <span className="text-gradient">Minds</span> Behind
          <br />
          Our Mission
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A diverse group of passionate innovators united by our love for space exploration 
          and cutting-edge technology.
        </p>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-6 py-12 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="card-glow bg-card border-border p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <button className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Stats */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto bg-card/50 backdrop-blur border border-border rounded-2xl p-12 card-glow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">6</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">48h</div>
              <div className="text-muted-foreground">Hackathon Duration</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-muted-foreground">Dedication</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">∞</div>
              <div className="text-muted-foreground">Innovation</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
