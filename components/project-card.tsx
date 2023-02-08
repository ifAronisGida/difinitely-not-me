import { useState } from "react"
import profile from "../public/images/profile.jpg"

interface Props {
  title: string,
  status: string,
  text: string,
  tags: string[]
}

export const ProjectCard: React.FC<Props> = ({ title, status, text, tags }) => {


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="mt-5"><img src="./images/profile.jpg" height={100} width={150} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{status}</div>
        </h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          {tags.map((tag) => <div className="badge badge-outline">{tag}</div>)}
        </div>
      </div>
    </div>
  )
}