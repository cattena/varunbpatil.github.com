---
layout: post
title: "Emacs newbie cheat sheet -- from a vim convert"
tags:
- linux
- git
- vim
- emacs
---

More than a month since my last post, I had to write something. What better to write about than the editor that I tried so hard to learn several times in the past but gave up each time because vim was so much simpler on my brain and my fingers. Nevertheless, I persisted and finally accumulated enough skill to use emacs as my primary editor for all tasks. Although I am light years away from becoming a emacs guru (not that I was a vim guru either :P), the links in this post will help an emacs newbie or a vim convert like me to run before we can learn to walk (if you know what I mean... If you don't, just know that I was watching Iron Man 3 before I started writing this post... Now you know what I mean.. YEAH).

Back on topic, emacs can be daunting for any newbie, more so for a hardened vim user. The hardest problem for an emacs newbie is to know where to start. This was the reason I couldn't bring myself to learn emacs for a long long time. I was aware that there are many excellent vim emulators for emacs, but I wanted a vanilla emacs experience. In the end, I had emacs under my belt (thanks to a few unproductive days at work). I started of with a [base emacs24 configuration](https://github.com/eschulte/emacs24-starter-kit) which gave a solid platform to start. Then, I started building my cheat sheet (that I will share with you in this post) as a way to remember useful emacs features. I scoured the internet to find emacs key-bindings for every vim feature that I had grown so accustomed to. I basically wanted to accomplish everything that I could with vim with emacs instead. I thought I could share some of what I have learned via this post. I have to admit, the cheat sheet that I am going to share with you is not professional or neat, but sure as hell is functional (it works for me). My advice would be to take whatever you can from this cheat sheet and create one of your own, your way. __The rest of this post assumes you are running emacs24__.

####How to run before you can walk

    $ cd ~ ; git clone git@github.com:varunbpatil/emacs_config.git
    $ mv emacs_config .emacs.d

This is it... You are good to start playing in emacs.

The git repository that you just cloned contains a __README__ file which also happens to be my unprofessional, unaesthetic, yet functional cheat sheet that I promised to share.

You can also find the same [emacs24 newbie cheat sheet in raw text here](https://raw.github.com/varunbpatil/emacs_config/master/README) for quick viewing.

__A word of caution__ : Some of the key-bindings mentioned in my cheat sheet are not part of vanilla emacs... They were defined by me in my emacs configuration to make my life simpler. Feel free to go through "~/.emacs.d/starter-kit.el" where you will find the implementation for these custom key-bindings.

<br />
<br />
<br />
<br />
<br />
            
Feel free to drop me a \*message\* below if you don't understand something in my cheat sheet or god forbid, find something totally wrong in my cheat sheet or have a better way of doing something or feel like contributing to my emacs gyan or feel like cursing me for all things emacs.

Most importantly, do check back on this post for more emacs pointers as my emacs gyan continues to grow by the day :)