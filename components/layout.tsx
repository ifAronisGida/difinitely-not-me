import Head from 'next/head'
import ThemeSwitcher from './theme-switch'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { SocialFloater } from './social-floater'

const name = 'Áron Gida'
export const siteTitle = 'Áron Gida'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {

  useEffect(() => {
    themeChange(false)
  }, [])

  const copyEmailAddress = () => {
    navigator.clipboard.writeText("gidaaron@gmail.com")
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Is this a portfoli O?"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div >

        <div className="fixed bottom-0 right-0">
          <SocialFloater copyEmailAddress={copyEmailAddress}></SocialFloater>
        </div>
        <header className="fixed top-0 min-w-full z-10">
          <div className="navbar text-neutral-content bg-neutral">
            <div className="w-32 fixed left-0">
              <ThemeSwitcher></ThemeSwitcher>
            </div>
            <div className="fixed right-0">
              <ul className="w-64 flex flew-row-reverse">
                <li className="flex-1 hover:animate-pulse">
                  <a href="#home">Home</a>
                </li>
                <li className="flex-1 hover:animate-pulse">
                  <a href="#experience">Experience</a>
                </li>
                <li className="flex-1 hover:animate-pulse">
                  <a href="#projects">Projects</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <main className="">{children}</main>
      </div>
    </div>
  )
}