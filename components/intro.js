import { CMS_NAME } from "../lib/constants";
import Container from "../components/container";
import { GITHUB_URL, LINKEDIN_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between bg-accent-1 border-b border-accent-2">
      {/* <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1> */}
      {/* <a href="/">
        <img src="assets/tnix.png"></img>
      </a> */}
      <Container>
        <div class="flex mx-auto justify-between md:flex-row flex items-center text-center md:text-left md:justify-between">
          <div class="hidden md:flex">
            <img src="assets/profile.png" />
          </div>
          <div class="flex flex-col space-y-8">
            <h1 class="hidden md:flex text-6xl md:text-7xl tracking-tighter leading-tight">Hi, I'm Tyler.</h1>
            <h4 className="text-xl max-w-3xl mb-4">
              I am a Senior Solutions Engineer at{" "}
              <a
                href="https://auth0.com"
                className="underline hover:text-success duration-200 transition-colors"
                target="_blank"
              >
                Auth0
              </a>{" "}
              with experience in Web Development and Cloud Computing who
              specializes in Identity and Application Security.
            </h4>
            <div class="flex flex-col md:flex-row">
              <a
                href={`${LINKEDIN_URL}`}
                target="_blank"
                className="bg-linkedin hover:bg-white hover:text-black border border-linkedin text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 md:self-start"
              >
                View LinkedIn
              </a>
              <a
                href={`${GITHUB_URL}`}
                target="_blank"
                className="md:mx-3 bg-github hover:bg-white hover:text-black border border-github text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 md:self-start"
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
