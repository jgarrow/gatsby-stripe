import React from "react"
import { graphql, StaticQuery } from "gatsby"

import SkuCard from "./SkuCard"

const containerStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "1rem 0 1rem 0",
}

const Skus = () => {
  return (
    // query the data you want to bring in
    <StaticQuery
      query={graphql`
        query SkusForProduct {
          skus: allStripeSku(sort: { fields: [price] }) {
            edges {
              node {
                id
                currency
                price
                attributes {
                  name
                }
              }
            }
          }
        }
      `}
      render={({ skus }) => (
        <div style={containerStyles}>
          {skus.edges.map(({ node: sku }) => {
            const newSku = {
              sku: sku.id,
              name: sku.attributes.name,
              price: sku.price,
              currency: sku.currency,
            }
            return <SkuCard key={sku.id} sku={newSku} />
          })}
        </div>
      )}
    />
  )
}

export default Skus
