import { useState } from "react"
import profile from "../public/images/profile.jpg"

interface Props {
  projectData: {
    title: string,
    status: string,
    text: string,
    tags: string[]
  }
}

export const ProjectCard: React.FC<Props> = ({ projectData }) => {


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="mt-5"><img src="./images/profile.jpg" height={100} width={150} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {projectData.title}
          <div className="badge badge-secondary">{projectData.status}</div>
        </h2>
        <p>{projectData.text}</p>
        <div className="card-actions justify-end">
          {projectData.tags.map((tag) => <div className="badge badge-outline">{tag}</div>)}
        </div>
      </div>
    </div>
  )
}