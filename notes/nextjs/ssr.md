# Server-side Rendering (SSR)

## 1. Dynamic Rendering

HTML is generated on every request. Suitable for highly dynamic or user-specific content

- Always fresh data
- Higher latency and server cost

```ts
export default async function Page() {
  const data = await fetch("https://api.example.com/data", {
    cache: "no-store"
  }).then(res => res.json());

  return <div>{data.title}</div>;
}
```

## 2. Static Rendering

### 2.1. Static Site Generation (SSG - default)

HTML is generated at build time. Suitable for content that rarely changes

- Served as static files (CDN-friendly)
- Very fast, but data can become stale

```ts
export default async function Page() {
  const data = await fetch("https://api.example.com/data", {
    cache: "force-cache"
  }).then(res => res.json());

  return <div>{data.title}</div>;
}
```

### 2.2. Incremental Static Regeneration (ISR)

Hybrid approach. Allows updating content without rebuilding the entire app

- Static page is generated at build time
- Then revalidated periodically after deployment

```ts
export default async function Page() {
  const data = await fetch("https://api.example.com/data", {
    next: { revalidate: 60 }
  }).then(res => res.json());

  return <div>{data.title}</div>;
}
```
