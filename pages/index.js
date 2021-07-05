import Container from '../components/container'
import MoreStories from '../components/more-stories'
import MoreStoriesCompact from '../components/more-stories-compact'
import Intro from '../components/intro'
import WebAuthn from '../components/webauthn'
import Layout from '../components/layout'
import Header from '../components/header'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const recentPosts = allPosts.slice(0,4)
  return (
    <>
      <Layout>
        <Head>
          <title>Tyler Nix</title>
        </Head>
          <Header />
          <Intro />
          <WebAuthn />
          <Container>
          <MoreStories posts={recentPosts} />
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
  ], 3)

  return {
    props: { allPosts },
  }
}
