import Link from "next/link";
import Container from "../components/container";
import { GITHUB_URL, LINKEDIN_URL } from "../lib/constants";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <Container>



<div class="relative bg-white">
  <div class="mx-auto">
    <div class="flex justify-between items-center border-gray-100 py-8 md:py-12 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="/">
          <span class="sr-only">tnix</span>
          <img className="h-10 w-auto sm:h-12" src="/assets/tnix-logo.png" alt="tnix logo"></img>
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button type="button" onClick={() => setNavbarOpen(!navbarOpen)} class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          {/* <!-- Heroicon name: outline/menu --> */}
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* <nav class="hidden md:flex space-x-10">
        <a href="/" class="text-base font-medium mx-4 hover:underline">
          Home
        </a>
        <a href="/about" class="text-base font-medium mx-4 hover:underline">
          About
        </a>
      </nav> */}
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a href="/" class="text-base mx-4 hover:underline">
          Home
        </a>
        <a href="/about" class="text-base mx-4 hover:underline">
          About
        </a>
        <a href="#" class="ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-imperial-red hover:bg-prussian-blue">
          Blog
        </a>
      </div>
    </div>
  </div>

  {/* <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
  <div className={"absolute top-0 inset-x-0 pt-7 -mx-2 transition transform origin-top-right md:hidden" + (navbarOpen ? " block" : " hidden")}>
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5">
        <div class="flex items-center justify-between">
          <div>
          <img className="h-10 w-auto sm:h-12" src="/assets/tnix-logo.png" alt="tnix logo"></img>
          </div>
          <div class="-mr-2">
            <button type="button" onClick={() => setNavbarOpen(!navbarOpen)} class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              {/* <!-- Heroicon name: outline/x --> */}
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-8">
          <nav class="grid gap-y-8">
            <a href="/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              <svg class="flex-shrink-0 h-6 w-6 text-prussian-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span class="ml-3 text-base text-prussian-blue">
                Home
              </span>
            </a>

            <a href="/about" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              <svg class="flex-shrink-0 h-6 w-6 text-prussian-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="ml-3 text-base text-prussian-blue">
                About
              </span>
            </a>
          </nav>
        </div>
      </div>
      <div class="py-6 px-5 space-y-6">
        {/* <div class="grid grid-cols-2 gap-y-4 gap-x-8">
          <a href="/" class="text-base font-medium text-prussian-blue hover:underline">
            Home
          </a>

          <a href="/about" class="text-base font-medium text-prussian-blue hover:underline">
            About
          </a>
        </div> */}
        <div>
          <a href="/blog" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-imperial-red hover:bg-prussian-blue">
            Blog
          </a>
          {/* <p class="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?
            <a href="#" class="text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p> */}
        </div>
      </div>
    </div>
  </div>
</div>

    </Container>
  );
}


