#!/bin/bash 

cd ./travel-demo-community-webapp-6.4.5/apache-tomcat-10.1.54/bin

./magnolia_control.sh start --ignore-open-files-limit && tail -f ../logs/catalina.out 