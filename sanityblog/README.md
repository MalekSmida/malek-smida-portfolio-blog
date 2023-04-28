# Sanity Blogging Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- Check out the example frontend: [React/Next.js](https://github.com/sanity-io/tutorial-sanity-blog-react-next)
- [Read the blog post about this template](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

## Install sanity/cli globally

```bash
yarn global add @sanity/cli
```

## Fix vulnerabilities\*

[https://thomaschaplin.medium.com/how-to-fix-yarn-audit-issues-ff5840f712d1]

```bash
# in package.js change "npm": "your npm version"

npm i --package-lock-only

rm yarn.lock

npm audit fix --force

yarn import

rm package-lock.json

# revert packages json
```
