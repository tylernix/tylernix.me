import Container from './container'
import { GITHUB_URL } from '../lib/constants'
import AsciiRocket from '../components/ascii-rocket'

export default function Footer() {
  return (
    <footer className="bg-light-steel-blue-light bg-opacity-90 border-t border-accent-2">
      <Container>
        <div className="py-10 flex flex-col ">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-left mb-8 lg:mb-10 lg:pr-4 lg:w-1/2">
            Thanks for your time.
          </h3>
          <div className="flex flex-col space-y-2.5 text-left border-l-2 border-prussian-blue pl-4">
            <p>
              Designed using 
                <a href="https://figma.com" className="py-1 px-2 rounded-full bg-imperial-red text-white text-sm ml-2" target="_blank">figma</a>
            </p>
            <p>
              Built using 
                <a href="https://reactjs.org" className="py-1 px-2 rounded-full bg-imperial-red text-white text-sm ml-2" target="_blank">react</a> 
                <a href="https://nextjs.org" className="py-1 px-2 rounded-full bg-imperial-red text-white text-sm ml-2" target="_blank">next.js</a> 
                <a href="https://tailwindcss.com" className="py-1 px-2 rounded-full bg-imperial-red text-white text-sm ml-2" target="_blank">tailwindcss</a>
            </p>
            <p>
              Deployed using 
                <a href="https://vercel.com" className="py-1 px-2 rounded-full bg-imperial-red text-white text-sm ml-2" target="_blank">vercel</a>
            </p> 
          </div>
          
        </div>

        
        
        {/* <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Who am I?
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`${process.env.BASE_URL}/posts/about`}
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read about me
            </a>
            <a
              href={`${GITHUB_URL}`}
              target="_blank"
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div> */}
      </Container>
      <AsciiRocket/>
    </footer>
  )
}
