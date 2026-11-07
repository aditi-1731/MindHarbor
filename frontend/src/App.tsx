import { useEffect, useState } from "react";
import { api } from "./services/api";

type Health = { status: string; app: string; database: string };

export default function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<Health>("/health")
      .then((res) => setHealth(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main className="min-h-screen bg-[#F7F6F0] flex items-center justify-center">
      <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
        <h1 className="text-2xl font-semibold text-[#243A32]">MindHarbor</h1>
        {health && (
          <p className="mt-2 text-[#779786]">
            Backend: {health.status} · Database: {health.database}
          </p>
        )}
        {error && <p className="mt-2 text-red-600">Connection failed: {error}</p>}
        {!health && !error && <p className="mt-2 text-gray-500">Connecting…</p>}
      </div>
    </main>
  );
}