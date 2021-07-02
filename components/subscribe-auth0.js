import {useRouter} from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr';
import useUser from '../lib/hooks'
import axios from 'axios'
import fetcher from '../lib/fetcher';

export default function Subscribe() {
    const { user, error } = useUser();
    const router = useRouter()
    let [response, setResponse] = useState();

    const { data } = useSWR('/api/subscribers', fetcher);
    const subscriberCount = new Number(data?.count);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { elements } = e.target;
        const email = elements.email.value;
    
        // Subscribe user with email submitted
        axios.post('/api/email/signup', {
            emailAddress: email
        }).then(function(response) {
            setResponse('WooHoo! This will be fun. By the way, check your email for an easter egg. ;)')
            
            // Send a passwordless authentication link to subscribed email
            axios.post('/api/auth0/login', {
                email: email
            })
        }).catch(function (error) {
            setResponse('Oops. Seems like this email is already subscribed OR your email is invalid. But I hope it was the first one :)')
        })
    }
  
    return (
        <>
            { !user && (
                <form onSubmit={handleSubmit} className="">
                    <h4 className="text-sm md:text-xl text-prussian-blue md:max-w-3xl mb-4">
                        I semi-frequently write about these things. So if you are a nerd like me and find these topics interesting, we should become friends.
                    </h4>
                    <div className="flex flex-row bg-white p-1 md:p-2 border md:border-2 rounded-md border-accent-2 hover:border-light-steel-blue">
                        <input name='email' type='email' placeholder="your.favorite@email.com" className="text-sm md:text-base text-prussian-blue focus:outline-none w-full pl-7 pr-12 rounded-md" required />
                        <button type="submit" className="bg-imperial-red hover:bg-prussian-blue rounded-md text-white text-sm md:text-base py-2 px-4 my-1 lg:px-8 duration-200 transition-colors self-start">
                            Subscribe
                        </button>
                    </div>
                    <p className="px-2 py-4">{response}</p>
                </form>
            )}
            {user && (
                <a href="/api/auth0/logout">Log Out</a>
            )} 
        </>
    )
}