import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="avatorAndIntro">
                <div className="profile__pic">
                    <img src="/images/profile_pic.jpg" alt="profile-pic" />
                </div>
                <div className="about__content">
                    <div className="about__intro">
                        <h2>About me</h2>
                        <p>I am Dhinesh, a self taught front end developer from a mechanical engineering bachelor degree.
                        And I'm currently working in Mahindra & mahindra with so much passion and determination to shift
                        to web development.</p>
                    </div>
                    <div className="about__contactDetails">
                        <h2>Contact Details</h2>
                        <p>Dhinesh MS</p>
                        <p>No: 26-83, weavers colony</p>
                        <p>Puttur, Andhra Pradesh</p>
                        <p>India</p>
                        <p>+91 741 852 6686</p>
                        <p>dhinesh.sudhakar93@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="graduationAndExperince">
                <div className="graduation">
                    <div className="graduation__title">
                        <h2>Graduation</h2>
                    </div>
                    <div className="graduation__details">
                        <div className="details">
                            <h2>GCE Salem</h2>
                            <p>Bachelor in Mechanical Engineeing - May 2015 </p>
                            <p>Graduatued with Distinction</p>
                        </div>

                    </div>
                </div>

                <div className="experience">
                    <div className="experience__title">
                        <h2>Experience</h2>
                    </div>
                    <div className="experiance__details">
                        <div className="details">
                            <h2>Self taught web developer</h2>
                            <p>Very keen passionate web developor - Nov 2019 - present </p>
                            <p>Learning to master the front end web development</p>
                        </div>

                        <div className="details">
                            <h2>Mahindra & Mahindra limited</h2>
                            <p>Seating engineer - May 2018 - present </p>
                            <p>Research and development of seating systems</p>
                        </div>

                        <div className="details">
                            <h2>Hinduja Tech limited</h2>
                            <p>Design engineer - Aug 2017 - May 2018 </p>
                            <p>Desgin and development of BIW panels</p>
                        </div>

                        <div className="details">
                            <h2>Aktis Engineering</h2>
                            <p>Design engineer - May 2015 - Aug 2017 </p>
                            <p>Desgin and development of seating systems</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default About 