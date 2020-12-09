import Link from "next/link";
import Container from "../components/container";
import { GITHUB_URL, LINKEDIN_URL } from "../lib/constants";
import auth0 from '../../lib/auth0';

export default function Header() {
  return (
    <Container>
      <div class="flex justify-between text-sm text-gray-700 flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <div class="flex items-center">
          <a href="/">
            <img src="assets/tnix.png"></img>
          </a>
        </div>

        <div class="flex flex-col md:flex-row items-center pt-8 space-y-4 md:space-y-0">
          <a href="/projects" class="mx-3 text-base hover:underline">
            Projects
          </a>
          <a href="Blog" class="mx-3 text-base hover:underline">
            Blog
          </a>
          <a
            href="/api/login"
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            Sign In
          </a>
        </div>
      </div>
    </Container>
  );
}
