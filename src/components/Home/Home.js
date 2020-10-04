import React from 'react'
import './Home.css'
import { Button } from '@material-ui/core'
import { NavHashLink as Link } from "react-router-hash-link"

function Home() {
    return (
        <div className="home" id="home">
            <h1 ><span className="name__line">I'm <span className="name">Dhinesh</span></span>
                <span className="intro"> a front end  web developer</span> </h1>
            <div>
                <Button size="large" variant="contained" className="home__button">
                    <Link className="button__link" smooth to="#projects">My projects</Link>
                </Button>
                <Button size="large" className="home__button" variant="contained">
                    <Link className="button__link" smooth to="#contact">Contact me</Link></Button>
            </div>

        </div>
    )
}

export default Home