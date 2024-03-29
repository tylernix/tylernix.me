import '../styles/index.css'
import '../public/fonts/fonts.css'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
