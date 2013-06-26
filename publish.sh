#!/bin/bash
#
# script to build website and push it to github

# create a tmp dir into which jekyll will build the html source
mkdir /tmp/jekyll_build

# build website
jekyll build -d /tmp/jekyll_build/

# publish on github
cd /tmp/jekyll_build
git init
git add .
publish_date=`date`
git commit -m "updated site ${publish_date}"
git remote add origin git@github.com:varunbpatil/varunbpatil.github.com.git
git push origin master --force

# cleanup
rm -rf /tmp/jekyll_build
