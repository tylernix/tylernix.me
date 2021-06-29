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
import useAuth from '../hooks/useAuth'

export default function Profile() {
  const { user, loading, error } = useAuth();
  console.log(user);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Layout>
        <Head>
          <title>Profile</title>
        </Head>
          <Header />
          <Container>
            <div className="prose lg:prose-xl">
              {user && 
                <div>
                  <p><b>User Email:</b> {user.email ? user.email : "None"}</p>
                </div>
              }
              {!user && 
                <div>
                  <p>Please <a className="" href="/api/login">sign in</a> to see your profile.</p>
                </div>
              }     
            </div>
                 
          </Container>
      </Layout>
    </>
  )
}
