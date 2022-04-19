import Container from './container'
import { GITHUB_URL } from '../lib/constants'
import AsciiRocket from '../components/ascii-rocket'

export default function Footer() {
  return (
    <footer className="bg-light-steel-blue-light bg-opacity-90 border-t border-accent-2">
      <Container>
        <div className="py-10 flex flex-col ">
          <h3 className="font-electronix text-4xl lg:text-6xl text-left mb-3 lg:pr-4 lg:w-1/2">
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
      </Container>
      <AsciiRocket/>
    </footer>
  )
}
