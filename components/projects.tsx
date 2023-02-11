import projects from "../public/content/projects.json"

interface Props {
}

export const Projects: React.FC<Props> = () => {
  var count = 0;

  return (
    <>
      {projects.map((project) =>

        <div key={project.id} className="bg-base-100 hover:bg-base-200 shadow-xl">
          <a href={project.repoLink} target="_blank" rel="noreferrer">
            <div className="card-body">
              <h2 className="card-title relative">
                {project.title}
                <div className="badge badge-outline right-0">{project.status}</div>
              </h2>
              <p>{project.text}</p>
              <div className="card-actions justify-end">
                {project.tags.map((tag) => <div key={count++} className="badge badge-outline">{tag}</div>)}
              </div>
            </div>
          </a>
        </div>

      )
      }
    </>

  )
}