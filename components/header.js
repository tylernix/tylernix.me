import Link from "next/link";
import Container from "../components/container";
import { GITHUB_URL, LINKEDIN_URL } from "../lib/constants";
import { useUser } from '@auth0/nextjs-auth0';


export default function Header() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  let greeting;
  if (user) greeting = <a  href="/api/auth/logout" className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
                            Log out
                          </a>
  else greeting = <a  href="/api/auth/login" className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
                      Sign In
                    </a>

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
          {greeting}
        </div>
      </div>
    </Container>
  );
}
