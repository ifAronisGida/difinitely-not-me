import { useEffect, useState } from "react";
import projects from "../public/content/projects.json"

interface Props {
}

type Project = {
  "id": number,
  "title": string,
  "text": string,
  "tags": string[],
  "status": string,
  "repoLink": string,
  "demoLink": string
}



export const Projects: React.FC<Props> = () => {
  var count = 0;
  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    setProjectData(projects);
  }, [])

  return (
    <>
      {projectData.map((project) =>

        <div key={project.id} className="bg-base-100 hover:bg-base-200 shadow-xl">

          <div className="card-body">
            <h2 className="card-title relative">
              {project.title}
              <div className="badge badge-outline right-0">{project.status}</div>
            </h2>
            <div className="">{project.text}</div>
            {project.demoLink !== "" && <div className="badge badge-secondary"><a href={project.demoLink}>Demo</a></div>}
            {project.repoLink !== "" && <div className="badge badge-secondary"><a href={project.repoLink}>GitHub</a></div>}

            <div className="card-actions justify-end">
              {project.tags.map((tag) => <div key={count++} className="badge badge-outline">{tag}</div>)}
            </div>
          </div>

        </div>

      )
      }
    </>

  )
}