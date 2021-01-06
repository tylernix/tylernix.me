import Container from "../components/container";
import React, { useState, useEffect, useRef } from 'react'

export default function WebAuthn() {
    let [authState, setAuthState] = useState('unregistered'); // unregistered, registered, authenticated, failed
    let [user, setUser] = useState();
    let [rawId, setRawId] = useState();
    let [error, setError] = useState();

    let demo;
    if (authState == 'registered') {
        demo = <div className="flex flex-col p-6 md:p-8 lg:p-6 lg:w-1/3 border bg-prussian-blue text-white max-w-xs md:max-w-2xl"> 
                    <h1 className="text-2xl lg:text-3xl pb-4 lg:pb-6 text-white">Authenticate with your new credential</h1>
                    <p className="pb-2 text-white">You have created a new credential for this site. The <a className="text-light-steel-blue" href="https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/rawId" target="_blank">rawId</a> and the <a className="text-light-steel-blue" href="https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential" target="_blank">public key</a> are all that are needed to identify you. No more passwords! No more personal identifying data!</p>
                    <p className="pb-6 text-white">Using the rawId, you can authenticate as the user you just created.</p> 
                    <form className="flex flex-col relative">
                            <div>Your username: <span className="border-b-2 border-imperial-red">{user}</span></div>
                            <div className="truncate">Your rawId: <span className="border-b-2 border-imperial-red">{binToStr(rawId)}</span></div>
                            <div className="relative -bottom-1 left-20 text-xs">^ Trust me, it's long.</div>
                        <a
                            onClick={() => authenticate(user, rawId, authState, setAuthState, setError)}
                            className="bg-white text-prussian-blue hover:text-imperial-red font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mt-4 lg:mb-0 self-start"
                            >
                            Authenticate
                        </a>
                    </form>
                </div>  
        
        
    } else if (authState == 'authenticated') {
        demo = <div className="flex flex-col p-6 md:p-8 lg:p-6 lg:w-1/3 border bg-prussian-blue text-white"> 
                    <h1 className="text-2xl lg:text-3xl pb-4 lg:pb-6 text-white">Login successful!</h1>
                    <p className="pb-2 text-white">You can now read the super mysterious text - you earned it of course.</p>
                    <a
                        onClick={() => setAuthState('unregistered')}
                        className="bg-white text-prussian-blue hover:text-imperial-red font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mt-4 lg:mb-0 self-start"
                        >
                        Reset
                    </a>
                    <p className="pt-8 text-white">P.S. - I am just glad this worked ;-)</p> 
                </div>   
        

    } else {
         demo = <div className="flex flex-col p-6 md:p-8 lg:p-6 lg:w-1/3 border bg-prussian-blue text-white"> 
                    <h1 className="text-xl lg:text-3xl pb-4 lg:pb-6 text-white">This text is jumbled on purpose.</h1>
                    <p className="pb-2 text-white">In order to demonstrate a new authentication protocal called <a className="text-light-steel-blue" href="https://auth0.com/blog/introduction-to-web-authentication/" target="_blank">WebAuthn</a>, I created a simple demo.</p>
                    <p className="pb-6 text-white">To unlock the text, connect a <a className="text-light-steel-blue" href="https://www.nytimes.com/wirecutter/reviews/best-security-keys/" target="_blank">USB authenticator</a>, or make sure your device has a built in one like <a className="text-light-steel-blue" href="https://support.apple.com/en-us/HT208108" target="_blank">Face ID</a>, and enter a username or email address below.</p> 
                    <form className="flex flex-col relative">
                        <svg className="h-6 w-6 top-2 left-2 text-imperial-red absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                        </svg>
                        <input
                            className="p-2 pl-10 text-gray-400"
                            placeholder="Username or email"
                            onChange={e => setUser(e.target.value)}
                            value={user}
                        ></input>
                        <label className="pt-2 text-imperial-red">{error}</label>
                        <a
                            onClick={() => registerCredential(user, setRawId, setAuthState, setError)}
                            className="bg-white text-prussian-blue hover:text-imperial-red font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mt-4 lg:mb-0 self-start"
                        >
                            Register
                        </a>
                    </form>
                    <div className="text-xs pt-4 text-white"><b>Note:</b> If this demo isn't working, it is probably because you are using a browser that doesn't support WebAuthn yet, or you are using device that does not yet support biometric signin. Try again on another browser or device.</div>
                </div> 
    }

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between border-b border-accent-2">
      <Container>
            <div className="flex flex-col lg:flex-row items-center text-left justify-between my-4 md:m-8 lg:my-16 lg:mx-0">
                <div className="text-prussian-blue text-sm md:text-lg lg:text-2xl text-center lg:text-left py-4 lg:pr-12 xl:pr-24 lg:w-2/3">
                    <DistortText authState={authState} text={'The Web Authentication API (also known as WebAuthn) is a W3C recommendation for defining an API enabling the creation and use of strong, attested, scoped, public key-based credentials \
                                                            by web applications, for the purpose of strongly authenticating users. In normal words, WebAuthn allows websites to register and authenticate users using state-of-the-art cryptography \
                                                            instead of you having to type in a password! Pretty nifty. Unfortunately, as of January 2021, WebAuthn is still sparesely used across the internet, even though it is supported by all \
                                                            major browsers such as Chrome, Firefox, Edge, and Safari. Interested in learning more? Go to https://tylernix.me/webauthn. '} />
                </div>
                {demo}
          </div>
      </Container>
    </section>
  );
}

