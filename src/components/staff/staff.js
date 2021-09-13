import React, { useEffect, useState } from 'react';
import './staff.css';
import Image1 from '../../images/anil.jpeg';
import Image2 from '../../images/home.jpg';
import Image3 from '../../images/home.jpg';
import Image4 from '../../images/home.jpg';
import Image5 from '../../images/home.jpg';
import Image6 from '../../images/home.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Staff = () => {

 let [current,setCurrent]=useState('');

    const [image, setImage] = useState([
        {
            head1: "AK",
            imag:Image1,
            key:'0'
        },
        {
            head1: "Ayub",
            imag:Image2,
            key:'1'
        },
        {
            head1: "Crane",
            imag:Image4,
            key:'2'
        },
        {
            head1: "Crane",
            imag:Image4,
            key:'3'
        },
        {
            head1: "Crane",
            imag:Image4,
            key:'4'
        },
        {
            head1: "Crane",
            imag:Image4,
            key:'5'
        },
        {
            head1: "Crane",
            imag:Image4,
            key:'6'
        }
    ])

    const changeImagetoRight=()=>{
    //     const length=image.length;
    //   setCurrent(current === length ? 0 : current + 1);
     setCurrent(1)
     
    }
    const changeImagetoLeft=()=>{
    //     const length=image.length;
    setCurrent(0)
    //   setCurrent(current==length-1  ? length*10 : length * 0);
      console.log('current',current)
    }
const deleteImage=(i)=>{
    console.log('key',i)
    // setImage(image=>image.filter((item,index)=>{
    //     return index !== i
      
    // }))
}


// useEffect(()=>{
//     const timer=setTimeout(()=>{
// setCurrent('')
//     },8000)
// })
    return (
        <>
            <div className='staff_slider'>
                <div className='staff_container'>
                    <div className='staff_head'>
                        <h2 className='staff_heading'>Our Staff</h2>
                        <p className='staff_para'>Show the faces to make your project more trustworthy.</p>
                    </div>

                    <div className='staff_images'>
                        <i onClick={changeImagetoLeft} className='staff_listIcon'><FontAwesomeIcon icon={faArrowLeft} /></i>
                        {
                            image.map((imgs) => (
                                <div style={{margin:'1rem'}}  className={current === 0 ? 'staff_imagey' : 'staff_imagez'}>

                                    <img onClick={()=>deleteImage(imgs.key)} className="staff_img" src={imgs.imag}
                                    
                                    ></img>

                                    <h3 className='staff_heading_2'>{imgs.head1}</h3>
                                    <p className='staff_head_paras'>Owner</p>
                                    <p className='staff_head_parass'>Give a brief description of your founders to <br />
                                and a good and skbddsjd sjvjskdcs vvkjsd</p>
                                    <div className='staff_head_icons'>
                                        <h3 className='staff_icon_head'>Contact Kate</h3>
                                        <i  className='staff_icon'><FontAwesomeIcon icon={faAngleRight} /></i>
                                    </div>
                                </div>

                            ))
                        }
                        <i onClick={changeImagetoRight} className='staff_listIcon2'><FontAwesomeIcon icon={faArrowRight} /></i>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Staff;