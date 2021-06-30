import React from 'react';
//import { useUser } from '@auth0/nextjs-auth0';
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import WebAuthn from '../components/webauthn'
import Layout from '../components/layout'
import Header from '../components/header'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import useUser from '../lib/hooks'

export default function SubscribedConfirmation() {
  const { user, error } = useUser();

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Layout>
        <Head>
          <title>Congrats!</title>
        </Head>
          <Header />
          <Container>
            <div className="prose lg:prose-xl">
                <div>
                  <p>Your are subscribed.</p>
                  <p>Did you know? ...</p>
                </div>
            </div>
                 
          </Container>
      </Layout>
    </>
  )
}
