import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import WebAuthn from '../components/webauthn'
import Layout from '../components/layout'
import Header from '../components/header'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Layout>
        <Head>
          <title>Profile</title>
        </Head>
          <Header />
          <Container>
              {user && 
                <div>
                  <img src={user.picture} alt={user.name} />
                  <h2><b>User Name:</b> {user.name ? user.name : "None"}</h2>
                  <p><b>User Email:</b> {user.email ? user.email : "None"}</p>
                  <p><b>User ID:</b> {user.sub}</p>
                </div>
              }
              {!user && 
                <div>
                  <p>Please sign in to see your profile.</p>
                </div>
              }        
          </Container>
      </Layout>
    </>
  )
}
