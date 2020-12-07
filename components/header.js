import Link from "next/link";
import Container from "../components/container";
import { GITHUB_URL, LINKEDIN_URL } from "../lib/constants";

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
        </div>
      </div>
    </Container>
  );
}
