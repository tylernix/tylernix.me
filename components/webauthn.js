import { CMS_NAME } from "../lib/constants";
import Container from "../components/container";
import { GITHUB_URL, LINKEDIN_URL } from "../lib/constants";
import React, { useState, useEffect, useRef } from 'react'

export default function WebAuthN() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between border-b border-accent-2">
      <Container>
            <div className="flex mx-auto md:flex-row flex items-center text-center md:text-left justify-center">
                <div className="text-2xl p-8 w-2/3">
                    <DistortText />
                </div>
                <div className="flex flex-col p-8 m-8 w-1/3 border bg-black text-white">
                    <h1 className="text-2xl pb-2">This text is hidden on purpose.</h1>
                    <p className="pb-2">I want to demonstrate a new auth protocal called <a className="text-blue-300" href="https://auth0.com/blog/introduction-to-web-authentication/" target="_blank">WebAuthn</a>.</p>
                    <p className="pb-2">To unlock the text, connect a <a className="text-blue-300" href="https://www.nytimes.com/wirecutter/reviews/best-security-keys/" target="_blank">USB authenticator</a>, or make sure your device has a built in one like <a className="text-blue-300" href="https://support.apple.com/en-us/HT208108" target="_blank">Face ID</a>, and enter a username or email address below.</p> 
                    <input className="p-2 text-black" placeholder="Username or email"></input>
                    <a
                        target="_blank"
                        className="bg-red-600 hover:bg-white hover:text-black border border-red text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mt-4 lg:mb-0"
                    >
                        Register
                    </a>
                </div>
          </div>
      </Container>
    </section>
  );
}

function DistortText(props) {
    let text = 'The Web Authentication API (also known as WebAuthn) is a specification written by the W3C and FIDO, with the participation of Google, Mozilla, Microsoft, Yubico, and others. The API allows servers to register and authenticate users using public key cryptography instead of a password. WebAuthn is part of the FIDO2 framework, which is a set of technologies that enable passwordless authentication between servers, browsers, and authenticators. As of January 2019, WebAuthn is supported on Chrome, Firefox, and Edge, and Safari.'
    let [curr, distortText] = useState(text);
    let [delay, setDelay] = useState(200);
    let charSet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890+>?-$#@%&*';

    useInterval(() => {
        distortText(() => {
            // var words = curr.split(' ');
            // var newText = '';
            // words.forEach((word) => {
            //     var chars = word.split('');
            //     if (chars != '') {
            //         //GET A RANDOM CHARACTER FROM THE TEXT
            //         var rand = Math.floor(Math.random() * (chars.length));
            //         //GET A RANDOM REPLACEMENT CHARACTER
            //         var randRep = Math.floor(Math.random() * (charSet.length));
            //         //CHECK TO MAKE SURE THAT THE NEW CHARACTER IS DIFFERENT FROM THE OLD
            //         if(chars[rand] != charSet[randRep] && chars[rand] != ' '){
            //             chars[rand] = charSet[randRep];
            //         }
            //         //UPDATE TEXT
            //         newText += chars.join('') + ' ';
            //     }
            // })
            // return newText;

            
            //GET EACH INDIVIDUAL CHARACTER
            var chars = curr.split('');
            //GET A RANDOM CHARACTER FROM THE TEXT
            var rand = Math.floor(Math.random() * (chars.length));
            //GET A RANDOM REPLACEMENT CHARACTER
            var randRep = Math.floor(Math.random() * (charSet.length));
            //CHECK TO MAKE SURE THAT THE NEW CHARACTER IS DIFFERENT FROM THE OLD
            if(chars[rand] != charSet[randRep] && chars[rand] != ' '){
                chars[rand] = charSet[randRep];
            }
            //UPDATE TEXT
            curr = chars.join('');
            return curr;
        })
    }, delay);

    useInterval(() => {
        if (delay > 10) {
            setDelay(delay / 1.1)
            console.log(delay);
        } else {
            setDelay(null);
        }
    }, 200);

    return <h1>{curr}</h1>
}



function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }