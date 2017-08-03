#!/bin/bash
cd ~/Android/Sdk/emulator
emulator @nexus -use-system-libs &
sleep 20
cd ~/dev/password
adb devices && adb reverse tcp:8081 tcp:8081
react-native run-android