const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? '';

export default async function fetchQuery<T>(
  endPoint: string,
  key: string = ''
) {
  const res = await fetch(`${BASE_URL}/api/${endPoint}`, {
    cache: 'no-cache',
  });

  const data = await res.json();

  if (key.trim()) return data[key] as T;

  return data[endPoint] as T;
}
