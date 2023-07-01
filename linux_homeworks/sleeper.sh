#!/bin/bash

for run in {1..10}
do
date +“%H:%M:%S”
ps -ef | tail -n +2 | wc -l
sleep 2
done

cat /proc/cpuinfo > cpuinfo
cat /etc/os-release | head -1 | grep 'Amazon' > osinfo
cat /etc/os-release | head -1 | cut -c7-12 >> osinfo

for direct in {50..100}
do
touch $direct
done
