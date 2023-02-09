import experiences from "../public/content/experiences.json"

interface Props {

  data?: {
    title: string,
    year: string,
    description: string,
    hardskills: string[],
    softskills: string[]
  }[]
}



export const Experiences: React.FC<Props> = ({ data }) => {

  return (
    <div className="tabs">
      {experiences.map((experience) =>
        <a className="tab tab-bordered">{experience.title}</a>
      )}
    </div>
  )

}