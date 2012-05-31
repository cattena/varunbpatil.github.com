---
layout: post
title: Behind the scene
tags:
- programming
---
In this article I would like to completely share with you the details of how I created the website you are seeing right now.

####Where did I get the idea and inspiration ?

The first time I heard about [Jekyll](https://github.com/mojombo/jekyll) was on the [about page](http://rkrishnan.org/about.html) of my mentor Ramkrishnan. Then while I started to dig out more information about it, I learnt about its close integration with [Github](https://github.com/) and [Github pages](http://pages.github.com/). Ofcourse, it had to be since Jekyll was created by a person named [Tom Preston-Werner](http://tom.preston-werner.com/) from Github. I had recently used Github pages to create a simple website for my [8th semester B.Tech project](http://varunbpatil.github.com/8th_sem_project_implementation_SVM) and liked the simplicity and beauty of it all. Then I happened to stumble upon a rich set of [sites](https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0CHAQ0gIoATAA&url=https%3A%2F%2Fgithub.com%2Fmojombo%2Fjekyll%2Fwiki%2FSites&ei=EG_KT_fxF4nsrAfQtOG0Dg&usg=AFQjCNGcwhnLKJ2b_VD5m-T6E42gVZVhvQ&sig2=6urBQOcD8OXhWJd5WQfkhw) implemented using jekyll and hosted on Github. I quickly stumbled through all the mentioned sites and decided to try and imitate [this site](http://www.magpielab.com/). Ofcourse, imitation is allowed since all the listed sites are free (Even my site is free to be used by anyone interested in building a quick website with no cost at all. I will tell you shortly how you can easily create your own site using my site's source code as a start point in no time at all). Quickly enough I got to work creating a rough outline for my new website. I also got a lot of implementation help about Jekyll and Liquid from [jekyll-bootstrap](http://jekyllbootstrap.com/).

####What programming languages were used ?

The core programming is done using HTML, CSS, [Markdown](http://daringfireball.net/projects/markdown/basics) and [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers). Of course, you are free to use JavaScript, jQuery... The way it is different from conventional web programming is that the entire site has to be organized in a structure that [Jekyll](https://github.com/mojombo/jekyll/wiki/usage) expects to find. There are folders with pre-defined names into which you will have to put in your files so that Jekyll can locate them. Jekyll is simply a parser which takes Markdown, HTML, CSS, Liquid code and others and generates plain html files for you which you can then deploy on any web server. You can use Jekyll installed on your PC to build the site before you post it to your web-server or simply push the raw files into a repository on Github which then parses you raw code for you which means you don't have to have Jekyll on your PC. Nonetheless, it helps to have Jekyll installed on your machine to test your implementation instead of having to push your code to your Github repository every time you want to test something. Liquid allows fantastic reuse of code (templating) and also has constructs for variable assignment, looping, switch-case, conditional statements and a lot more that is not found in plain HTML. You can actually find all the help needed(all the help I used) in the links highlighted above. I will give links to a few more detailed tutorials shortly.

####Other shiny new bits (not present in my old website) !!!

I am very happy to report some exciting new features that I have succesfully integrated into this website that you can use and that were not found in my [earlier website](http://varunpatil.xtreemhost.com/).

* You can now look at my posts categorized by [tags](http://varunbpatil.github.com/tag/) and also view an [archive](http://varunbpatil.github.com/archive/) of all my previous posts.

* You can now subscribe to my blog posts to instantly get my blog posts on your favourite reader or you can even subscribe by mail where new posts I write get delivered to your mailbox everyday. Don't worry, your email id's and other subscription details are managed by professional programs like feedburner and thus there can be no misuse. You can find the subscription buttons on the bottom of every page in my website or you can simply click on the links below.
<ul>
    <li>
        <a href="http://feeds.feedburner.com/varunbpatil">subscribe via rss reader</a>
    </li>
    <li>
        <a href="http://feedburner.google.com/fb/a/mailverify?uri=varunbpatil&loc=en_US">subscribe via email</a>
    </li>
</ul>

* I have also incorporated disqus comments into my blog posts where you are free to comment and provide feedback by logging into your favorite social networking site.

####Superb quick start links

The following are some of the most useful quick start links I used to get my website up and running in no time at all.

* [Building static sites with Jekyll](http://net.tutsplus.com/tutorials/other/building-static-sites-with-jekyll/)
* [JB Jekyll Introduction](http://studiomohawk.github.com/jekyll-bootstrap/lessons/2011/12/29/jekyll-introduction/)

Of course, if there is anyway I can help you understand the technologies I have used or help you get started with your own website like mine, please to leave a comment below or better even, contact me using the links at the bottom of the page. The best way to get started is to download or fork the [source code](https://github.com/varunbpatil/varunbpatil.github.com) for my website from Github and start experimenting with things. It won't take you long before you get into the groove. That's the way I learnt and that's the way I built this website, period. I hope I have aroused your interest in blogging and web designing through this short article. Any feedback regarding this site is much appreciated.
