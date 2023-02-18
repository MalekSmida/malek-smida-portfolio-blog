# My blog

This example shows how to use [Next.js](https://nextjs.org/) [(v12)](https://nextjs.org/blog/next-12), [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) (ISR), [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3), TypeScript and [Sanity CMS](https://www.sanity.io/) (GROQ query language)

## Preview

Preview live [Wanderer Bolg](https://www.maleksmida.blog/):

[![image](https://res.cloudinary.com/deebb8zh7/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668759856/malek_smida_blog_wjewmq.jpg)](https://www.maleksmida.blog/)

## How to use

1- Download or clone the project\
2- Run `$ npm install` to add the dependencies\
3- Run the project locally `$ npm run dev`\

In order to use Sanity CMS follow this steps:

1- Create project in [Sanity](https://www.sanity.io/)\
2- Create `.env.local` and add this variables\

```bash
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
SANITY_API_TOKEN=
```

3- open sanityblog folder\

```bash
cd sanityblog
```

4- Run `$ npm install` to add the dependencies\
5- Run Sanity dashboard locally `$ sanity start`\

## Available scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `.next` folder.\
It correctly bundles Next in production mode and optimizes the build for the best performance.

### `npm run cypress:open`

It will opens Cypress window so that you can interact directly with tests.\Check [Cypress docs](https://docs.cypress.io/guides/guides/command-line#cypress-open) for more details

### `npm run e2e`

It run e2e tests by Cypress.\
This script could be included in your CI pipeline.\
Check [Cypress docs](https://docs.cypress.io/guides/guides/command-line#cypress-run) for more details

### `npm run lint`

Run ESLint to statically analyse your code

### `npm run format`

Run Prettier to manually format your entire code

## How to deploy

### Next.js App

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Sanity project

Under the folder `\sanityblog` run the command `$ sanity deploy`

# Portfolio

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
