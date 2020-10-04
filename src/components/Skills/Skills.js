import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import { useStateValue } from '../../StateProvider'
import './Skills.css'

function Skills() {
    const [{ skills }] = useStateValue();

    return (
        <div className="skills" id="skills">
            <h1>My Skills</h1>
            <div className="skills__container">
                {
                    skills.map(skill => (
                        <div key={skill.id} className="skill">
                            <h3 className="skill__name">{skill.technology}</h3>
                            <ProgressBar percent={skill.percent} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Skills
