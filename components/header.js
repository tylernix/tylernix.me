import Link from "next/link";
import Container from "../components/container";
import { GITHUB_URL, LINKEDIN_URL } from "../lib/constants";

export default function Header() {
  return (
    <Container>
      <div class="flex justify-between text-sm text-prussian-blue flex-col md:flex-row flex items-left md:items-center md:justify-between my-8 md:my-12">
        <div class="flex items-center">
          <a href="/">
            <img className="w-24" src="/assets/tnix-logo.png"></img>
          </a>
        </div>

        <div class="hidden md:flex md:flex-row items-center pt-6 space-y-4 md:space-y-0">
          <a href="/" class="mx-3 text-base hover:underline">
            Home
          </a>
          <a href="/blog" class="mx-3 text-base hover:underline">
            Blog
          </a>
        </div>
      </div>
    </Container>
  );
}
