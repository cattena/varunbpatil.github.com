---
layout: post
title: "Linux command line tools and tricks - Part 2"
tags:
- linux
- computers
- programming
---

Hope you enjoyed the first part of my Linux tools and tricks. Here, I give you few more interesting commands and tools for daily use and for fun.

#### Securely delete files so that they can't be recovered

We have all seen movies where federal departments are able to recover data from hard drives of cons. If only they knew how to use linux. Linux allows you to completely destroy previous data by overwriting it with all zeroes/nulls, making it impossible to recover, no matter how much government funding the person trying to recover your data receives. And the process couldn't have been more simpler.
        
        $ dd if=/dev/zero of=<file_to_delete>;sync;rm -f <file_to_delete>

If you remember, we had used the "dd" command to create a bootable usb in part 1 of my Linux hacks. There is a special file in linux by the name /dev/zero which contains nothing but zeroes. However, this is not a physical file on disk, and is generated on the fly. So, the file size you are trying to delete securely doesn't matter. The "sync" command just flushes the output buffers. Up to this step you have only overwritten the file on the disk. You can view it with your favorite editor, but all you will see is junk data. Now it is safe to remove the file using the normal "rm" command.

#### Recording a super-high quality screen-cast from the command line

Let us get straight down to business with the command.

        $ ffmpeg -f x11grab -r 30 -s 1366x768 -i :0.0 \
          -vcodec libx264 -vpre lossless_ultrafast \
          -crf 0 -threads 0 /tmp/output.mkv

Looks complicated, but really very easy to break it down. 

-f x11grab tells ffmpeg that the input will be from the x11 windowing system. x11 is simply a standard for GUI.

-r 30 tells the frame rate which in this case will be 30 fps.

-s 1366X768 tells the size of the screen to record. Please be sure to specify a resolution suitable for your computer, otherwise you will get an error.

-i :0.0 tells ffmpeg to record from your display. This is required because there can be multiple monitors attached. This is nothing but the value of a shell variable by the name $DISPLAY. You can say "$ echo $DISPLAY" to confirm it on your machine.

-vcodec specifies the video codecs to use.

-vpre specifies some video presets... to make the video recording lossless.

The other options can be ignored. The last argument is the file name where the screen-cast will be stored.

#### Using pushd and popd to navigate directories

we are all familiar with the cd command to navigate directories. But power users use something else in addition. They are pushd and popd. The commands and what they do are super simple.

        $ pushd <dir_name>

The above command will push the present working directory onto a stack and then automatically cd to '<'dir_name'>'.        

When you are done with the new directory, if you want to get back to the old one, without having to type in the name, you just do

        $ popd

That's it. You are in your previous working directory. This method can be used to navigate between commonly used directories.        

You can view the current directory stack at any time using the command

        $ dirs -l -p -v

The above command displays the number of the directory on the stack as well. You will notice that, always, the current directory will be on the stack regardless of whether you use pushd or popd. You can use these numbers to cd to a specific directory on the stack like so

        $ popd +2   

This will cd to the second directory on the stack(from the top of the stack).        

You can clear the entire contents of the directory stack with

        $ dirs -c

#### Share any directory with any user via a web browser        

First, cd to the directory that you want to share with others and then enter this simple command.

        $ python -m SimpleHTTPServer

Now, ask the other person to open a web browser and enter the URL as follows.

        <IP_addr_of_your_machine>:8000

You can easily find out the IP addr of your machine using the "$ ifconfig" command.

Now the other user should be able to see the contents of your directory and all subdirectories recursively, in a simple text interface.

#### Translate an English sentence to speech in other language and play it on your speakers

This is a simple hack which uses Google Translate and google tts(text to speech) to convert any English sentence into another language and play the speech on your computer's speakers. The disadvantage at this moment is that Google Translate does not have support for text to speech conversion for many languages. However, for those languages that do have tts support, you can have fun trying them. For example, the following command speaks out the phrase "I will sleep" in Russian !!!

        $ wget -q -O - -U Mozilla \
        'http://translate.google.com/translate_tts?tl=ru&q=I will sleep' \
        | mpg123 -q -

We have seen in Part 1 of Linux tools and tricks that wget is used to download files off the internet. It does the same thing here are well. Only this time, the output wont be written to a file, but to standard output. This is specified using the -O - option. Of course, you would not want some mp3 non-ascii symbols to ruin your terminal. That is why we use the -q option to quiet the wget command. -U specifies the user-agent that the web server will see, or in simple words, the name of the web browser. We are cheating the web server into believing that the request is coming from a Mozilla browser. The parameters following the ? are GET request parameters. One of them is tl which specifies the language you want the sentence translated into. The second GET request parameter is q which specifies the sentence to translate. The order of the parameters may be interchanged without any problem, and you can specify any English sentence and any language(provided that language has tts support) The second GET request parameter is q which specifies the sentence to translate. The order of the parameters may be interchanged without any problem, and you can specify any English sentence and any language(provided that language has tts support). Now, all we are doing is piping the output to another program by the name mpg123 that can play the mp3 stream that it receives from the standard output of wget. You will have to install the mpg123 program on your computer for this hack to work. Happy translating :)

#### Taking a screen-shot when print-screen does not work

        $ chvt 7; sleep 10; import -display :0.0 -window root image.png

Let us break down the command.

chvt 7 means change to virtual terminal 7. If you have noticed while using linux that there are many virtual terminals that you can access by pressing CTRL-ALT-F1 to CTRL-ALT-F7. CTRL-ALT-F7 is usually the virtual terminal that is running the x11 windowing system. That is where you would want to take your screen-shot.

sleep 10 means do nothing(sleep) for 10 seconds. This gives you 10 seconds the position the window of which you want the screen-shot to be taken in the foreground. You can adjust this to your liking, just do not make it too low.

The next command simply imports the contents from your display into a file named image.png in the directory from which you executed the command.

As in the screen-casts command that you saw previously :0.0 refers to your display. You can see this by typing "$ echo $DISPLAY".

Simple, and guaranteed way to take a screen-shot no matter which linux box you are using.

<br />
<br />
<br />
<br />
<br />
<br />
<br />

__Stay tuned for more additions to this page.__
