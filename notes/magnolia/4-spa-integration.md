# Magnolia + NextJS

## 1. Delivery API

Reference: [Delivery Endpoint](https://docs.magnolia-cms.com/rest/api/delivery-endpoint/#_properties)

Delivery endpoints are used for obtaining JCR data as JSON.

- `rootPath` (default: `/`): Defines the root JCR path the delivery endpoint uses to resolve incoming node path parameters and to execute queries. Example: with rootPath: /news and a request for /items/2026, the endpoint resolves the node under /news/items/2026 in the configured workspace.
- `personalized`: If set to true, the endpoint returns personalized content based on personalization traits and values defined in the request.

```yaml
# server-cli/light-modules/manutd-lm/restEndpoints/delivery/v1/pages/manutd.yaml
class: info.magnolia.rest.delivery.jcr.v2.JcrDeliveryEndpointDefinition
workspace: website
rootPath: /
depth: 20
limit: 100
referenceDepth: 3
bypassWorkspaceAcls: true
personalized: true
```

### Path Configuring

Reference: [Endpoint Path](https://docs.magnolia-cms.com/rest/api/delivery-endpoint/#_endpoint_path)

The following structure will expose the content of the `/travel/about` page on the `website` workspace at `/.rest/delivery/demo-content/travel/about`

```sh
my-light-module/
└── restEndpoints/
    └── delivery/
        └── demo-content.yaml

$type: jcrDeliveryEndpoint_v2
workspace: website
depth: 2
nodeTypes:
  - mgnl:page
  - mgnl:area
  - mgnl:component
childNodeTypes:
  - mgnl:area
  - mgnl:component
```

Read more: [How to get content as JSON](https://docs.magnolia-cms.com/product-docs/developing/development-how-tos/how-to-get-content-as-json-an-overview/)

### Resolving References

Reference: [Properties for resolving references](https://docs.magnolia-cms.com/rest/api/delivery-endpoint/#_properties_for_resolving_references)

> [!NOTE]
> Note that the `jcrReferenceResolver` only works with uuid, not path. Don't expect it to work with the `JcrNodeToPathConverter` converter class (Magnolia default converter is JcrNodeToIdentifierConverter).

## 2. GraphQL Module

Reference: [GraphQL module](https://docs.magnolia-cms.com/product-docs/modules/list-of-modules/graphql-module)

To disable a GraphQL schema for a content type, use definition decoration, for example:

```yaml
# /<module-name>/decorations/graphql-core/graphqlTypes/<content-type-name>.yaml
enabled=false
```

## 3. SEO & Metadata
