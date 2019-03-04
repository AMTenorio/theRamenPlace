import React from 'react'
import Layout from "../components/layout"
import { FaMapMarkerAlt } from "react-icons/fa"

const LocationPage = () => (
    <Layout>
        <div id="location">
            <h1>Location</h1>
            <iframe title ="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.8973923077424!2d-117.59520638478311!3d34.12337648058666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c33660fadb3f8f%3A0x83c01efecf2d3428!2sWazakuraken+Ramen!5e0!3m2!1sen!2sus!4v1551559635768" style={{width:'60vw', height:'40vh', frameborder:'0', border:'0'}} allowfullscreen></iframe>
            <p><FaMapMarkerAlt style={{color:"red"}}/> 123 Archibald Ave , Rancho Cucamonga, CA 91701</p>
            <button><a href="https://goo.gl/maps/eyHex2aCZEy" target="blank">Get Direction</a></button>
        </div>
    </Layout>
)

export default LocationPage