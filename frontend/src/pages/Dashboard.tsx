import React, { useEffect, useState } from "react";
import { listRoutes, createRoute, getCB, depositCB } from "../api/routes";
import RouteCard from "../components/RouteCard";

export default function Dashboard() {
  const [routes, setRoutes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [cb, setCb] = useState<any | null>(null);
  const [entityId, setEntityId] = useState("company-1");

  async function load() {
    setLoading(true);
    try {
      const rs = await listRoutes();
      setRoutes(rs);
      try {
        const cbRes = await getCB(entityId);
        setCb(cbRes);
      } catch {
        setCb(null);
      }
    } catch (e) {
      console.error(e);
    } finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = (e.target as HTMLFormElement);
    const formData = new FormData(form);
    await createRoute({
      name: formData.get("name") as string,
      from: formData.get("from") as string,
      to: formData.get("to") as string,
      distanceKm: Number(formData.get("distanceKm")),
    });
    form.reset();
    load();
  };

  const handleDeposit = async (e: React.FormEvent) => {
    e.preventDefault();
    const amount = Number((e.target as any).amount.value);
    await depositCB(entityId, amount);
    load();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">FuelEU — Compliance Dashboard</h1>
      <div className="mb-6 p-4 border rounded">
        <div className="mb-2">Compliance balance for: 
          <input className="ml-2 border px-2 py-1" value={entityId} onChange={e => setEntityId(e.target.value)} />
        </div>
        <div className="mb-2">Balance: {cb ? `${cb.balanceKgCO2e} kgCO2e (updated ${new Date(cb.updatedAt).toLocaleString()})` : "No balance"}</div>
        <form className="flex items-center space-x-2" onSubmit={handleDeposit}>
          <input name="amount" type="number" step="1" placeholder="kg CO2e" className="border px-2 py-1" />
          <button className="px-3 py-1 bg-blue-600 text-white rounded">Deposit</button>
        </form>
      </div>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Create Route</h2>
        <form onSubmit={handleCreate} className="grid grid-cols-4 gap-2">
          <input name="name" placeholder="Route name" className="col-span-1 border p-2" />
          <input name="from" placeholder="From" className="col-span-1 border p-2" />
          <input name="to" placeholder="To" className="col-span-1 border p-2" />
          <input name="distanceKm" placeholder="Distance km" className="col-span-1 border p-2" />
          <div className="col-span-4">
            <button className="mt-2 px-3 py-1 bg-green-600 text-white rounded">Create</button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="font-semibold mb-2">Routes</h2>
        {loading ? <div>Loading...</div> : (
          <div className="grid grid-cols-3 gap-3">
            {routes.map(r => <RouteCard key={r.id} r={r} />)}
          </div>
        )}
      </section>
    </div>
  );
}
