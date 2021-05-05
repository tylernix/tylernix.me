---
title: 'How to solve your ever-growing email inbox'
excerpt: 'The most prevalent critique of modern communications is that we are always connected to our devices. But the problem is not that we are always connected; the problem is that we are always buffered. There is a keen difference.'
coverImage: '/assets/blog/how-to-solve-your-email-inbox/cover.jpg'
date: '2021-02-13T05:35:07.322Z'
author:
  name: Tyler Nix
  picture: '/assets/blog/authors/tyler.jpeg'
ogImage:
  url: '/assets/blog/how-to-solve-your-email-inbox/cover.jpg'
---

The most prevalent critique of modern communications is that we are always connected to our devices. But the problem is not that we are always connected; the problem is that we are always buffered. There is a keen difference.

Social media is waiting to give us updates on other people's lives. Netflix is waiting to recommend our new favorite show. Email is waiting in our inboxes for a response. <mark>Every example is an item in a queue waiting till we give it our attention.</mark> They are not a constant flow of interruptions (except maybe the notifications sent to remind us of our building queue - which you should [turn off](https://www.nytimes.com/2020/02/05/technology/personaltech/control-phone-notifications.html) by the way). 

But what if I told you there is a mathematically optimal solution to this problem? One that is proven to solve the mountain of emails that inevitably stack up in your inbox?

All we have to do is look at the not-so-interesting field of network packet switching, which is essentially a giant queue management problem the size of the internet. In packet switching theory, the tactical 'dropping of items' is actually a critical part of getting things done under overload.

(Oh, good. You are still reading. I thought I might have lost you there for a bit.)

My proposal to handle email overload?

You must essentially become your own [Active Queue Management algorithm](https://en.wikipedia.org/wiki/Active_queue_management) which will 'intelligently drop' emails if your buffer (i.e. the amount of emails in your inbox) gets too full. Statistically speaking, this will actually reduce the time your sender waits to receive a response from you. 
Whether you use a [RED](https://en.wikipedia.org/wiki/Random_early_detection) approach or a [CoDel](https://en.wikipedia.org/wiki/CoDel) approach, you can decide. 

So if you accidentally ‘drop’ an email from your inbox, the sender may just have to reach out to you again at a later time. But don’t worry. Just tell anyone who asks that there is a sophisticated algorithm (i.e. you, but don’t tell them that 😉) working behind the scenes to reduce your email congestion so that your performance output doesn’t plummet into a [bufferbloat](https://en.wikipedia.org/wiki/Bufferbloat) bottleneck. 

Give it a try. Let me know how it goes.

