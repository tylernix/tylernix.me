---
title: 'How to modify your keyboard to improve efficiency'
excerpt: 'Navigate, delete, and select text without ever removing your hands from your keyboard home row keys.'
coverImage: '/assets/blog/modify-keyboard-to-improve-efficiency/cover.jpg'
date: '2022-12-12T05:35:07.322Z'
author:
  name: Tyler Nix
  picture: '/assets/blog/authors/tyler.jpeg'
ogImage:
  url: '/assets/blog/modify-keyboard-to-improve-efficiency/cover.jpg'
---

If you work on computers all day (like I do), you type on a keyboard A LOT. And for many people, you don’t think twice about it...until the day it starts to become painful. I decided to modify specific keys on my keyboard so that I can navigate, delete, and select without ever removing my hands from my [“home row”](https://simple.wikipedia.org/wiki/Home_row) keys.

My very first job out of college was with ExxonMobil. And one of the things they did very well was teach you to take care of yourself while working on a computer. Thanks to ExxonMobil, I continue to type on a [Microsoft Sculpt Ergonomic keyboard](https://a.co/d/cDDi7Rd) to this day because the arc of the keyboard follows the natural curve of your fingers while resting at a desk. And I place my [Logitech MX Ergo Trackball mouse](https://www.amazon.com/Logitech-Ergo-Wireless-Trackball-Mouse/dp/B0753P1GTS) right next to it coupled with an [IMAK wrist cushion](https://www.amazon.com/IMAK-A10165-Wrist-Cushion-IMAA10165/dp/B005XWR5NA). It’s a great setup.

But as you continue to slam key after key for hours and hours, you realize that the keyboard has some flaws, especially if you are using it to write code.

1. If you use the arrows keys to navigate around the screen, you must to move your hand off the “home row” keys to use them. This movement because cumbersome and can lead to [Repetitive Strain Injuries](https://simple.wikipedia.org/wiki/Repetitive_strain_injury) if you do it enough.
1. In order to do anything fancy from your keyboard, like copy-paste, text highlighting, or delete whole words (or lines), you need to use the CTRL, OPTION/ALT, or CMD keys. Using these keys can feel like playing Twister with your fingers at times.

<mark>But what if I told you you **could** do all of this without leaving your home row keys?</mark>

I began to rethink how I could use my keyboard after watching [this video](https://egghead.io/lessons/egghead-save-your-hands-and-save-your-time-rethinking-how-to-use-a-keyboard) by John Lindquist. He essentially wants to

> make your keyboard experience as gentle as possible on your hands so your hands are happier and you work more efficiently. - John Lindquist

I highly recommend his video, but he takes the concept of “keyboard efficiency” way overboard in my opinion, but if that is your thing, definitely do what John does.

I, however, adapted his workflow and made it simpler.

## How to modify your keyboard to improve efficiency

Unfortunately, you need an Apple Mac computer for this to work because this setup uses two tools that are Mac specific.

[Karabiner-Elements](https://karabiner-elements.pqrs.org/) is a “powerful and stable keyboard customizer for macOS.” You can set up simple keyboard modification from a Graphical User Interface (GUI), or you can can create complex keyboard modifications using JSON.

The only problem with Karabiner is that they format can be quite verbose. That is where Goku comes in.

[Goku](https://github.com/yqrashawn/GokuRakuJoudo) (technically GokuRakuJoudo) is “a tool that lets you manage your Karabiner configuration with ease.”

It basically turns this JSON

```json
{
    "description": "caps_lock",
    "manipulators": [
        {
            "from": {
                "key_code": "caps lock",
                "modifiers": {
                    "optional": [
                        "any"
                    ]
                }
            },
            "to": [
                {
                    "key_code": "left control"
                }
            ],
            "to_if_alone": [
                {
                    "key_code": "escape"
                }
            ],
            "type": "basic"
        }
    ]
}
```

into this

```edn
{:des "caps_lock" :rules [[:##caps_lock :left_control nil {:alone :escape}]]}
```

then multiply those lines saved by 100s of keys + commands.

## Getting started

1. Install [Karabiner-Elements](https://karabiner-elements.pqrs.org/).

- Karabiner is an application you install on your computer.
- During setup, only enable Karabiner on an external keyboard. That way, if you mess up your keyboard really bad after accidentally saving your karabiner.json file, you can use your internal mac keypad to fix it (or type your password in if you happen to lock yourself out and your keyboard isn’t working). I learned this the hard way. Thank goodness for TouchID!!

2. Install [Goku](https://github.com/yqrashawn/GokuRakuJoudo).

- Goku can be installed via [brew](https://brew.sh/).
- `> brew install yqrashawn/goku/goku`

3. Using your terminal, navigate to `~/.config/`  and create a `karabiner.edn` file inside the folder.

- `> cd ~/.config/`
- `> touch karabiner.edn`

4. If you have VS Code installed, open the folder in a new window using.

- `> code ~/.config/ -r`

5. Copy my starter karabiner.edn file from [https://github.com/tylernix/dotfiles/blob/main/karabiner/karabiner.edn](https://github.com/tylernix/dotfiles/blob/main/karabiner/karabiner.edn) and replace in your karabiner.edn file.

6. After saving the file, run `> goku` in your terminal.

- After setting up Karabiner, you may need to rename `profiles.name`  inside `~/.config/karabiner/karabiner.json` from “Default profile” to “Default” for Goku to work.
- Note: Continue to run `> goku` in your terminal every time you make a change. I prefer this over `> gokuw` because if you mess up your keyboard keys and accidentally CTRL+S (save), it can be hard to type what you need in order to fix your keyboard. Speaking again from experience. :wink:

7. Give it a try! See the instructions below on which keys to use. The world is now at your fingertips.

Obviously you can edit your own karabiner.edn file and create more (see John Lindquist’s [karabiner.edn](https://github.com/johnlindquist/dotfiles/blob/master/karabiner/karabiner.edn) for a more complex example), but I like to keep mine simple.

## Using your new keyboard modifications

There are three types of modes:

1. Movement mode
2. Delete mode
3. Select mode

### Movement mode

Movement mode starts by **holding** the `f` key with your left hand and using your right hand to navigate by **tapping** `j,i,k,l` (instead of using your arrow keys). For example, to move left, hold `f` while tapping `j`. To move right, hold `f` while tapping `i`. It takes some practice, but as you get faster, it gets easier.

Navigate up/down/left/right

- up: `f+i`
- down: `f+k`
- left: `f+j`
- right: `f+l`

Navigate left/right word-by-word

- left: `f+h`
- right: `f+;`

Navigate to front/end of the line

- front: `f+u`
- end: `f+o`

### Delete mode

Delete mode is the same as moving, but...well deleting in that direction. Instead of holding the f key, you will hold the d key. I use this mode the most to quickly fix my typo errors while typing.

Delete character left/right

- left: `d+j`
- right: `d+k`

Delete word left/right

- left: `d+h`
- right: `d+l`

Delete line before/behind

- before: `d+u`
- after: `d+o`

Undo (i.e. CTRL+Z)

- undo: `d+spacebar`

### Select mode

Select mode is helpful the most when coding. Selecting to the front or end of a line or selecting whole lines by moving up or down saves so many manual mouse highlights. Just use movement-mode to get to the spot you need, then use select-mode to highlight.

Select up/down/left/right

- up: `s+i`
- down: `s+k`
- left: `s+j`
- right: `s+l`

Select to front/end of line

- front: `s+u`
- end: `s+o`

---

If you found this helpful, send me an [email](mailto:hey@tylernix.me). I’d love to hear from you.
