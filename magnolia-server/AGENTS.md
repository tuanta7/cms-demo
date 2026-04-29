# Magnolia CMS

## Development Environment

The Magnolia CLI is used to create and update Light Modules.

```sh
npm run mgnl create-page [options]          # Create a headless or FreeMarker-based page
npm run mgnl create-component [options]     # Create a headless or FreeMarker-based component
npm run mgnl create-virtual-uri [options]   # Create a virtual URI mapping in a light module
npm run mgnl create-content-type [options]  # Create a content type in a light module
npm run mgnl create-app [options]           # Create an app in a light module
npm run mgnl create-light-module [options]  # Create a light module with an empty folder structure
```

To start the server, use this command:

```sh
npm start
```

The `webapp-freemaker` module is intended for FreeMarker-based rendering, while `webapp-headless` is used for headless integration with an external Next.js application. These two modules are used to build a clone of `manutd.com` page.
