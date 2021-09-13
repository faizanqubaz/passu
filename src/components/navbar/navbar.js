import React, { useState, useEffect } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    let text='PASSU'
    const [passu,setPassu]=useState(text)
    const [navLink, setNavLink] = useState(false);
    const [header, setHeader] = useState('navbar_slider');
    
const passuEvent=()=>{
    setPassu('MOPAL')
}
    const listenScrollEvent = (event) => {

        if (window.scrollY < 73) {
            return setHeader('navbar_slider')
        } else if (window.scrollY > 70) {
            return setHeader('navbar_slider_2');
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);

    }, [])


    useEffect(()=>{
        const timer=setTimeout(()=>{
          setPassu(text)
        },2000)
        
    })
    const [list, setList] = useState([
        {   
            key:'1',
            name: "HOME",
            href: "#slider"
        },
        {    
            key:'2',
            name: "ABOUT",
            href: "#about"
        },
        {   
            key:'3',
            name: "ROOMS",
            href: "#rooms"
        },
        {   
            key:'4',
            name: "MENU",
            href: "#menu"
        },
        {   
            key:'5',
            name: "GALLERY",
            href: "#gallery"
        }
    ])


    const toggleMenu = () => {
        setNavLink(!navLink)
    }

    return (
        <>
            <nav className="nav">
                <div className={header}>

                    <div className="navbar_head">
                        <i className="navbar_head_icon"><FontAwesomeIcon icon={faCertificate} color="white" /></i>
                        <h2 className="navbar_head_heading" onClick={passuEvent}>{passu}<br /> <span className="navbar_head_span">Tourist Lodge</span></h2>

                    </div>

                    <div className={navLink ? "nav-mobile " : "navbar_contants"}>
                        {



                            list.map((l) => (
                                <a href={l.href}>
                                    <h3 key={l.key} className="navbar_list">{l.name}</h3>
                                </a>



                            ))

                        }

                        <NavLink to='/signup' exact>
                            <button className="navbar_button">Signup</button>
                        </NavLink>

                        <NavLink to='/login' exact>
                            <button className="navbar_button1">Login</button>
                        </NavLink>

                    </div>
                    <i onClick={toggleMenu} className="navbar_button_logo"><FontAwesomeIcon icon={faBars} /></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

