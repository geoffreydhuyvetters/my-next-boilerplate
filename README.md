# my-next-boilerplate

Opinionated starter Next.js project for POC's / experimentation or hacking something together.

including

- [Yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
- [Turborepo](https://turborepo.org/)
- [jotai](https://jotai.org/docs/introduction)
- [react-hook-form](https://react-hook-form.com/api/useform)
- [react-query](https://react-query.tanstack.com/overview)
- [zod](https://github.com/colinhacks/zod)
- [tailwindcss](https://tailwindcss.com/docs)

## scripts

- `dev` runs `dev` script in in all packages/apps
- `build` runs `build` script in all packages/apps
- `start` runs `start` script in all packages/apps (depends on `build`)
- `lint` runs `lint` script in all packages/apps
- `format` formats all supported files with prettier
- `format:check` same as `format` but only checks

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

## remote caching

[https://turborepo.org/docs/getting-started#setup-remote-caching-](https://turborepo.org/docs/getting-started#setup-remote-caching-)

## deployment

[https://vercel.com/docs/concepts/git/monorepos](https://vercel.com/docs/concepts/git/monorepos)
