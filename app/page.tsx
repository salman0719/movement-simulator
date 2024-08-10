import Network from "@/components/common/network";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold mb-8">Movement Simulator</h1>
      <div>
        <Network />
      </div>
    </main>
  );
}
