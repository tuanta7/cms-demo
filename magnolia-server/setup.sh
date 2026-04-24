#!/bin/bash 

curl -s "https://get.sdkman.io" | bash

source "$HOME/.sdkman/bin/sdkman-init.sh"
# source "/home/tuanta/.sdkman/bin/sdkman-init.sh"

sdk install java 17.0.12-zulu
sdk home java 17.0.12-zulu

export JAVA_HOME="$(sdk home java 17.0.12-zulu)"

npm install @magnolia/cli -g
mgnl help
