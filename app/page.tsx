import Instructions from "@/components/common/instructions";
import Network from "@/components/common/network";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl mb-8 text-center">Movement Simulator</h1>
      <div>
        <Instructions />
        <Network />
      </div>
    </main>
  );
}
