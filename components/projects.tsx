import projects from "../public/content/projects.json"

interface Props {
}

export const Projects: React.FC<Props> = () => {


  return (
    <>
      {projects.map((project) =>
        <a href={project.repoLink} target="_blank" rel="noreferrer">
          <div className="m-5 card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title relative">
                {project.title}
                <div className="badge badge-outline right-0">{project.status}</div>
              </h2>
              <p>{project.text}</p>
              <div className="card-actions justify-end">
                {project.tags.map((tag) => <div className="badge badge-outline">{tag}</div>)}
              </div>
            </div>
          </div>
        </a>
      )}
    </>

  )
}