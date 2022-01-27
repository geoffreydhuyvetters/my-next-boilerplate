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

## remote caching

[https://turborepo.org/docs/getting-started#setup-remote-caching-](https://turborepo.org/docs/getting-started#setup-remote-caching-)

## deployment

[https://vercel.com/docs/concepts/git/monorepos](https://vercel.com/docs/concepts/git/monorepos)
