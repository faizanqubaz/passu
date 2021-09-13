import React from 'react';
import './map.css';




const Maps = () => {

    return (
        <>
            <div id='menu' className="map_slider">
                <div className="map_container">

                    {/* <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198866.2506933366!2d74.79654274349062!3d36.3889359642946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e8adfb81741d0b%3A0x49d4202a4eb150c8!2sPassu%20Tourist%20Lodge%20(PTL)!5e1!3m2!1sen!2sus!4v1623308662909!5m2!1sen!2sus"></iframe> */}

                    <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198866.2506933366!2d74.79654274349062!3d36.3889359642946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e8adfb81741d0b%3A0x49d4202a4eb150c8!2sPassu%20Tourist%20Lodge%20(PTL)!5e1!3m2!1sen!2sus!4v1623308662909!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
                    {/* <iframe src="https://www.youtube.com/embed/2C0j8zMlU88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </div>
            </div>
        </>
    )
}

export default Maps;