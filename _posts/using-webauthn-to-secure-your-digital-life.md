---
title: 'Using WebAuthn to secure your digital life'
excerpt: 'WebAuthn can one day eliminate passwords for good. In the meantime, we can use WebAuthn and hardware security keys to drastically improve the security of our online accounts by using them as a second form of authentication.'
coverImage: '/assets/blog/using-webauthn-to-secure-your-digital-life/webauthn-cover.png'
date: '2021-01-05T05:35:07.322Z'
author:
  name: Tyler Nix
  picture: '/assets/blog/authors/tyler.jpeg'
ogImage:
  url: '/assets/blog/using-webauthn-to-secure-your-digital-life/webauthn-cover.png'
---

Since ancient times, we have used passwords to grant access to privileged information. Guards allow access to buildings if correctly presented with a password. Soldiers exchange passwords and counterpasswords to correctly identity each other. Even 8-year old secret societies allow entry to magical tree forts after declaring the super-duper secret passphrase. And when computers were first invented, how did we decide how to secure them? Passwords! Because, well, that’s all we had.

But if there is anything that we have learned since Robert Morris first started storing login passwords in a hashed form in the 1970s, it is that passwords are messy. They are [hard to remember]( https://www.digitalinformationworld.com/2019/12/new-password-study-finds-78-of-people-had-to-reset-a-password-they-forgot-in-past-90-days.html), [easily guessed](https://nordpass.com/most-common-passwords-list/), and [annoying if leaked]( https://www.pcmag.com/how-to/what-to-do-when-youve-been-hacked). 

## We are getting better
However, in recent years, we have become more clever in securing digital accounts past just passwords. The two most significant things you can do to make yourself more secure online:

1. Use a [Password manager]( https://www.nytimes.com/wirecutter/blog/why-you-need-a-password-manager-yes-you/) to create and store unique passwords for each of your accounts.
2. Turn on [Multi-factor Authentication](https://auth0.com/blog/multifactor-authentication-mfa/) for all your highly sensitive accounts (like your bank and email).

But passwords, those things you and I have to remember if we ever want to use anything on the internet a second time, are still at the heart of the login process. Your password is the single key that proves you are in fact you. If a hacker manages to steal it, they can fully impersonate you unless you are one of the  [28% of users using two-factor authentication.](https://duo.com/blog/state-of-the-auth-experiences-and-perceptions-of-multi-factor-authentication) 

Passwords are messy.

## How can WebAuthn help
As of January 2021, all major browsers like Chrome, Edge, Firefox, and Safari now support the [Web Authentication API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API) meaning <mark>we now have the ability to use Public Key Cryptography to register and authenticate users instead of passwords!</mark> You might be saying to yourself, “Public Key - what??” Don’t worry. You don’t need to understand the underlying technology to use WebAuthn. If that is you, you can skip to the next section. Otherwise, let’s dive into the details.

Public key cryptography is a relatively old concept, but relatively new to user passwords. Ironically, it was invented in the 1970s around the same time our friend Robert Morris was starting to store hashed login passwords. Public key cryptography uses the concept of a key pair; a private key that is stored securely with the user, and a public key that can be shared with the server. These “keys” are long, random numbers that have a mathematical relationship with each other.  This technique essentially became the cornerstone that [secures most of the modern internet](https://robertheaton.com/2014/03/27/how-does-https-actually-work/). However, its brilliance of shared secrets was never really applied to managing user passwords…until now!

The Web Authentication API (also known as WebAuthn) is a [specification](https://www.w3.org/TR/webauthn/)  written by the World Wide Web Consortium (W3C) and The Fast IDentity Online Alliance, known as FIDO, with the participation of Google, Mozilla, Microsoft, Yubico, and others. WebAuthn allows users to authenticate with public key cryptography using one of two options:
* **Roaming authenticators** — These are removable and cross-platform devices, like a [Yubikey](https://www.nytimes.com/wirecutter/reviews/best-security-keys/) that can be used on multiple devices. To authenticate with a roaming authenticator, you simply connect it to the device (through USB, NFC, or Bluetooth), provide proof of presence (e.g., touching it), and optionally an additional authentication factor like a PIN or fingerprint recognition.
* **Platform authenticators** — This option includes the MacBook’s TouchBar, Windows Hello, iOS Touch_FaceId, and Android’s fingerprint_face recognition. Integrated into the device being used, these only work on that device.

In the context of this article, we are focusing on Roaming Authenticators, but just know that WebAuthn enables both, opening up a lot of possibilities for secure user authentication in the future. 

## How to set up and use a security key
What you will need:
* A laptop or desktop
* A modern browser installed, either Chrome, Firefox, Edge, or Safari.
* A hardware security key, the two best options are [Yubikey](https://www.yubico.com/store/#yubikey-5-series) or [Google Titan](https://cloud.google.com/titan-security-key). Mine looks like this:
![Yubikey](/assets/blog/using-webauthn-to-secure-your-digital-life/yubikey.jpg)

**Note:** Before getting started, be aware of what you are about to do. You are about to register a hardware security key as a second form of authentication for your various accounts. <mark>If you do not have this key physically present with you when logging in, you will not be allowed to continue.</mark> It would be wise to enable Two Factor Authentication initially via a Temporary One Time Passcode mobile app like [Authy](https://authy.com/) or using text messages sent to your phone number. This ensures that if you ever lose your security key, you can still use a second form to sign in. If you have not done this yet, you should do this now. 

And if you haven’t downloaded and saved your recovery codes in a secure location like a password manager, you should do that as well. Recovery codes can be used to access your account in the event you lose access to your device and cannot receive two-factor authentication codes.

### How to set up a security key with Google
1. Log in to your [Google](https://myaccount.google.com) account from your browser.
2. Choose `Security` from the options on the left-hand side. 
![](/assets/blog/using-webauthn-to-secure-your-digital-life/google-01-settings.png)

3. Under `Signing in to Google`, select 2-Step Verification.
![](/assets/blog/using-webauthn-to-secure-your-digital-life/google-02-two-step-verification.png)

4. Under the `Add more second steps to verify it’s you` section, choose `Add Security Key`. 
![](/assets/blog/using-webauthn-to-secure-your-digital-life/google-03-add-security-key.png)

5. Choose `USB or Bluetooth` option.  
![](/assets/blog/using-webauthn-to-secure-your-digital-life/google-04-usb-option.png)

6. Follow the instructions to register your security key. 
![](/assets/blog/using-webauthn-to-secure-your-digital-life/google-05-register-security-key.png)

7. Once completed, you should see your named security key as the default option (since it is the most secure) to finish signing in after you enter your password.  
![](/assets/blog/using-webauthn-to-secure-your-digital-life/google-06-registered-key.png)


### How to set up a security key with Twitter
1. Log in to your [Twitter](https://twitter.com) account from your browser.
2. Click on More and choose `Settings and Privacy`. 
![](/assets/blog/using-webauthn-to-secure-your-digital-life/twitter-01-settings.png)

3. Select `Security and account access` and then `Manage your accounts security`. 
4. Select Two-factor authentication. 
5. Click the `Security key` check box.  
![](/assets/blog/using-webauthn-to-secure-your-digital-life/twitter-02-two-factor-authentication.png)

6. Follow the instructions to register and verify your security key by touching it.  
![](/assets/blog/using-webauthn-to-secure-your-digital-life/twitter-03-register-security-key.png)

7. Your key should now be registered with Twitter. 
![](/assets/blog/using-webauthn-to-secure-your-digital-life/twitter-04-registered-key.png)


### How to set up a security key with Github
1. Log in to your [GitHub](https://github.com) account from your browser. 
2. Click on your profile image in the top right, and choose `Settings`. 
![](/assets/blog/using-webauthn-to-secure-your-digital-life/github-01-settings.png)

3. Select `Account Security` then `Add`. 
![](/assets/blog/using-webauthn-to-secure-your-digital-life/github-02-two-factor-authentication.png)

4. Under `Security keys` section, register your new security key. 
![](/assets/blog/using-webauthn-to-secure-your-digital-life/github-03-register-new-security-key.png)

5. Enter a name for this security key.
6. Follow your browser’s steps to register your security key. 
7. Insert your security key into your computer and touch it. 
8. Your key should now be registered with GitHub! 
![](/assets/blog/using-webauthn-to-secure-your-digital-life/github-04-registered-key.png)

It is that easy! You have now made a giant leap in securing your digital life all thanks to WebAuthn.  

On a day-to-day basis, you may not be required to use your hardware key all that often. Services often consider different risk factors to determine whether to require it. Some sites may ask you to enter it when you’re managing what kind of authentication you’re using, while others may ask you to use your key only when you’re logging in from a new computer.

## How to set up security keys for your company
If you manage a company’s customer identity access management, then giving users more secure ways to protect their account can drastically reduce your risk. One of the easiest (and most secure) ways for you to implement WebAuthn with Security Keys for your website is allowing Auth0 to manage it for you. 

A Beta release of Auth0 with WebAuthn support for Security Keys is available starting today. You can enable the second factor in the WebAuthn with Security Keys MFA configuration section of the Auth0 admin dashboard:
![](/assets/blog/using-webauthn-to-secure-your-digital-life/auth0-01-factors.jpeg)

After it is enabled, users will go through the enrollment flow below. At some point, their browser will show a native dialog to ask users to engage the security key. In the example below, we show the Android dialog:
![](/assets/blog/using-webauthn-to-secure-your-digital-life/auth0-02-welcome.jpeg)

The next time they login, the flow will look like this:
![](/assets/blog/using-webauthn-to-secure-your-digital-life/auth0-03-waiting-for-your.jpeg)

## Passwordless future
Now let me give a fair warning, we are still on the cutting edge of this technology. Even though browsers now support it, most companies have been slow to adopt WebAuthn, and where there is support, it is only used as a second form of authentication. In other words, we are still a few years from seeing true passwordless user authentication, but it is a start - a very promising start.

What we need is more people insisting that companies start implementing WebAuthn as a primary form of authentication. And the best way to do that is by demonstrating there is public demand for such feature request by utilizing what is currently offered today.

WebAuthn is an exciting technology, and Auth0 is committed to providing the best possible implementation, maximizing security without sacrificing user experience. Please  [try our Beta](https://auth0.com/docs/mfa/configure-webauthn-with-security-keys-for-mfa)  today and let us know what you think on our  [Feedback page](https://auth0.com/feedback)  or in the  [Auth0 Community](https://community.auth0.com/) .

## About Auth0
Auth0 provides a platform to authenticate, authorize, and secure access for applications, devices, and users. Security and application teams rely on Auth0’s simplicity, extensibility, and expertise to make identity work for everyone. Safeguarding billions of login transactions each month, Auth0 secures identities so innovators can innovate, and empowers global enterprises to deliver trusted, superior digital experiences to their customers around the world.
For more information, visit  [https://auth0.com](https://auth0.com/)  or follow  [@auth0 on Twitter](https://twitter.com/auth0).

