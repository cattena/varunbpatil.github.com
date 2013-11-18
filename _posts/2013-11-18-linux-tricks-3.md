---
layout: post
title: "Linux command line tools and tricks - Part 3"
tags:
- linux
- computers
- programming
---

Here is another sequel to my [Linux command line tools and trick - Part 1](http://varunbpatil.github.io/2012/09/19/linux-tricks) and [Linux command line tools and tricks - Part 2](http://varunbpatil.github.io/2012/10/01/linux-tricks-2). So, let's get started.

####Using webcam as a mirror

    $ sudo apt-get install mplayer
    $ mplayer -vf mirror -v tv:// -tv device=/dev/video0:driver=v4l2

####Setting wallpaper via command line

    $ sudo apt-get install feh
    $ feh --bg-fill <path to image>

Can be used with startup scripts or login scripts. Especially useful in tiling window managers like [DWM](http://varunbpatil.github.io/2013/09/28/dwm) and [Xmonad](http://varunbpatil.github.io/2013/09/20/xmonad).

####Download pronunciation of an English word as mp3 file

    $ word="apple"; wget http://ssl.gstatic.com/dictionary/static/sounds/de/0/$word.mp3

####Faster sshfs

sshfs can be used to mount a remote directory locally using ssh, and hence comes with the security of ssh as well as the annoying delays in sync :P. So, if you are on an already secure connection, you can speed up sshfs by removing one layer of encryption using socat as below

On the remote server,

    $ sudo apt-get install socat
    $ socat TCP4-LISTEN:7777 EXEC:/usr/lib/sftp-server

On local machine,

    $ sshfs -o directport=7777 remote_hostname:/remote/dir /local/dir

Notice we don't specify a username for the remote machine in the above command.

####Setting up a static IP via command line

Especially useful when you are running lightweight window managers like [DWM]() or [Xmonad]() and do not have a tray applet to control network connections.

    $ sudo ifconfig eth0 10.0.0.1 netmask 255.255.255.0 up

####Scanning for networks via command line

    $ sudo iwlist wlan0 scan   # scan for wireless networks
    $ sudo iwlist eth0 scan    # scan for wired networks
    $ sudo iwconfig wlan0 essid "actual essid" # select network

Again, this is useful if you do not have or do not want a tray applet to control networks (like nm-applet).

####Multiple commands in the background, Important distinction

    $ (command1; command2; command3) &

Here, commands are executed sequentially but all of them are executed in the background.

    $ (command1 & command2) &

Here, command1 is started in the background followed immediately by command2 i.e, command2 does not wait for command1 to complete. Both the commands are still executed in the background. Note that & also performs the function of ; in that it seperates the two commands. Here, $! returns the pid of the process group and not the pid of either command1 or command2.

    $ (command1; command2) &
    $ wait $!

This is how you wait for the group of background tasks to complete in a script.