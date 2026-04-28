# Magnolia Introduction

In a typical set up, Magnolia is installed with two web applications: the author instance and the public instance.

- **Author Instance**: The Magnolia authoring instance is used for editing content. Administrators and editors have to login to this instance's Admin Central for configuring Magnolia and for adding or modifying pages.
- **Public Instance**: The Magnolia public instance is accessed by website visitors. It is not accessed by editors directly but administrators are able to login and configure this instance as well.

## 1. Modules

Magnolia has a modular architecture. A module can perform a task, package content, or provide specialized functionality.

### Light Modules

Reference: [docs.magnolia-cms.com](https://docs.magnolia-cms.com/product-docs/modules/light-modules/)

A Magnolia light module is a file and folder-based module. It can define every Magnolia item which can be configured in YAML – such as apps, content types, templates, dialogs, themes, and others. It can also contain a lightweight YAML-based module descriptor and web resources such as css and javascript files.

### Maven Modules

## 2. Key Concepts

- **Workspace**: Magnolia stores content in the magnolia repository. The repository is further divided into workspaces.
- **Namespace**: The namespace indicates a certain domain. Node types that belong to the same domain share the same namespace. The namespace nt is used for node types provided by the JCR implementation, mgnl is the namespace for most of the Magnolia-specific node types.
- **Resources**: Resource files are static Web resources (CSS, JavaScript), definition files for apps, dialogs and templates (YAML), and template scripts (FreeMarker).
- **Content App**: An app is a UI extension point. Because content is at the heart of Magnolia, there is a specific framework subset dedicated to creating apps that manage content; apps created using this framework subset are referred to as content apps.
- **App Descriptor**: An app descriptor describes an app. The descriptor assigns the app a name, icon and implementation class. The name of the app content node must be unique as it is used to refer to the app across the system.
- **Sub-app Descriptor**: A subapp descriptor describes a subapp. A subapp is typically rendered as a tab inside an app. The descriptor defines the classes that read the configuration and implement the subapp.

## 3. Magnolia Built-in Apps

### ✨ Pages App

Reference: [Pages app](https://docs.magnolia-cms.com/product-docs/Apps/List-of-apps/Pages-app/)

The Pages app allows users to build complete web pages.

- In the Pages app, users enter content directly onto the page.
- Content that comes from another Magnolia app can also be rendered.

### ✨ Assets App

Referece: [Assets App](https://docs.magnolia-cms.com/product-docs/apps/list-of-apps/assets-app/)

The Assets app is a container app for asset management subapps such as the Magnolia Assets subapp, Amazon S3 Assets, or Bynder.

- Magnolia Assets subapp is a Magnolia-native solution for simple Digital Asset Management (DAM) scenarios.

### ✨ Categories App

### ✨ Stories App

(Available only in DX Core)
