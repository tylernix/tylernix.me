import {useRouter} from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr';
import useUser from '../lib/hooks'
import axios from 'axios'
import fetcher from '../lib/fetcher';
import LoadingSpinner from '../components/loading-spinner';
import ErrorMessage from '../components/message-error';
import SuccessMessage from '../components/message-success';
import UnderlinedLink from './underlined-link';

export default function Subscribe({funFactText}) {
    const { user, error } = useUser();
    const [response, setResponse] = useState();
    const [form, setForm] = useState(false);
    const funFact = (funFactText) ? funFactText : <>This is also a way to <UnderlinedLink href="/profile" target="_blank" text="login" /> to my website.</>
    //const input = useRef(null);
    //const router = useRouter()

    //const { data } = useSWR('/api/subscribers', fetcher);
    //const subscriberCount = new Number(data?.count);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setForm({ state: 'loading' });

        const { elements } = e.target;
        const email = elements.email.value;
    
        // Subscribe user to newsletter
        axios.post('/api/email/signup', {
            emailAddress: email
        }).then(function(response) {            
            // Send a passwordless authentication link to subscribed email
            axios.post('/api/auth0/login', {
                email: email
            })

            setForm({
                state: 'success',
                message: 'WooHoo! Check your email for a "magic" link.'
            });
            
        }).catch(function (error) {
            setForm({
                state: 'error',
                message: 'Welp. Seems like this email is already subscribed.'
            });
        })
    }
  
    return (
        <form onSubmit={handleSubmit} className="pb-4">
            <h4 className="text-sm md:text-base lg:text-xl text-prussian-blue md:max-w-3xl mb-4">
                I semi-frequently write about frontend web dev + auth + app security, so if you are a nerd like me and find things interesting, we should become friends.
            </h4>
            <div className="flex flex-row bg-white p-1 md:p-2 border md:border-2 rounded-md border-accent-2 hover:border-light-steel-blue">
                <input 
                    name='email' 
                    aria-label="Email for newsletter"
                    type='email' 
                    placeholder="your.favorite@email.com" 
                    required
                    className="text-sm md:text-base text-prussian-blue focus:outline-none w-full pl-7 pr-10 rounded-md"  />
                <button type="submit" className="bg-imperial-red hover:bg-prussian-blue rounded-md text-white text-sm md:text-base py-2 px-4 my-0 lg:px-8 duration-200 transition-colors self-start">
                    {form.state === 'loading' ? <LoadingSpinner /> : 'Subscribe'}
                </button>
            </div>
            {form.state === 'error' ? (
                <ErrorMessage>{form.message}</ErrorMessage>
            ) : form.state === 'success' ? (
                <SuccessMessage>{form.message}</SuccessMessage>
            ) : (
                <p className="flex flex-row text-sm px-0 md:px-2 py-2">
                    <b className="min-w-max pr-2">Fun fact:</b> 
                    <p className="max-w-prose">{funFact}</p>
                </p>
            )}
        </form>
    )
}