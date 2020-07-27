// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  desktop: false,
  currency: {
    id: 'banano',
    name: 'Banano',
    ticker: 'BAN',
    precision: 29,
    maxSupply: 3402823669.2,
    prefixes: ['ban'],
    qrPrefix: 'ban',
    supportsMyNanoNinja: false
  },
};