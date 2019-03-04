import React from 'react'
import Layout from "../components/layout"
import {Link} from "gatsby"


const MenuPage = () => (
    <Layout>
        <div id="menu">
            <h1>Our Menu</h1>
            <Link to="/ramenMenu/"><h2 id="menuSub">Ramen</h2></Link>
            <h2 id="menuSub">O-Nigri</h2>
            <h2 id="menuSub">Rice Dishes</h2>
        </div>
    </Layout>
)

export default MenuPage
