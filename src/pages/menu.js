import React from 'react'
import Layout from "../components/layout"
import {Link} from "gatsby"


const MenuPage = () => (
    <Layout>
        <div id="menu">
            <h1>Our Menu</h1>
            <Link to="/ramenMenu/"><h2 id="sub1" class="menuSub">Ramen</h2></Link>
            <Link to="/oNigiriMenu/"><h2 id="sub2" class="menuSub">O-Nigiri</h2></Link>
            <Link to="/riceDishMenu/"><h2 id="sub3" class="menuSub">Rice Dishes</h2></Link>
        </div>
    </Layout>
)

export default MenuPage
