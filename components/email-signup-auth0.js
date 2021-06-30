import {useRouter} from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import useUser from '../lib/hooks'
import axios from 'axios'

export default function Login() {
    const { user, error } = useUser();
    const router = useRouter()
    const handleSubmit = async (event) => {
      event.preventDefault();
    
      const { elements } = event.target;
    
      let emailSignup = axios.post('/api/email/signup', {
        emailAddress: elements.email.value
      })
      console.log(emailSignup);
      // TODO: handle already subscribed state

    //   let authRequest = axios.post('/api/auth0/login', {
    //       email: elements.email.value
    //   })
    //   if (authRequest.ok) {
    //     //router.push('/subscribed-confirmation');
    //   } else { /* handle errors */ }
    }
  
    return (
        <>
            { !user && (
                <form onSubmit={handleSubmit}>
                    <input name='email' type='email' placeholder="your@email.com" required />
                    <button type="submit">Log in</button>
                </form>
            )}
            {user && (
                <a href="/api/auth0/logout">Log Out</a>
            )} 
        </>
    )
}