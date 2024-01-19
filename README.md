# Portfolio

[Portfolio](https://lucikritz.github.io/) is a portfolio created by [LuciKritZ](https://github.com/LuciKritZ). Technologies used are as follows:

1. [Next.js 14](https://github.com/vercel/next.js)
2. [Sanity](https://sanity.io/)
3. [Tailwind CSS](https://tailwindcss.com/)
4. [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Local Machine

1. Have both [npm](https://www.npmjs.com/) and [node](https://nodejs.org/en/) installed

2. Run `npm i -g @sanity/cli` to install Sanity globally.

3. Run `npm install` to install dependencies

4. Run `npm run dev:local`

   - This will clear the cache and start dev server of Next.JS.

5. Run `npm run sanity:dev` in a separate terminal
   - This will start the development server of Sanity.

## Typescript

This project is developed completely in TypeScript.

[Crash course](https://www.youtube.com/watch?v=1jMJDbq7ZX4)

## Engines

Consult the `"engines"` section of package.json for the recommended version of **node**, and **npm**.

### What if my node or npm version is not accepted?

- Compatible versions of node and npm are tightly coupled; if one or the other is not compatible, run: `nvm install`.

<!-- TODO -->
<!-- ## Release Notes [In Progress]

See [Deployments](https://github.com/LuciKritZ/lucion/deployments) -->

## Environment Variables in Use Today

The application currently has 6 environment variables:

1. `SANITY_STUDIO_PROJECT_ID`

   - **What it is**: It's the project ID created in your sanity account.
   - **Where it comes from**: [Sanity](https://sanity.io/manage) -> Login -> Manage Projects -> Click on your project -> Search for Project ID.

2. `SANITY_STUDIO_DATASET`

   - **What it is**: Name of the dataset which you create inside your Sanity project.
   - **Where it comes from**: [Sanity](https://sanity.io/manage) -> Login -> Manage -> Manage Projects -> Click on your project -> Datasets -> Name of the Dataset (Example: production/dev).

3. `NEXT_PUBLIC_BASE_URL`

   - **What it is**: Base URL of your deployed project. Example: localhost:3000 when running locally.

## Shout out to

[SonnySangha](https://www.youtube.com/@SonnySangha) for an amazing tutorial on youtube.
