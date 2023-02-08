import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from './theme-switch'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import SocialFloater from './social-floater'

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
        <div className="fixed top-0">
          <ThemeSwitcher></ThemeSwitcher>
        </div>
        <div className="fixed bottom-0 right-0">
          <SocialFloater></SocialFloater>
        </div>
        <header className='flex min-h-screen flex-col items-center justify-center py-2'>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-3xl"
                height={200}
                width={200}
                alt={name}
              />
              <h1 className="text-3xl text-center p-5 m-5">{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/profile.jpg"
                  height={108}
                  width={108}
                  alt={name}
                />
              </Link>
              <h2>
                <Link href="/">
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/" className="underline">← Back to home</Link>
          </div>
        )}
      </div>
    </div>
  )
}