import React from 'react';
//import { useUser } from '@auth0/nextjs-auth0';
import Container from '../components/container'
import Layout from '../components/layout'
import Header from '../components/header'
import EmailSignupAuth0 from "../components/subscribe-auth0"
import SectionSeperator from "../components/section-separator"
import Head from 'next/head'
import useUser from '../lib/hooks'

export default function Profile() {
  const { user, error } = useUser();

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Layout>
        <Head>
          <title>Profile</title>
        </Head>
          <Header />
          <Container>
            <div className="">
              {user ? (
                <div>
                  <h1>Your Session</h1>
                  <pre>{JSON.stringify(user, null,2)}</pre>
                </div>
              ) : (
                <div>
                  <h1 className="md:flex text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-tight text-prussian-blue">
                    Your session
                  </h1>
                  <p className="font-bold text-sm md:text-base lg:text-xl text-prussian-blue md:max-w-4xl mb-4">Your are not currently logged in to see your session details, but you can signup below.</p>
                  <SectionSeperator />
                  <EmailSignupAuth0 funFactText="This also signs you up for my email newsletter, just so you are aware."/>
                </div>
              )}
            </div>
                 
          </Container>
      </Layout>
    </>
  )
}
