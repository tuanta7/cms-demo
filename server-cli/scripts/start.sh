#!/bin/bash 

cd ./apache-tomcat/bin

./magnolia_control.sh start --ignore-open-files-limit && tail -f ../logs/catalina.out 