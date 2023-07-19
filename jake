#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir/node" ]; then
  "$basedir/node"  "$basedir/../jake/bin/cli.js" "$@"
  ret=$?
else 
  node  "$basedir/../jake/bin/cli.js" "$@"
  ret=$?
fi
exit $ret
