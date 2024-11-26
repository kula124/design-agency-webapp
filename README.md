# Building Your Application

[**Headless CMS**](https://jamstack.org/headless-cms/)

[**Contentful**](https://www.contentful.com/)

## Contentful: Basic Concepts

If you choose to use Contentful, you will need to create an account and a space. You will also need to create a content model and populate it with data. We suggest you to check the basic concepts of Contentful before you start building your application.

Contentful > [**Concepts**](https://www.contentful.com/developers/docs/concepts/)

In particular, you should check:

Contentful > Concepts > [**API basics**](https://www.contentful.com/developers/docs/concepts/apis/)

Contentful > Concepts > [**Data model**](https://www.contentful.com/developers/docs/concepts/data-model/)

Contentful > Concepts > [**Filter API results**](https://www.contentful.com/developers/docs/concepts/relational-queries/)

## Contentful: GraphQL vs. REST

Contentful provides two APIs: REST and GraphQL. You can choose the one that best fits your needs. We suggest you to check the differences between them before you start building your application.

Contentful > [**GraphQL vs. REST**](https://www.contentful.com/blog/graphql-vs-rest-exploring-how-they-work/)

Contentful > REST API library > [**Content Delivery API - JavaScript SDK**](https://github.com/contentful/contentful.js)

Contentful > GraphQL > [**GraphQL tools for getting started with Contentful**](https://www.contentful.com/blog/graphql-tools-for-getting-started-with-contentful/)

> **IMPORTANT**: To get the feeling of how you can access and query your data using the GraphQL API, you can use GraphiQL app within Contentful dashboard. To do so, you have to install the app first. Go to the Contentful dashboard, click on the "Apps" tab, and search for "GraphiQL". Install the app and start querying your data.

Contentful > Guides > [**How to Integrate Contentful and Next.js**](https://www.contentful.com/blog/integrate-contentful-next-js-app-router/)

## Tailwind TYPOGRAPHY and Contentful Rich Text

Contentful provides a rich text field type that allows you to create and edit rich text content. You can use `rich-text-html-renderer` to render rich text content in your application.

[**`rich-text-html-renderer`**](https://www.npmjs.com/package/@contentful/rich-text-html-renderer)

In order to style rich text content, you can use the Tailwind Typography plugin. It provides a set of utilities for styling rich text content.

Tailwind > [**Typography (`prose`)**](https://tailwindcss.com/docs/plugins#typography)

GitHub > [**tailwind-typography (`prose`)**](https://github.com/tailwindlabs/tailwindcss-typography)