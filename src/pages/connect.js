import React from 'react'
import Layout from "../components/layout"
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"


const ConnectPage = () => (
    <Layout>
    <div id="connect">
    <h1>Connect</h1>
    <h4><FaMapMarkerAlt style={{color:"red"}}/> 123 Archibald Ave, Rancho Cucamonga, CA 91701</h4>
    <h4><FaPhone style={{color:"red"}}/> 123-456-5679</h4>
    <h4><FaEnvelope style={{color:"red"}}/> feedback@noodleplace.com</h4>
    <h2>Restaurant Hours</h2>
    <h5>Mon-Thu</h5><p>11:00 am - 8:30 pm</p>
    <h5>Fri - Sat</h5><p>11:00 am - 9:00 pm</p>
    <h5>Sun</h5><p>11:00 am - 8:30 pm</p>
    <h2>Place Order</h2>
    <button><a href="https://www.grubhub.com/restaurant/wazakuraken-ramen-7201-archibald-ave-rancho-cucamonga/550274?utm_source=google&utm_medium=organic&utm_campaign=place-action-link" target="blank">Grubhub</a></button> 
    <button><a href="https://www.seamless.com/menu/wazakuraken-ramen-7201-archibald-ave-rancho-cucamonga/550274?utm_source=google&utm_medium=organic&utm_campaign=place-action-link" target="blank">Seamless</a></button> 
    <button>By Phone</button>

    </div>
    
    
    </Layout>
)

export default ConnectPage
