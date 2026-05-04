# NextJS Legacy

## 1. Page Router

Read more: [How to migrate from Pages to the App Router](https://nextjs.org/docs/app/guides/migrating/app-router-migration#dynamic-paths-getstaticpaths)

The Pages Router is the original, stable routing system based on individual files, while the App Router is the newer, recommended system built on React Server Components for better performance and scalability

### Server-side Rendering

In the Pages Router, data was injected via special functions like getServerSideProps (SSR) or getStaticProps (ISR)

```ts
export async function getServerSideProps() {
  return { props: { data: "hello" } };
}

export default function Page({ data }) {
  return <div>{data}</div>;
}
```

In the App Router, data is fetched directly inside Server Components

```ts
export default async function Page() {
  const data = await fetch("https://api.example.com/data", {
    cache: "no-store" // equivalent to getServerSideProps
  }).then(res => res.json());

  return <div>{data.title}</div>;
}
```
