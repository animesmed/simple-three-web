import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, RotateCcw, Settings } from "lucide-react";
import { toast } from "sonner";

const Simulator = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [velocity, setVelocity] = useState([50]);
  const [altitude, setAltitude] = useState([30]);
  const [trajectory, setTrajectory] = useState([45]);

  const handleStart = () => {
    setIsRunning(!isRunning);
    toast(isRunning ? "Simulation paused" : "Simulation started", {
      description: isRunning ? "All systems on hold" : "Running calculations...",
    });
  };

  const handleReset = () => {
    setVelocity([50]);
    setAltitude([30]);
    setTrajectory([45]);
    setIsRunning(false);
    toast("Simulation reset", {
      description: "All parameters restored to default values",
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
          <span className="text-primary font-medium text-sm">Interactive Tool</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Space Mission <span className="text-gradient">Simulator</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore orbital mechanics and mission planning with our interactive simulation tool.
          Adjust parameters in real-time and visualize the results.
        </p>
      </section>

      {/* Simulator Interface */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Control Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="card-glow bg-card border-border p-6">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Control Panel</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium">Velocity</label>
                    <Badge variant="secondary">{velocity[0]} km/s</Badge>
                  </div>
                  <Slider
                    value={velocity}
                    onValueChange={setVelocity}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium">Altitude</label>
                    <Badge variant="secondary">{altitude[0]} km</Badge>
                  </div>
                  <Slider
                    value={altitude}
                    onValueChange={setAltitude}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium">Trajectory Angle</label>
                    <Badge variant="secondary">{trajectory[0]}°</Badge>
                  </div>
                  <Slider
                    value={trajectory}
                    onValueChange={setTrajectory}
                    max={90}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <Button 
                  variant={isRunning ? "secondary" : "hero"} 
                  className="flex-1 gap-2"
                  onClick={handleStart}
                >
                  {isRunning ? (
                    <>
                      <Pause className="w-4 h-4" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" /> Start
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleReset}
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* Mission Stats */}
            <Card className="card-glow bg-card border-border p-6">
              <h3 className="text-lg font-bold mb-4">Mission Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Status</span>
                  <Badge variant={isRunning ? "default" : "secondary"}>
                    {isRunning ? "Active" : "Standby"}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Orbit Type</span>
                  <span className="text-sm font-medium">LEO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Duration</span>
                  <span className="text-sm font-medium">00:00:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Fuel Usage</span>
                  <span className="text-sm font-medium">0%</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Visualization Area */}
          <Card className="lg:col-span-2 card-glow bg-card border-border p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Orbital Visualization</h2>
              <Badge variant="outline">Real-time</Badge>
            </div>
            
            <div className="aspect-video bg-background/50 rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for visualization - can be replaced with actual 3D rendering */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              
              {/* Simulated Earth */}
              <div className="relative z-10">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="absolute inset-0 rounded-full animate-pulse opacity-50 bg-blue-400/20" />
                </div>
                
                {/* Orbit path */}
                {isRunning && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-80 h-80 border-2 border-primary/30 border-dashed rounded-full animate-spin" style={{ animationDuration: "10s" }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50" />
                    </div>
                  </div>
                )}
              </div>
              
              {!isRunning && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                  <p className="text-muted-foreground">Press Start to begin simulation</p>
                </div>
              )}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-background/50 p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-gradient">
                  {(velocity[0] * 1.5).toFixed(1)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">Current Velocity (km/s)</div>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-gradient">
                  {(altitude[0] * 10).toFixed(0)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">Altitude (km)</div>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-gradient">
                  {trajectory[0]}°
                </div>
                <div className="text-xs text-muted-foreground mt-1">Trajectory Angle</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-6 pb-20">
        <Card className="max-w-4xl mx-auto card-glow bg-card/50 backdrop-blur border-border p-8">
          <h2 className="text-2xl font-bold mb-4">About This Simulator</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our interactive simulator allows you to explore the fundamentals of orbital mechanics 
            and space mission planning. Adjust velocity, altitude, and trajectory parameters to see 
            how they affect orbital paths in real-time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This tool is designed to be both educational and practical, providing insights into the 
            complex calculations that go into every space mission. Whether you're planning a satellite 
            deployment or studying orbital dynamics, this simulator offers a hands-on way to learn.
          </p>
        </Card>
      </section>
    </div>
  );
};

export default Simulator;
