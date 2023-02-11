import experiences from "../public/content/experiences.json"

interface Props { }

export const Experiences: React.FC<Props> = () => {
  var count = 0;

  return (
    <>
      {experiences.map((experience) =>
        <div key={experience.id} className="bg-base-100 shadow-xl">
          <div className="card-body">

            <h2 className="card-title">
              {experience.title}
              <div className="badge badge-primary">{experience.year}</div>
            </h2>

            <p>{experience.description}</p>

            <div className="card-actions justify-end">
              {experience.hardskills.map((hardskill) =>
                <div key={count++} className="badge badge-outline">{hardskill}</div>
              )}
            </div>

            <div className="card-actions justify-end">
              {experience.softskills.map((softskill) =>
                <div key={count++} className="badge badge-outline">{softskill}</div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  )

}