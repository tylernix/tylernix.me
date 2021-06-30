import {useRouter} from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import useUser from '../lib/hooks'

import { Magic } from 'magic-sdk'

export default function Login() {
    const { user, error } = useUser();
    const router = useRouter()
    const handleSubmit = async (event) => {
      event.preventDefault()
    
      const { elements } = event.target
    
      // the Magic code
      const did = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY)
        .auth
        .loginWithMagicLink({ email: elements.email.value })
    
        const authRequest = await fetch('/api/login', {
            method: 'POST',
            headers: { Authorization: `Bearer ${did}` }
          })
        
          if (authRequest.ok) {
            // We successfully logged in, our API
            // set authorization cookies and now we
            // can redirect to the dashboard!
            router.push('/profile')
          } else { /* handle errors */ }
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
                <a href="/api/logout">Log Out</a>
            )} 
        </>
    )
}