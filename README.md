# Thirdweb Bug Reproduce

Minimal Reproduction for the issue: https://github.com/thirdweb-dev/js/issues/5803

## Pages

- [/working](./src/app/working/page.tsx)
  This page works because sepolia chain is passed as `chain` prop.
- [/not-working](./src/app/not-working/page.tsx)
  You can reproduce the issue by using this page.

  How to reproduce:

  - Change connected chain in metamask app to any other chain other than sepolia
  - Connect wallet using metamask (you may need to disable the extension in the browser if you have metamask extension enabled)
  - Scan and connect to the wallet
  - Click switch to Sepolia
  - You will see the error

- [/approved-list](./src/app/approved-list/page.tsx)
  In this page, I replicate the behavior of the approved list in `@walletconnect/ethereum-provider`.

  You will see that the approved list are only:

  - The chain that the user is connected to in the metamask app (or the one they chose when they click connect)
  - The chainId passed as `chain` prop

  The `chains` prop will not be included in the approved list.

![tw-banner](https://github.com/thirdweb-example/next-starter/assets/57885104/20c8ce3b-4e55-4f10-ae03-2fe4743a5ee8)

# thirdweb-next-starter

Starter template to build an onchain react native app with [thirdweb](https://thirdweb.com/) and [next](https://nextjs.org/).

## Installation

Install the template using [thirdweb create](https://portal.thirdweb.com/cli/create)

```bash
  npx thirdweb create app --next
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`CLIENT_ID`

To learn how to create a client ID, refer to the [client documentation](https://portal.thirdweb.com/typescript/v5/client).

## Run locally

Install dependencies

```bash
yarn
```

Start development server

```bash
yarn dev
```

Create a production build

```bash
yarn build
```

Preview the production build

```bash
yarn start
```

## Resources

- [Documentation](https://portal.thirdweb.com/typescript/v5)
- [Templates](https://thirdweb.com/templates)
- [YouTube](https://www.youtube.com/c/thirdweb)
- [Blog](https://blog.thirdweb.com)

## Need help?

For help or feedback, please [visit our support site](https://thirdweb.com/support)
