#!/bin/sh

if [ "$1" != "" ]; then
  if [ -e "./packages/$1/package.json" ]; then
    ./node_modules/rimraf/bin.js $1/es $1/lib

    ./node_modules/@babel/cli/bin/babel.js ./packages/$1/src --root-mode upward --out-dir ./packages/$1/es
    BABEL_ENV=commonjs ./node_modules/@babel/cli/bin/babel.js ./packages/$1/src --root-mode upward --out-dir ./packages/$1/lib
  else
    echo "Package $1 was not found"
  fi
else
  for f in packages/*; do
    package=`basename $f`

    if [ -d "$f" ] && [ -d "$f/src" ] && [ -e "$f/package.json" ]; then
      echo "$f will be compiled now."
      ./node_modules/rimraf/bin.js $f/es $f/lib

      ./node_modules/@babel/cli/bin/babel.js $f/src --root-mode upward --out-dir $f/es
      BABEL_ENV=commonjs ./node_modules/@babel/cli/bin/babel.js $f/src --root-mode upward --out-dir $f/lib
    fi
  done
fi
