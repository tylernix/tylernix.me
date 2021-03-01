import Container from '../components/container'
import MoreStoriesCompact from '../components/more-stories-compact'
import Layout from '../components/layout'
import Header from '../components/header'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Blog</title>
        </Head>
          <Header />
          <Container>
            <MoreStoriesCompact posts={allPosts} />
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
