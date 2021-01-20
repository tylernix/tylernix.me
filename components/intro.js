import { CMS_NAME } from "../lib/constants";
import Container from "../components/container";
import { GITHUB_URL, LINKEDIN_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between bg-light-steel-blue-light bg-opacity-90 border-b border-accent-2">
      {/* <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1> */}
      {/* <a href="/">
        <img src="assets/tnix.png"></img>
      </a> */}
      <Container>
        <div className="flex md:flex-row py-4 md:p-0 items-start md:items-end lg:items-center text-left ">
          <div className="hidden md:flex">
            <img className="w-full items-end" src="assets/profile.png" />
          </div>
          <div className="md:hidden min-w-max mt-2">
            <img className="border border-cool-steel-blue rounded-full w-20" src="assets/profile-circle.png" />
          </div>
          <div className="flex flex-col pl-6 md:pl-14 lg:pl-28 space-y-4 lg:space-y-8 p-4">
            <h1 className="md:flex text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-tight text-prussian-blue">Hi, I'm Tyler <span className="text-6xl lg:text-7xl text-imperial-red" >.</span></h1>
            <h4 className="text-sm md:text-xl text-prussian-blue md:max-w-3xl mb-4">
              I am a Senior Solutions Engineer at{" "}
              <span className="border-b-2 border-imperial-red"><a
                href="https://auth0.com"
                className=" hover:text-imperial-red duration-200 transition-colors"
                target="_blank"
              >
                Auth0
              </a></span>{" "}
              with experience in Web Development and Cloud Computing who
              specializes in Identity and Application Security.
            </h4>
            <div class="flex flex-col md:flex-row">
              <a
                href={`${LINKEDIN_URL}`}
                target="_blank"
                rel="me"
                className="bg-linkedin hover:bg-white hover:text-black border border-linkedin text-white text-xs md:text-base font-bold py-3 px-6 lg:px-8 duration-200 transition-colors mb-4 lg:mb-0 self-start"
              >
                View LinkedIn
              </a>
              <a
                href={`${GITHUB_URL}`}
                target="_blank"
                rel="me"
                className="bg-github hover:bg-white hover:text-black border border-github text-white text-xs md:text-base font-bold py-3 px-6 md:px-6 lg:px-8 duration-200 transition-colors md:mx-3 mb-4 lg:mb-0 self-start"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
