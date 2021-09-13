import React, { useState } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faBars, faHockeyPuck, faAppleAlt, faAmbulance, faBaby, faAddressCard, faAngry } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faInstagram, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {

  const [foo, setFoo] = useState([
    {
      name: "Home"
    },
    {
      name: "About"
    },
    {
      name: "Gallery"
    },
    {
      name: "About"
    },
    {
      name: "About"
    },

  ])
  return (
    <>
      <div id='home' className="footer_slider">
        <div className="footer_container">
          <div className="foo_head">
            <div className="footer_head">
              <i className="navbar_head_icon"><FontAwesomeIcon icon={faCertificate} color="white" /></i>
              <h2 className="navbar_head_heading">PASSU<br /> <span className="navbar_head_span">Tourist Lodge</span></h2>

            </div>
          </div>

          <div className="footer_content_flex">
            {
              foo.map((f) => (
                <h3 className="footer_content_list">{f.name}</h3>
              ))
            }

          </div>

          <div className="footer_icon_flex">
<a href='https://www.twitor.com'>
<i style={{cursor:'pointer'}}><FontAwesomeIcon className="footer_icons" icon={faTwitter} size='1.6x' /></i>
</a>
<a href='https://www.youtube.com'>
<i style={{cursor:'pointer'}}><FontAwesomeIcon className="footer_icons" icon={faYoutube} color='red' /></i>
  </a>
  <a href='https://www.facebook.com'>
  <i style={{cursor:'pointer'}}><FontAwesomeIcon className="footer_icons" icon={faFacebook} color='blue' /></i>
  </a>
  <a href='https://www.snapchat.com'>
  <i style={{cursor:'pointer'}}><FontAwesomeIcon className="footer_icons" icon={faSnapchat} color='yellow' /></i>
  </a>
  <a href='https://www.instagram.com'>
  <i style={{cursor:'pointer'}}><FontAwesomeIcon className="footer_icons" icon={faInstagram} color="orange" /></i>
  </a>
           

           
        
          </div>
          <div className="footer_last">
            <p>2021 Peak. Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;