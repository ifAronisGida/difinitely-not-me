import React from 'react';
import Head from 'next/head'
import { Experiences } from '../components/experience'
import Layout, { siteTitle } from '../components/layout'
import { Projects } from '../components/projects'
import AnimatedBackground from '../components/AnimatedBackground';
import { Hello } from '../components/hello';

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div id="animated-bg" className="fixed min-h-screen min-w-full -z-10 ">
        <AnimatedBackground />
      </div>
      <section id="home" className="text-sm sm:text-xl content-center">
        <Hello />
      </section>
      <section id="experience" className="text-sm sm:text-xl content-center">
        <Experiences />
      </section>
      <section id="projects" className="text-sm sm:text-xl content-center">
        <Projects />
      </section>
    </Layout >
  );
}