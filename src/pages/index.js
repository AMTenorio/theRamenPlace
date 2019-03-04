import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div id = "index">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Start Your Ramen Right.</h1>
      <h3 style={{textAlign: 'right'}}>-The Ramen Place</h3>
      <div style={{ maxWidth: `930px`, marginBottom: `1.45rem` }}>
        <button ><Link to="/menu/" style={{textDecoration: 'none', color: 'whitesmoke'}}>See Our Menu</Link></button>
        <button><a href="tel:1234567890" style={{textDecoration: 'none', color: 'whitesmoke'}}>Order by Phone</a></button>
        <button ><Link to="/connect/" style={{textDecoration: 'none', color: 'whitesmoke'}}>Place Order</Link></button>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
