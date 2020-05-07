# Gatsby Stripe

This project was boostrapped with the [Gatsby hello world starter](https://github.com/gatsbyjs/gatsby-starter-hello-world). It is designed to be a landing page/marketing site with an e-store page. The e-store is set up with Stripe using [Stripe Checkout](https://stripe.com/docs/payments/checkout).

To use this project, create your own Stripe account. Create `.env` files with your public and secret keys from Stripe. For use in development, create a `.env.development` file using your test Stripe keys and a `.env.production` file using your production Stripe keys. In order to reference your variables in the `.env` files in your components, the variable names must have the prefix `GATSBY_`, such as `GATSBY_STRIPE_SECRET_KEY` or `GATSBY_STRIPE_PUBLIC_KEY`.

In your Stripe, make sure you enable "Checkout client-only integration" (Stripe dashboard --> Settings --> Checkout settings). Then create your products (Dashboard --> Products) and you're good to go!

For custom "success" and "cancel" pages for the e-store, update the urls in `store.js`. Update the graphql query in `skus.js` to change what data about each product is brought in.
