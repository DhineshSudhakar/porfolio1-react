import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.css'
import { useStateValue } from '../../StateProvider'

function Projects() {
    const [{ projects }] = useStateValue()
    return (
        <div className="projects" id="projects">
            <h1>My recent projects</h1>
            <div className="projects__container">
                {
                    projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            imageUrl={project.imageUrl}
                            demoLink={project.demoLink}
                            repoLink={project.repoLink}
                            title={project.title}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default Projects
