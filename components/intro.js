import { CMS_NAME } from "../lib/constants";
import Container from "../components/container";
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL, EMAIL_URL } from "../lib/constants";
import EmailSignupAuth0 from "../components/subscribe-auth0";
import UnderlinedLink from "../components/underlined-link";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between bg-light-steel-blue-light bg-opacity-90 border-b border-accent-2">
      <Container>
        <div className="relative flex md:flex-row py-4 md:p-0 md:pt-4 items-start lg:items-end text-left ">
          <div className="hidden lg:flex">
            <img className="w-full items-end" src="assets/profile.png" />
          </div>
          <div className="flex lg:hidden min-w-max mt-2 ml-4 md:ml-4">
            <img className="border border-cool-steel-blue rounded-full w-14 h-14 md:w-24 md:h-24" src="assets/profile-circle.png" />
          </div>
          <div className="flex flex-col pl-8 md:pl-10 lg:pl-28 pr-0 md:pr-4 pt-0 md:pt-2 pb-1 md:pb-4 lg:pb-0 space-y-2 md:space-y-4 md:max-w-3xl">
            <h1 className="font-electronix md:flex text-3xl md:text-5xl lg:text-6xl text-prussian-blue">
              Hi, I'm Tyler<span className="text-5xl lg:text-7xl text-imperial-red" >.</span>
            </h1>
            <p className="font-electronix text-lg md:text-xl lg:text-2xl text-prussian-blue ">
              Welcome to my very own piece of the internet. My coding playground. My <UnderlinedLink href="/blog" text="written curiosities" />. My digial identity (even my own handwriting). 
            </p>  
            <p className="font-electronix text-lg md:text-xl lg:text-2xl text-prussian-blue">
              A while back, I stumbled upon a quote by <UnderlinedLink href="https://www.desiringgod.org/articles/10-resolutions-for-mental-health" target="_blank" text="Dr. Clyde Kilby" /> which says, "I shall not fall into the falsehood that this day, or any day, is merely another ambiguous and plodding twenty-four hours, but rather a unique event, filled, if I so wish, with worthy potentialities."
            </p>  
            <p className="font-electronix text-lg md:text-xl lg:text-2xl text-prussian-blue">
              Worthy potentialities. I love it! My hope is that you somehow become amazed by "the strange glory of ordinary things" found on this site.
            </p>  
            <p className="font-electronix text-lg md:text-xl lg:text-2xl text-prussian-blue">
              Here is one of my <UnderlinedLink href="/posts/space-ascii-art" text="favorites" /> to get you started.
            </p>  
            {/* <p className="font-electronix text-lg md:text-xl lg:text-2xl text-prussian-blue md:max-w-3xl">
              I am a Solutions Engineer at
              <UnderlinedLink href="https://auth0.com" target="_blank" text="Auth0" />
              who discovered websites become even more magical when you give humans a way to securely login.
            </p>                */}
            {/* <div className="hidden md:block lg:pb-4">
              <EmailSignupAuth0 />
            </div> */}
            <div className="absolute top-16 left-0 md:top-28 md:left-2 lg:relative lg:top-0 lg:left-0 lg:pb-2 flex flex-row items-center space-x-1 pt-4">
                <div className="hidden lg:flex text-sm md:text-base text-gray-400 pr-2">Find me: </div>
                <a href={`${LINKEDIN_URL}`} target="_blank" className="" rel="me">
                  <svg className="h-6 w-6 md:h-8 md:w-8 text-prussian-blue hover:text-imperial-red" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M11.4521492,9.45214919 C11.935252,9.15825757 12.4822556,9 13,9 L14,9 C15.3939534,9 17,10.1471761 17,12 L17,16 L15,16 L15,12 C15,11.4242524 14.4060466,11 14,11 L13,11 C12.5939534,11 12,11.4242524 12,12 L12,16 L10,16 L10,9 L11,9 L11.4521492,9.45214919 Z M8,8 C7.44771525,8 7,7.55228475 7,7 C7,6.44771525 7.44771525,6 8,6 C8.55228475,6 9,6.44771525 9,7 C9,7.55228475 8.55228475,8 8,8 Z M9,16 L7,16 L7,9 L9,9 L9,16 Z"/>
                  </svg>
                </a>
                <a href={`${GITHUB_URL}`} target="_blank" className="" rel="me">
                  <svg className="h-6 w-6 md:h-8 md:w-8 text-prussian-blue hover:text-imperial-red" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1" id="mdi-github" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </a>
                <a href={`${TWITTER_URL}`} target="_blank" className="" rel="me">
                  <svg className="h-6 w-6 md:h-8 md:w-8 text-prussian-blue hover:text-imperial-red" id="i-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32" fill="currentColor">
                    <path strokeWidth="0" d="M60 16 L54 17 L58 12 L51 14 C42 4 28 15 32 24 C16 24 8 12 8 12 C8 12 2 21 12 28 L6 26 C6 32 10 36 17 38 L10 38 C14 46 21 46 21 46 C21 46 15 51 4 51 C37 67 57 37 54 21 Z" />
                </svg>
                </a>
              </div>
          </div>
          
        </div>
        {/* <div className="sm:relative md:hidden">
            <EmailSignupAuth0 />
        </div> */}
      </Container>
    </section>
  );
}