import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      {/* <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1> */}
      <img src="assets/tnix.png"></img>
      <h4 className="text-center md:text-right text-lg mt-5 md:pl-8">
        I am a Senior Solutions Engineer at {' '}
        <a
          href="https://auth0.com"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Auth0
        </a>{' '}
        striving to make the internet a more secure place, <b>one login at a time</b>.
      </h4>
    </section>
  )
}
