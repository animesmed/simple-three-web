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
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Retro background effect */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15),rgba(0,0,0,0.15)_1px,transparent_1px,transparent_2px)] pointer-events-none" />
      
      {/* Main Game Window */}
      <div className="relative max-w-6xl w-full">
        {/* CRT Monitor Frame */}
        <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 p-8 rounded-3xl shadow-2xl border-8 border-gray-900 relative">
          {/* Screen bezel */}
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]" />
          
          {/* Inner Screen */}
          <div className="relative bg-black/90 border-4 border-gray-600 rounded-lg overflow-hidden shadow-[inset_0_0_30px_rgba(0,255,0,0.1)]">
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.03)_2px,rgba(0,255,0,0.03)_4px)] pointer-events-none z-20" />
            
            {/* Screen glow */}
            <div className="absolute inset-0 bg-gradient-radial from-green-500/5 via-transparent to-transparent pointer-events-none z-10" />
            
            {/* Main Content */}
            <div className="relative z-0 p-8 min-h-[600px]">
              {/* Title Bar */}
              <div className="mb-8 text-center border-b-4 border-green-500/30 pb-4">
                <div className="font-mono text-green-400 text-3xl md:text-4xl font-bold tracking-wider mb-2 animate-pulse drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                  ╔═══════════════════════════╗
                </div>
                <h1 className="font-mono text-green-400 text-2xl md:text-3xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                  SPACE MISSION SIMULATOR
                </h1>
                <div className="font-mono text-green-400 text-3xl md:text-4xl font-bold tracking-wider mt-2 animate-pulse drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                  ╚═══════════════════════════╝
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Panel - Controls */}
                <div className="space-y-6">
                  {/* Control Panel */}
                  <div className="bg-gray-900/50 border-4 border-green-500/40 rounded p-4">
                    <div className="font-mono text-green-400 text-lg font-bold mb-4 tracking-wider drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                      [CONTROL PANEL]
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="font-mono text-green-400 text-sm tracking-wide">VELOCITY:</label>
                          <span className="font-mono text-yellow-400 text-sm bg-black/50 px-3 py-1 border border-yellow-400/50">
                            {velocity[0]} KM/S
                          </span>
                        </div>
                        <Slider
                          value={velocity}
                          onValueChange={setVelocity}
                          max={100}
                          step={1}
                          className="[&_.relative]:h-3 [&_.relative]:bg-gray-800 [&_.relative]:border-2 [&_.relative]:border-green-500/50 [&_[role=slider]]:bg-green-500 [&_[role=slider]]:border-2 [&_[role=slider]]:border-green-300 [&_[role=slider]]:h-6 [&_[role=slider]]:w-6"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="font-mono text-green-400 text-sm tracking-wide">ALTITUDE:</label>
                          <span className="font-mono text-yellow-400 text-sm bg-black/50 px-3 py-1 border border-yellow-400/50">
                            {altitude[0]} KM
                          </span>
                        </div>
                        <Slider
                          value={altitude}
                          onValueChange={setAltitude}
                          max={100}
                          step={1}
                          className="[&_.relative]:h-3 [&_.relative]:bg-gray-800 [&_.relative]:border-2 [&_.relative]:border-green-500/50 [&_[role=slider]]:bg-green-500 [&_[role=slider]]:border-2 [&_[role=slider]]:border-green-300 [&_[role=slider]]:h-6 [&_[role=slider]]:w-6"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="font-mono text-green-400 text-sm tracking-wide">TRAJECTORY:</label>
                          <span className="font-mono text-yellow-400 text-sm bg-black/50 px-3 py-1 border border-yellow-400/50">
                            {trajectory[0]}°
                          </span>
                        </div>
                        <Slider
                          value={trajectory}
                          onValueChange={setTrajectory}
                          max={90}
                          step={1}
                          className="[&_.relative]:h-3 [&_.relative]:bg-gray-800 [&_.relative]:border-2 [&_.relative]:border-green-500/50 [&_[role=slider]]:bg-green-500 [&_[role=slider]]:border-2 [&_[role=slider]]:border-green-300 [&_[role=slider]]:h-6 [&_[role=slider]]:w-6"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <button 
                        className={`font-mono text-sm font-bold py-3 px-4 border-4 transition-all ${
                          isRunning 
                            ? 'bg-yellow-600 border-yellow-400 text-black hover:bg-yellow-500' 
                            : 'bg-green-600 border-green-400 text-black hover:bg-green-500'
                        } shadow-[0_0_10px_rgba(34,197,94,0.5)] hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] active:translate-y-1`}
                        onClick={handleStart}
                      >
                        {isRunning ? '║ PAUSE' : '▶ START'}
                      </button>
                      <button 
                        className="font-mono text-sm font-bold py-3 px-4 border-4 bg-red-600 border-red-400 text-black hover:bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] hover:shadow-[0_0_20px_rgba(239,68,68,0.8)] active:translate-y-1 transition-all"
                        onClick={handleReset}
                      >
                        ↻ RESET
                      </button>
                    </div>
                  </div>

                  {/* Mission Stats */}
                  <div className="bg-gray-900/50 border-4 border-green-500/40 rounded p-4">
                    <div className="font-mono text-green-400 text-lg font-bold mb-4 tracking-wider drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                      [MISSION STATS]
                    </div>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="flex justify-between text-green-400">
                        <span>STATUS:</span>
                        <span className={isRunning ? 'text-green-300 animate-pulse' : 'text-yellow-400'}>
                          {isRunning ? '● ACTIVE' : '○ STANDBY'}
                        </span>
                      </div>
                      <div className="flex justify-between text-green-400">
                        <span>ORBIT TYPE:</span>
                        <span className="text-cyan-400">LEO</span>
                      </div>
                      <div className="flex justify-between text-green-400">
                        <span>DURATION:</span>
                        <span className="text-cyan-400">00:00:00</span>
                      </div>
                      <div className="flex justify-between text-green-400">
                        <span>FUEL:</span>
                        <span className="text-cyan-400">100%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Visualization */}
                <div className="space-y-4">
                  <div className="bg-gray-900/50 border-4 border-green-500/40 rounded p-4">
                    <div className="font-mono text-green-400 text-lg font-bold mb-4 tracking-wider drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                      [ORBITAL VIEW]
                    </div>
                    
                    <div className="aspect-square bg-black border-4 border-gray-800 rounded flex items-center justify-center relative overflow-hidden">
                      {/* Grid background */}
                      <div className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `
                            linear-gradient(0deg, transparent 24%, rgba(34, 197, 94, .3) 25%, rgba(34, 197, 94, .3) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, .3) 75%, rgba(34, 197, 94, .3) 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, rgba(34, 197, 94, .3) 25%, rgba(34, 197, 94, .3) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, .3) 75%, rgba(34, 197, 94, .3) 76%, transparent 77%, transparent)
                          `,
                          backgroundSize: '50px 50px'
                        }}
                      />
                      
                      {/* Earth */}
                      <div className="relative z-10">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(34,197,94,0.5)] relative border-2 border-green-400/50">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                        </div>
                        
                        {/* Orbit path */}
                        {isRunning && (
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-48 h-48 md:w-64 md:h-64 border-2 border-green-400/50 border-dashed rounded-full animate-spin" style={{ animationDuration: "8s" }}>
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)] animate-pulse" />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {!isRunning && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                          <p className="font-mono text-green-400 text-sm animate-pulse">
                            ▶ PRESS START
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Data readout */}
                  <div className="bg-gray-900/50 border-4 border-green-500/40 rounded p-4">
                    <div className="font-mono text-green-400 text-lg font-bold mb-3 tracking-wider drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                      [TELEMETRY]
                    </div>
                    <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                      <div className="bg-black/50 p-2 border border-green-500/30 text-center">
                        <div className="text-yellow-400 font-bold text-lg">{(velocity[0] * 1.5).toFixed(1)}</div>
                        <div className="text-green-400 text-[10px]">VEL</div>
                      </div>
                      <div className="bg-black/50 p-2 border border-green-500/30 text-center">
                        <div className="text-yellow-400 font-bold text-lg">{(altitude[0] * 10).toFixed(0)}</div>
                        <div className="text-green-400 text-[10px]">ALT</div>
                      </div>
                      <div className="bg-black/50 p-2 border border-green-500/30 text-center">
                        <div className="text-yellow-400 font-bold text-lg">{trajectory[0]}°</div>
                        <div className="text-green-400 text-[10px]">ANG</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom info */}
              <div className="mt-6 text-center">
                <p className="font-mono text-green-400/60 text-xs tracking-wider">
                  NASA HACKATHON 2025 • MISSION CONTROL SYSTEM v1.0
                </p>
              </div>
            </div>
          </div>
          
          {/* Power LED */}
          <div className="absolute bottom-4 right-8 flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isRunning ? 'bg-green-400 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-gray-600'}`} />
            <span className="font-mono text-gray-400 text-xs">PWR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
