const BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000/api";

/**
 * Generic get JSON helper
 */
export async function getJSON<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { credentials: "same-origin" });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `GET ${path} failed with ${res.status}`);
  }
  return res.json() as Promise<T>;
}

/**
 * Generic POST JSON helper
 */
export async function postJSON<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "same-origin"
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `POST ${path} failed with ${res.status}`);
  }
  return res.json() as Promise<T>;
}
