import React, { useState } from 'react';
import './showcase.css'
import Image from '../../images/anil.jpeg';
import Image1 from '../../images/hunza.jpeg';
import Image2 from '../../images/new.jpg'
import Image3 from '../../images/new2.jpg'
import Image4 from '../../images/new3.jpg'
import Image5 from '../../images/new4.jpg'
import Image6 from '../../images/new3.jpg'
// import Image7 from '../../images/ptll1.jpeg'
// import Image8 from '../../images/ptll2.jpeg'
const ShowCase = () => {

const [currentItem,setcurrentItem]=useState(0)
    const [profiles] = useState([
        {
            image:Image,
            head: "Anil Kapoor",
            head2: "People Believe Other People",
            para: "Let your visitors know about your happy customers"
        },
        {
            image:Image1,
            head: "Kapil Sharma",
            head2: "People Believe Other People",
            para: "Let your visitors know about your happy customers"
        },
        {   
            image:Image2,
            head: "Sanjay datt",
            head2: "People Believe Other People",
            para: "Let your visitors know about your happy customers"
        },
        {   
            image:Image2,
            head: "Ametabah Bachan",
            head2: "People Believe Other People",
            para: "Let your visitors know about your happy customers"
        },
        {   
            image:Image3,
            head: "Kajol",
            head2: "People Believe Other People",
            para: "Let your visitors know about your happy customers"
        },
        {   
            image:Image4,
            head: "Ravina Tendon",
            head2: "People Believe Other People",
            para: "Let your visitors know about your happy customers"
        },
        {   
            image:Image5,
            head: "Sachin",
            head2: "People Believe Other People",
            para: "Let your visitors know about your happy customers"
        },
        {   
            image:Image6,
            head: "Shri Raam",
            head2: "People Believe Other People",
            para: "Let your visitors know about your happy customers"
        },
        {   
            image:Image6,
            head: "Sanjay datt",
            head2: "People Believe Other People",
            para: "Let your visitors know about your happy customers"
        },
        {   
            image:Image6,
            head: "Sanjay datt",
            head2: "People Believe Other People",
            para: "Let your visitors know about your happy customers"
        },
    ]);
    const updateItems=(index)=>{
     setcurrentItem(index+3)
    }
    return (
        <>
            <div className="showcase_slider">
                <div className="showcase_slider_container">
                    <div className="showcase_head">
                        <h2 className="showcase_heading"></h2>
                        <p className="showcase_para">​​​​​​​</p>
                    </div>

                    <div className="showcase_profies">

                       {
                           profiles.slice(currentItem,currentItem + 3).map((data,index)=>(
                         
                            <div className="showcase_profile_slider">
                            <img className="showcase_profile_image" src={data.image}></img>
                            <div className="showcase_profile_main">
                                <h2 className="showcase_profile_heading">{data.head}</h2>
                                <p className="showcase_profile_para">SATISFIED CUSTOMER</p>
                            </div>
                        </div>
                           ))
                       }
                    </div>

                    <div className='showcase_span_parent'>
                      {
                          [...Array(Math.ceil(profiles.length/3))].map((item,index)=>(
                            <div onClick={()=>updateItems(index)} className='showcase_span'></div>
                          ))
                      }
                       
                       
                    </div>
                </div>
            </div>
        </>
    )

}
export default ShowCase;


