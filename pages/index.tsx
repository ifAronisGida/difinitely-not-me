import Head from 'next/head'
import { Experiences } from '../components/experience'
import Layout, { siteTitle } from '../components/layout'
import { Projects } from '../components/projects'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section id="home" className="text-xl content-center">
        <div className="place-items-center min-h-screen bg-base-200 grid grid-cols-1">
          <div className="text-center min-w-max">
            <div className="max-w-md">
              <h1 className="text-xl font-thin">Hello there!</h1>
              <h1 className="text-5xl font-bold">My name is Áron</h1>
              <p className="py-6">I am motivated by creating useful and nice things. I automate processes as a profession and build software in my free time with passion.</p>
              <h1 className="text-xl font-thin text-red-500">Please consider this site is under development, you might find inappropriate content and/or bugs during browsing!</h1>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="text-xl">
        <div className="hero min-h-screen bg-base-100">
          <div className="min-w-max text-center">
            <div className="max-w-xl xl:max-w-xl">
              <h1 className="mb-5 text-5xl font-bold">Experiences:</h1>
              <div className="grid gap-4 grid-cols-1 xl:grid-cols-3">
                <Experiences />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="text-xl">
        <div className="hero min-h-screen bg-base-200">
          <div className="min-w-max text-center">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold mb-5">Projects:</h1>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}