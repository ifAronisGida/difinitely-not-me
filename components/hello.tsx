import { animated, useInView } from '@react-spring/web'

export const Hello = () => {
  const [homeRef, homeSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: -500,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      config: {
        duration: 1000
      }

    })
  )


  return (
    <>
      <animated.div ref={homeRef} style={homeSprings}>
        <div className="place-items-center min-h-screen grid grid-cols-1">
          <div className="text-center min-w-max">
            <div className="max-w-xs sm:max-w-md">
              <h1 className="text-xs sm:text-xl font-thin">Hello there!</h1>
              <h1 className="text-sm sm:text-5xl font-bold">My name is Áron</h1>
              <p className="py-6">I am motivated by creating useful and nice things. I automate processes as a profession and build software in my free time with passion.</p>
              <h1 className="text-sm sm:text-xl font-thin text-red-500">Please consider this site is under development, you might find inappropriate content and/or bugs during browsing!</h1>
            </div>
          </div>
        </div>
      </animated.div>
    </>
  )
}