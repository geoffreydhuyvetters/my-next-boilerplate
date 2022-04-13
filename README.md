# my-next-boilerplate

Opinionated starter Next.js project for POC's / experimentation or hacking something together.

including

- [Yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
- [Turborepo](https://turborepo.org/)
- [jotai](https://jotai.org/docs/introduction)
- [react-hook-form](https://react-hook-form.com/api/useform)
- [react-query](https://react-query.tanstack.com/overview)
- [zod](https://github.com/colinhacks/zod)
- [stitches](https://stitches.dev)
- [storybook](https://storybook.js.org/)

## monorepo structure

- `/apps` folder contains all the apps
  - contains a basic `/web` app to start with
  - contains a `/design-system` which is basically a storybook setup for your ui components
- `/packages` folder contains shared packages
  - contains a basic `/ui` library being worked on. Using [stitches](https://stitches.dev).

## yarn/npm scripts

- `dev` runs `dev` script in in all packages/apps
- `build` runs `build` script in all packages/apps
- `start` runs `start` script in all packages/apps (depends on `build`)
- `lint` runs `lint` script in all packages/apps
- `format` formats all supported files with prettier
- `format:check` same as `format` but only checks for code style, no changes

## bash alias setup

```

alias np="new_project"

function new_project {
  mkdir "$1"
  cd "$1"

  git clone git@github.com:geoffreydhuyvetters/my-next-boilerplate.git .

  rm -rf .git

  git init
  git add -A
  git commit -m 'initial commit'

  yarn # or npm i

  code . # or other editor
  open http://localhost:3000

  yarn dev # or npm run dev
}

```

use like this `np my-new-project`

## packageManager

When you're not using Yarn 1, you can change the "packageManager" key in `package.json` by running

`npx @turbo/codemod add-package-manager`

## remote caching

[https://turborepo.org/docs/getting-started#setup-remote-caching-](https://turborepo.org/docs/getting-started#setup-remote-caching-)

## deployment

[https://vercel.com/docs/concepts/git/monorepos](https://vercel.com/docs/concepts/git/monorepos)
