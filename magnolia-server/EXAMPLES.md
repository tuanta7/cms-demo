# Magnolia Introduction

## 1. Create a Page

### Create a Light Module

| Concept      | Folder                | Purpose                                              |
| ------------ | --------------------- | ---------------------------------------------------- |
| Page         | templates/pages/      | Full-page layout template                            |
| Component    | templates/components/ | Reusable content block inside a page area            |
| App          | apps/                 | Backend admin UI in the App Launcher                 |
| Content Type | contentTypes/         | Schema/structure for custom content entities         |
| Virtual URI  | virtualUriMappings/   | URL redirects/forwards independent of site hierarchy |

A light module is simply a directory on the file system that contains YAML definition files, FreeMarker template scripts, and other resource files of any type.

```sh
mgnl create-light-module [options]  # create a light module with an empty folder structure
```

A page is a full-page template, which is the top-level rendering unit in Magnolia. It defines the overall layout of a web page. Each page template consists of two files:

- **myPage.yaml**: The definition file (sets render type, dialog, areas, etc.)
- **myPage.ftl**: The FreeMarker template script that outputs the HTML. This file is not required for headless mode.

A component is a reusable content block that lives inside a page's areas (e.g. a text block, image gallery, card). A component template typically contains standard code with commonly used properties and is generally a good starting point to build on.

When using headless mode, Magnolia acts purely as a content repository and API server. A separate frontend (React, Next.js, Vue, etc.) fetches content via REST or GraphQL and handles all rendering.

```sh
mgnl create-page [options]          # create a headless or freemarker-based page
mgnl create-component [options]     # create a headless or freemarker-based component
```

An app is a backend admin UI tool that appears in the Magnolia App Launcher.

- a
- b

A content type defines the structure/schema of a custom content entity (like a Product, Event, or Article). A content type establishes a new content type template for structured and consistent content entry across various apps and pages.

It is common to pair a content type with an app.

```sh
mgnl create-app [options]           # create an app in a light module
mgnl create-content-type [options]  # create a content type in a light module
```

```sh
mgnl create-virtual-uri [options]   # create a virtual URI mapping in a light module
```

## 2. Headless Preview (Next.js)

## 3. SSO for User

## 4. Database
