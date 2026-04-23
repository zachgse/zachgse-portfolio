export async function cachedFetch(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      apiKey:process.env.NEXT_ANON_KEY ?? "",
      Authorization:`Bearer ${process.env.NEXT_ANON_KEY}`,
    },
    next: {
      revalidate: 60, 
    },
  });

  if (!res.ok) throw new Error("Fetch failed");

  return res.json();
}