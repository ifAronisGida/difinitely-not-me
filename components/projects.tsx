import { useInView, animated } from "@react-spring/web";
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

  const [projectsRef, projectsSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 500,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      config: {
        delay: 1000,
        duration: 1000
      }

    })
  )

  return (
    <>

      <animated.div ref={projectsRef} style={projectsSprings}>
        <section id="projects" className="text-sm sm:text-xl content-center">
          <div className="min-h-screen place-items-center grid grid-cols-1">
            <div className="min-w-max text-center">
              <div className="max-w-xs sm:max-w-4xl">
                <h1 className="text-5xl font-bold mb-5">Projects:</h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {projectData.map((project) =>
                    <div key={project.id} className="bg-base-100 hover:bg-base-200 shadow-xl">
                      <div className="card-body">
                        <h2 className="card-title relative">
                          {project.title}
                          <div className="badge badge-outline right-0">{project.status}</div>
                        </h2>
                        <div className="">{project.text}</div>
                        {project.demoLink !== "" && <div className="badge badge-secondary"><a href={project.demoLink} target="_blank" rel="noreferrer">Demo</a></div>}
                        {project.repoLink !== "" && <div className="badge badge-secondary"><a href={project.repoLink} target="_blank" rel="noreferrer">GitHub</a></div>}
                        <div className="card-actions justify-end">
                          {project.tags.map((tag) => <div key={count++} className="badge badge-outline">{tag}</div>)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </animated.div>


    </>

  )
}