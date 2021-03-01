import Avatar from '../components/avatar'
import Container from '../components/container'
import PostTitle from '../components/post-title'
import PostBody from '../components/post-body'
import SectionSeparator from '../components/section-separator'
import Intro from '../components/intro'
import WebAuthn from '../components/webauthn'
import Layout from '../components/layout'
import Header from '../components/header'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
          <Header />
          <Container>
            <PostTitle>About</PostTitle>
            <hr className="mb-6 md:mb-12" />
            <div className="max-w-2xl mx-auto my-12">
                <div className="prose lg:prose-xl">
                    <p>My favorite quote is <blockquote>“A lot of what people call intelligence boils down to curiosity.” - Aaron Swartz</blockquote></p>
                    <p>The one word that I hope comes to mind when someone thinks of me is <b>dependable</b>. Aaaaand if I had to choose the second best word to describe me, it would be <b>curious</b> because it most accurately represents how I try to approach each day in a rapidly advancing world: a passion for absorbing varying information and communicating its proper value. </p>
                    <p><mark>I believe intelligence, if not fed, withers over time, but curiosity can nourish intelligence for a lifetime.</mark> That is why I try to treat this personal website kind of like a <a href="https://joelhooks.com/digital-garden" target="_blank">digital garden</a> my recent curiosities.</p>
                    <p>A garden is a beautiful metaphor for curious minds. Gardens take time to be fruitful. They take work. They require <a href="https://www.biblegateway.com/passage/?search=1+Corinthians+3%3A7&version=ESV" target="_blank">trust in factors that are out of your control</a>. Not everything planted will grow; yet some will flourish. And when they do, the harvest is oh-so satisfying.</p>
                    <p>Therefore, this simple plot of the internet will never be complete. There will always be a time to plant something new. Or I might need to pull up a few pages to create space for something else. We’ll see. </p>
                    <p>So take a look around. And if you like something you read here, please feel free to share it and let me know. That would bring me a lot of joy. <mark>My hope is that something I find interesting might spark your own curiosity.</mark></p>
                    <p>If you made it this far, well, this might be the simple beginning of a digital friendship. If so, of all the things I would want to share with a cool person I just met, these three are the ones I would want to share first:</p>
                    <ul>
                        <li><a href="/posts/plodding-twenty-four-hours">This day is not merely another plodding 24 hours</a></li>
                        <li><a href="/posts/using-webauthn-to-secure-your-digital-life">Using WebAuthn to secure your digital life</a></li>
                        <li><a href="/posts/space-ascii-art">Space ASCII art</a></li>
                    </ul>
                    <p>If you'd like to get in touch with me, <a href="mailto:tylernix@pm.me" target="_blank">email</a> and maybe <a href="https://twitter.com/tnix" target="_blank">twitter</a> are your best channels. Just know that I have turned notifications off for both, so my response may not be instantaneous (<a href="/posts/how-solve-your-email-inbox">which is actually a good thing for both of us</a>).</p>
                </div>
            </div>
        
          </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
