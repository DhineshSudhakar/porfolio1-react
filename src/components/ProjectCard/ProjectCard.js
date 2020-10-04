import React from 'react'
import './ProjectCard.css'

function ProjectCard({ imageUrl, title, demoLink, repoLink }) {
    return (
        <div className="projectCard">
            <img src={imageUrl} alt="" />
            <div className="project__info">
                <h5>Title: {title}</h5>
                <div className="project__link">
                    <h5><a href={demoLink}>Live Demo</a></h5>
                    <h5><a href={repoLink}>GitHup Repo</a></h5>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard
