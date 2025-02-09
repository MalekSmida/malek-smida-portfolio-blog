# My Portfolio and Blog

This example shows how to use [Next.js](https://nextjs.org/) [(v12)](https://nextjs.org/blog/next-12), [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) (ISR), [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3), TypeScript and [Sanity CMS](https://www.sanity.io/) (GROQ query language)

## Preview

Preview live [Portfolio & Blog](https://maleksmida.vercel.app/):

[![image](https://user-images.githubusercontent.com/58492485/235106988-fc3836ff-1bf2-4bd8-a22c-25d2766b2fcf.png)](https://www.maleksmida.vercel.app/)
[![image](https://user-images.githubusercontent.com/58492485/235107232-6995aed2-213c-423e-bac9-a7be6fca2e6d.png)](https://www.maleksmida.vercel.app/)



## How to use

1- Download or clone the project\
2- Run `$ yarn` to add the dependencies\
3- Run the project locally `$ yarn dev`\

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

4- Run `$ yarn` to add the dependencies\
5- Run Sanity dashboard locally `$ sanity start`\

## Available scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn build`

Builds the app for production to the `.next` folder.\
It correctly bundles Next in production mode and optimizes the build for the best performance.

### `yarn test`

It will run unit and integration tests using Jest and React Testing Library

### `yarn cypress:open`

It will opens Cypress window so that you can interact directly with tests.\Check [Cypress docs](https://docs.cypress.io/guides/guides/command-line#cypress-open) for more details

### `yarn e2e`

It run e2e tests by Cypress.\
This script could be included in your CI pipeline.\
Check [Cypress docs](https://docs.cypress.io/guides/guides/command-line#cypress-run) for more details

### `yarn lint`

Run ESLint to statically analyse your code

### `yarn format`

Run Prettier to manually format your entire code

## How to deploy

### Next.js App

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Sanity project

Under the folder `\sanityblog` run the command `$ sanity deploy`
