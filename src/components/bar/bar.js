import React, { useEffect, useState } from 'react';
import './bar.css';
import Image from '../../images/ptls.jpeg'




const Bar = () => {

const [show,setShow]=useState(true)
    const [iamge, setImage] = useState([
        {

            head: "Single Room",
            para: `This is the ultimate a piece of room...`
        },
        {

            head: "Double Room",
            para: "This is the ultimate a piece of room. ..."
        },
        {

            head: "Three Bedded Room",
            para: "This is the ultimate a piece of room. .."
        },
        {

            head: "Four Bedded Room",
            para: "This is the ultimate a piece of room...."
        },
        {

            head: "Room name",
            para: "This is the ultimate a piece of room. ..."
        },
        {

            head: "Room name",
            para: "This is the ultimate a piece of room. ..."
        },
    ])

    const hideSomething=()=>{
        setShow(false)
    }

    useEffect(()=>{
        const timer=setTimeout(() => {
            setShow(true)
        }, 2000);
    })
    return (
        <>
            <div id='about' className="bar_slider">
                <div className="bar_container">
                    <img className="bar_slider_iamge" src={Image}></img>
                    <div className="bar_slider_head">
                        <h2 onClick={hideSomething} className="bar_slider_heading">Welcome to Passu</h2>
                        {
                            show ? <p className="bar_slider_para">Passu is a family-owned hotel that desires to cater and provide guests with personalized  <br />hospitality based on what they prefer.

                            While we aim to give you an authentic experience <br /> whenever you stay with us, we also guarantee consistent high standards of customer <br /> service at Roof. Contemporary amenities and timeless elegance are reflected throughout every <br /> guest room at  our luxury hotel. We hope to make your stay unforgettable in the best way.</p>
                            : null
                        }
                    </div>
                </div>
                <div className="bar_gallery_container">
                    <div className="bar_gallery_head">
                        <h2 className="bar_gallery_heading">Showcase Your Product, Service or Event</h2>
                        <p className="bar_gallery_para">Insert some tasty images of what your are trying to promote here</p>
                    </div>
                    <div className="bar_gallery_images">
                        {
                            iamge.map((img) => (
                                <div className="gallery_image">
                                    <img className="gallery_images" src={Image}></img>
                                    <h3>{img.head}</h3>
                                    <p className="gallery_image_para">{img.para}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bar;