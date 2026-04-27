# Magnolia Community

Reference: [Magnolia Getting Started](https://docs.magnolia-cms.com/product-docs/getting-started-with-magnolia/)

> Get [SDKMAN!](https://sdkman.io/install/) to install Java and [Magnolia CLI](https://docs.magnolia-cms.com/magnolia-cli/) for further works.

In a typical set up, Magnolia is installed with two web applications: the author instance and the public instance.

- **Author Instance**: The Magnolia authoring instance is used for editing content. Administrators and editors have to login to this instance's Admin Central for configuring Magnolia and for adding or modifying pages.
- **Public Instance**: The Magnolia public instance is accessed by website visitors. It is not accessed by editors directly but administrators are able to login and configure this instance as well.

## 1. Modules

Magnolia has a modular architecture. A module can perform a task, package content, or provide specialized functionality.

### Light Modules

Reference: [docs.magnolia-cms.com](https://docs.magnolia-cms.com/product-docs/modules/light-modules/)

A Magnolia light module is a file and folder-based module. It can define every Magnolia item which can be configured in YAML – such as apps, content types, templates, dialogs, themes, and others. It can also contain a lightweight YAML-based module descriptor and web resources such as css and javascript files.

### Maven Modules

## 2. Components

- **Resources**: Resource files are static Web resources (CSS, JavaScript), definition files for apps, dialogs and templates (YAML), and template scripts (FreeMarker).
- **Content App**: An app is a UI extension point. Because content is at the heart of Magnolia, there is a specific framework subset dedicated to creating apps that manage content; apps created using this framework subset are referred to as content apps.

mgnl create-component quotation -a pages/hello@main -lm hello-magnolia
