import experiences from "../public/content/experiences.json"

interface Props { }

export const Experiences: React.FC<Props> = () => {

  return (
    <>
      {experiences.map((experience) =>
        <div className="card w-96 bg-base-100 shadow-xl m-5">
          <div className="card-body">


            <h2 className="card-title">
              {experience.title}
              <div className="badge badge-primary">{experience.year}</div>
            </h2>

            <p>{experience.description}</p>

            <div className="card-actions justify-end">
              {experience.hardskills.map((hardskill) =>
                <>
                  <div className="badge badge-outline">{hardskill}</div>
                </>
              )}
            </div>

            <div className="card-actions justify-end">
              {experience.softskills.map((softskills) =>
                <>
                  <div className="badge badge-outline">{softskills}</div>
                </>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  )

}