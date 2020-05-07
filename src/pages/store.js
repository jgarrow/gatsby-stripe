import React from "react"

import Layout from "../components/layout"
import Skus from "../components/estore/products/skus"
import CartOverview from "../components/estore/cartOverview"

import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

export default () => (
  <Layout>
    <h1>Traxxtar Store</h1>

    {/* update the urls for your success and cancel pages */}
    <CartProvider
      stripe={stripePromise}
      successUrl={`${window.location.origin}/page-2/`}
      cancelUrl={`${window.location.origin}/`}
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}
    >
      <CartOverview />
      <Skus />
    </CartProvider>
  </Layout>
)