function registerCredential(user, setRawId, setAuthState, setError) {
    if (!user) {
        return setError("You must enter a username.")
    } else {
        setError('');
    }

    // Registration args object
    var createCredentialDefaultArgs = {
        publicKey: {
            rp: {
                name: "Tyler-WebAuthn-Demo"
            },
            authenticatorSelection: {
                "requireResidentKey": false,
                "userVerification": "discouraged"
            },
            userVerification: "discouraged",
            user: {
                id: new Uint8Array(16),
                name: user,
                displayName: user
            },
            pubKeyCredParams: [{
                type: "public-key",
                alg: -7 //ES256 elliptic curve
            }],
            attestation: "direct",
            timeout: 90000,
            challenge: new Uint8Array([ // must be a cryptographically random number sent from a server
                0x8C, 0x0A, 0x26, 0xFF, 0x22, 0x91, 0xC1, 0xE9, 0xB9, 0x4E, 0x2E, 0x17, 0x1A, 0x98, 0x6A, 0x73,
                0x71, 0x9D, 0x43, 0x48, 0xD5, 0xA7, 0x6A, 0x15, 0x7E, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0F, 0xEF
            ]).buffer
            // random, cryptographically secure, at least 16 bytes
            //challenge: enc.encode('someRandomStringThatSHouldBeReLLYLoooong&Random'),
        }
    };

    return navigator.credentials.create(createCredentialDefaultArgs)
        .then((cred) => {
            //localStorage.setItem('rawId', binToStr(cred.rawId));
            setRawId(cred.rawId);
            setAuthState('registered');
        })
        .catch((err) => {
            console.log("ERROR", err);
            setAuthState('failed');
        });
}

function authenticate(user, rawId, authState, setAuthState) {
    var idList = [{
        id: rawId,
        transports: ["usb", "nfc", "internal"],
        type: "public-key"
    }];

    // Login args object
    var getCredentialDefaultArgs = {
        publicKey: {
            timeout: 90000,
            // allowCredentials: [newCredential] // see below
            userVerification: "discouraged",
            authenticatorSelection: { 
                requireResidentKey: false,
                userVerification: "discouraged" 
            },
            challenge: new Uint8Array([ // must be a cryptographically random number sent from a server
                0x79, 0x50, 0x68, 0x71, 0xDA, 0xEE, 0xEE, 0xB9, 0x94, 0xC3, 0xC2, 0x15, 0x67, 0x65, 0x26, 0x22,
                0xE3, 0xF3, 0xAB, 0x3B, 0x78, 0x2E, 0xD5, 0x6F, 0x81, 0x26, 0xE2, 0xA6, 0x01, 0x7D, 0x74, 0x50
            ]).buffer
        },
    };

    getCredentialDefaultArgs.publicKey.allowCredentials = idList;

    return navigator.credentials.get(getCredentialDefaultArgs)
        .then((assertion) => {
            // At MINIMUM, your auth checks should be:
            // 1. Check that the retrieved challenge matches the auth challenge you sent to the client, as we do trivially below
            // 2. Check that "retrievedOrigin" matches your domain - otherwise this might be a phish - not shown here
            // console.log(retrievedChallenge);
            // if (retrievedChallenge == AUTH_CHALLENGE){
            //     //alert("Authorized");
            // } else {
            //     //alert("Unauthorized");
            // }

            console.log("ASSERTION", assertion);
            setAuthState('authenticated');
        })
        .catch((err) => {
            console.log("ERROR", err);
            setAuthState('failed');
            //document.getElementById("authentication").textContent = "Failure :(";
        });
}

function DistortText({text, authState}) {
    let [curr, distortText] = useState(text);
    let [delay, setDelay] = useState(200);
    let charSet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890+>?-$#@%&*';

    useInterval(() => {
        distortText(() => {
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
        } else {
            setDelay(null);
        }
    }, 200);

    if (authState == 'authenticated') {
        return <h1>{text}</h1>;
    } else {
        return <h1>{curr}</h1>
    }
    
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

// easy way to go from string to ByteArray
const enc = new TextEncoder();

// another function to go from string to ByteArray, but we first encode the
// string as base64 - note the use of the atob() function
function strToBin(str) {
    return Uint8Array.from(atob(str), c => c.charCodeAt(0));
}

// function to encode raw binary to string, which is subsequently
// encoded to base64 - note the use of the btoa() function
function binToStr(bin) {
    return btoa(new Uint8Array(bin).reduce(
        (s, byte) => s + String.fromCharCode(byte), ''
    ));
}