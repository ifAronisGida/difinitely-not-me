import experiences from "../public/content/experiences.json"
import { animated, useInView } from '@react-spring/web'

interface Props { }

export const Experiences: React.FC<Props> = () => {
  var count = 0;


  const [experiencesRef, experiencesSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      config: {
        delay: 10,
        duration: 1500
      },

    })
  )


  return (
    <>
      <animated.div ref={experiencesRef} style={experiencesSprings}>
        <div className="min-h-screen place-items-center grid grid-cols-1">
          <div className="text-center">
            <div className="max-w-xs sm:max-w-6xl">
              <h1 className="mb-5 text-5xl font-bold">Experiences:</h1>
              <div className="grid gap-4 grid-cols-1 xl:grid-cols-3">
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
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </>
  )

}