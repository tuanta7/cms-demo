#!/bin/bash 

pid=$(ss -tulpn | grep ':8080 ' | sed -n 's/.*pid=\([0-9]\+\).*/\1/p' | head -n 1)
[ -n "$pid" ] && kill "$pid"
