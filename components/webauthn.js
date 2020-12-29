import Container from "../components/container";
import React, { useState, useEffect, useRef } from 'react'

export default function WebAuthn() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between border-b border-accent-2">
      <Container>
            <div className="flex mx-auto flex-col lg:flex-row items-center text-left justify-center">
                <div className="text-lg lg:text-2xl text-center lg:text-left p-8 lg:w-2/3">
                    <DistortText />
                </div>
                <div className="flex flex-col p-8 md:m-8 lg:w-1/3 border bg-black text-white">
                    <h1 className="text-xl lg:text-2xl pb-2">This text is jumbled on purpose.</h1>
                    <p className="pb-2">I want to demonstrate a new auth protocal called <a className="text-blue-300" href="https://auth0.com/blog/introduction-to-web-authentication/" target="_blank">WebAuthn</a>.</p>
                    <p className="pb-2">To unlock the text, connect a <a className="text-blue-300" href="https://www.nytimes.com/wirecutter/reviews/best-security-keys/" target="_blank">USB authenticator</a>, or make sure your device has a built in one like <a className="text-blue-300" href="https://support.apple.com/en-us/HT208108" target="_blank">Face ID</a>, and enter a username or email address below.</p> 
                    <WebAuthnDemo />
                </div>
          </div>
      </Container>
    </section>
  );
}

export async function getServerSideProps() {
    const data = "";
    return {props: { data }}
}

function WebAuthnDemo() {
    let [authState, setAuthState] = useState('unregistered'); // unregistered, registered, authenticated
    let [user, setUser] = useState('');

    return (
      <form className="flex flex-col">
        <input
          className="p-2 text-black"
          placeholder="Username or email"
          value={user}
        ></input>
        <a
          onClick={RegisterCredential}
          className="bg-red-600 hover:bg-white hover:text-black border border-red text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mt-4 lg:mb-0"
        >
          Register
        </a>
      </form>
    );
}

function RegisterCredential() {
    var emailAddress = document.forms["TestInfo"]["emailAddress"].value;
    var displayName = document.forms["TestInfo"]["displayName"].value;

    // Registration args object
    var createCredentialDefaultArgs = {
        publicKey: {
            rp: {
                name: "Patrick-WebAuthn-TestApp"
            },
            authenticatorSelection: {
                "requireResidentKey": false,
                "userVerification": "discouraged"
            },
            user: {
                id: new Uint8Array(16),
                name: emailAddress,
                displayName: displayName
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
        }
    };

    return navigator.credentials.create(createCredentialDefaultArgs)
        .then((cred) => {
            console.log("NEW CREDENTIAL", cred);
            rawID = cred.rawId;
            document.getElementById("registration").textContent = "Success!";
        })
        .catch((err) => {
            console.log("ERROR", err);
            document.getElementById("registration").textContent = "Failure :(";
        });
}

function Authenticate() {
    var rawID = null;

    var idList = [{
        id: rawID,
        transports: ["usb", "nfc"],
        type: "public-key"
    }];

    // Login args object
    var getCredentialDefaultArgs = {
        publicKey: {
            timeout: 90000,
            // allowCredentials: [newCredential] // see below
            challenge: new Uint8Array([ // must be a cryptographically random number sent from a server
                0x79, 0x50, 0x68, 0x71, 0xDA, 0xEE, 0xEE, 0xB9, 0x94, 0xC3, 0xC2, 0x15, 0x67, 0x65, 0x26, 0x22,
                0xE3, 0xF3, 0xAB, 0x3B, 0x78, 0x2E, 0xD5, 0x6F, 0x81, 0x26, 0xE2, 0xA6, 0x01, 0x7D, 0x74, 0x50
            ]).buffer
        },
    };

    getCredentialDefaultArgs.publicKey.allowCredentials = idList;

    return navigator.credentials.get(getCredentialDefaultArgs)
        .then((assertion) => {
            console.log("ASSERTION", assertion);
            document.getElementById("authentication").textContent = "Success! Public Key Cred ID - " + assertion.id;
        })
        .catch((err) => {
            console.log("ERROR", err);
            document.getElementById("authentication").textContent = "Failure :(";
        });
}



function DistortText(props) {
    let text = 'The Web Authentication API (also known as WebAuthn) is a specification written by the W3C and FIDO, with the participation of Google, Mozilla, Microsoft, Yubico, and others. The API allows servers to register and authenticate users using public key cryptography instead of a password. WebAuthn is part of the FIDO2 framework, which is a set of technologies that enable passwordless authentication between servers, browsers, and authenticators. As of January 2019, WebAuthn is supported on Chrome, Firefox, and Edge, and Safari.'
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