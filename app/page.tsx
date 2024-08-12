import Controls from "@/components/simulator/controls";
import Network from "@/components/simulator/network";
import SimulatorProvider from "@/utilities/simulatorProvider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="mb-8 text-4xl text-center">Movement Simulator</h1>
      <SimulatorProvider>
        <div>
          <Controls />
          <Network />
        </div>
      </SimulatorProvider>
    </main>
  );
}
