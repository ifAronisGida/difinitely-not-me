import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { ProjectCard } from '../components/project-card'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section id="home" className="text-xl">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-xl font-thin">Hello there!</h1>
              <h1 className="text-5xl font-bold">My name is Áron</h1>
              <p className="py-6">I am motivated by creating useful and nice things. I automate processes as a profession and build software in my free time with passion.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <div className="hero min-h-screen">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Experiences:</h1>
              <ol><li>Codecool</li>
                <li>Mortoff Kft</li>
                <li>Bosch</li></ol>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="text-xl">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Projects:</h1>
              <div className="grid gap-4">
                <ProjectCard text='Unity 3D project' title='GlumeoCraft' tags={["Unity", "C#"]} status="In development.."></ProjectCard>
                <ProjectCard text='Portfolio site' title='gidaron.com' tags={["React", "TypeScript", "Tailwind"]} status="In development.."></ProjectCard>
                <ProjectCard text='Zero waste marketplace' title='ZeroWaste' tags={["React", "MongoDB", "ExpressJS", "NodeJS"]} status="Planning phase.."></ProjectCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}