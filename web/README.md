# Clone of Manchester United Website

## Getting Started

Run the development server:

```bash
pnpm dev
```

## Magnolia React SDK

Example Code: [demos/react-starter](https://gitlab.magnolia-platform.com/demos/react-starter)

The Magnolia Frontend SDK is primarily a rendering integration layer between Magnolia headless content and SPA frameworks like React or Next.js.

- **Template Mapping**: Magnolia content contains template identifiers like `@name`, `@path`, `mgnl:template`. The SDK uses this value to select a React component.
- **EditablePage Component**: React SDK entry point, it recursively render Magnolia content tree by resolving component mappings.
- **EditableArea Component**: Responsible for rendering a Magnolia area while preserving editor capabilities such as component insertion, drag & drop or inline editing.
