import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Ramen1 from "../images/ramen1.jpg"
import Ramen4 from "../images/ramen4.jpg"
import Face1 from "../images/face1.jpeg"
import Face2 from "../images/face2.jpeg"
import Face3 from "../images/face3.jpeg"


const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <div id = "about">
      <h1>About</h1>
      <p>We are a local ramen the makes ramen straight from the heart. All are ingredients are hand picked and naturaly grown in our garden..</p>
      <img src={Ramen4} alt="Bowl of ramen"/>
      <p>We are committed to uniting fresh, locally grown produce with farm-raised and wild-caught seafood to make the freshest dishes you’ll find anywhere. Our signature raw bar offers a variety of Rhode Island oysters, crisp cherrystones, littleneck clams, and jumbo shrimp. Our Matunuck Oysters are grown in Potter Pond right off our waterfront patio and many of our herbs and vegetables are grown in our vegetable farm on the north end of the pond.</p>
      <img src={Ramen1} alt="Bowl of ramen"/>
      <h2>Know more about us</h2>
      <div id="staff">
        <div>
          <img src={Face1} alt="Owner"/>
          <h4>Owner/ Founder</h4>
          <p>Hi, my name is Jane and I am the founder and owner of the ramen place</p>
        </div>
        <div>
          <img src={Face2} alt="Chef"/>
          <h4>Ramen Chef</h4>
          <p>Hi my name Jack and I am the master ramen chef extrodinaire</p>
        </div>
        <div>
          <img src={Face3} alt='Manager'/>
          <h4>Manager</h4>
          <p>Hi, I am Paula and I handle the day to day task in the restaurant.</p>
        </div>
        
        
      </div>
    </div>
  </Layout>
)

export default AboutPage