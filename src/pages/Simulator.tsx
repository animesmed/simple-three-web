import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw } from "lucide-react";
import { useState } from "react";

const Simulator = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const handleRun = () => {
    setIsRunning(true);
  };

  const handleReload = () => {
    setReloadKey((prev) => prev + 1);
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background/80 backdrop-blur">
      <section className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gradient mb-4">Mission Simulator</h1>
          <p className="text-sm italic text-muted-foreground mb-6">
          Prototype preview — camera navigation only (work in progress)
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience a prototype of our interactive space habitat simulator built with Unity.
            Control the environment, observe system dynamics, and test the balance of survival beyond Earth.
          </p>
        </div>

        {/* Simulator Card */}
        <Card className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-lg card-glow shadow-lg">
          {/* Controls */}
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h2 className="text-2xl font-semibold">Simulation Controls</h2>
            <div className="flex gap-3">
              <Button
                onClick={handleRun}
                variant="accent"
                className="gap-2"
                disabled={isRunning}
              >
                <Play className="w-4 h-4" /> Run
              </Button>

              <Button
                onClick={handleReload}
                variant="outline"
                className="gap-2 border-border hover:border-primary/50"
              >
                <RotateCcw className="w-4 h-4" /> Reload
              </Button>
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-6 p-4 rounded-xl bg-background/60 border border-border backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2">Controls</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Teclas:</p>
                <ul className="list-disc list-inside">
                  <li><kbd>A</kbd>, <kbd>W</kbd>, <kbd>S</kbd>, <kbd>D</kbd> → Desplazamiento lineal</li>
                  <li><kbd>Q</kbd> → Giro izquierda</li>
                  <li><kbd>E</kbd> → Giro derecha</li>
                  <li><kbd>R</kbd> → Zoom in</li>
                  <li><kbd>F</kbd> → Zoom out</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground">Mouse:</p>
                <ul className="list-disc list-inside">
                  <li>Click → Desplazamiento lineal</li>
                  <li>Anticlick → Sostener para giro</li>
                  <li>Rueda → Zoom in / out</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Unity Frame */}
          <div className="relative rounded-xl overflow-hidden border border-border shadow-inner bg-black h-[600px] flex items-center justify-center">
            {isRunning ? (
              <iframe
                key={reloadKey}
                src={`/Unity/index.html?version=${reloadKey}`}
                title="Unity Simulator"
                className="w-full h-full border-none rounded-xl"
              ></iframe>
            ) : (
              <div className="text-muted-foreground text-center px-6">
                <p className="text-lg">Press <span className="text-primary font-semibold">Run</span> to start the simulation 🚀</p>
              </div>
            )}
            {isRunning && (
              <div className="absolute top-3 right-3 bg-background/70 backdrop-blur px-3 py-1 rounded-full text-xs text-muted-foreground">
              Prototype — Visual Demo Only
              </div>

            )}
          </div>
        </Card>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center text-muted-foreground leading-relaxed">
          <p>
            This simulator is a <span className="text-primary font-medium">Unity WebGL</span> build, integrated into our
            <span className="text-accent font-medium"> React </span> interface.  
            It demonstrates a functional bridge between game engines and web-based visualization, 
            allowing future modules to connect NASA datasets, user decisions, and AI-driven scenarios.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Simulator;