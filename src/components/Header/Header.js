import React, { useEffect, useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import { faBars, faTimes, } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [show, handleShow] = useState(false);
    const [clicked, setClicked] = useState(false);

    const toggleNavbar = () => {
        setClicked(!clicked)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                handleShow(true)
            } else {
                handleShow(false)
            };
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={`header ${show && "header__dark"}`}>
            <div className="header__logoSection">
                <h1 className="header__logo">Dms</h1>
                <FontAwesomeIcon icon={clicked ? faTimes : faBars} onClick={toggleNavbar} className="fa__icon" size="2x" />
            </div>

            <nav>
                <ul className={!clicked ? "header__nav header__navHide" : "header__nav header__navShow"}>
                    <li><Link smooth activeClassName="nav__active" className="header__links" to="#home">Home</Link></li>
                    <li><Link smooth activeClassName="nav__active" className="header__links" to="#about">About</Link></li>
                    <li><Link smooth activeClassName="nav__active" className="header__links" to="#projects">Projects</Link></li>
                    <li><Link smooth activeClassName="nav__active" className="header__links" to="#skills">Skills</Link></li>
                    <li><Link smooth activeClassName="nav__active" className="header__links" to="#contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header
