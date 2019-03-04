import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaTwitter, FaYelp } from "react-icons/fa"



const Header = ({ siteTitle }) => (
  <header
    style={{
     
    }}
  >
   
    <div id = "navbar">
      <h3 style={{ margin: 0, marginBottom: 20 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link> 
      </h3>
      <div id = "navLink">
      <h5><Link to="/about/">About</Link></h5>
      <h5><Link to="/menu/" >Menu</Link></h5>
      <h5><Link to="/connect/" >Connect</Link></h5>
      <h5><Link to="/location/" >Location</Link></h5>
      </div>
      <div id = "socialLink">
        <h2><a href = "https://twitter.com/?lang=en" target = "blank" style = {{color: 'white'}}><FaTwitter /></a></h2>
        <h2 ><a href = "https://www.yelp.com/" target = "blank" style = {{color: 'white'}}><FaYelp /></a></h2>
      </div>
    </div>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
