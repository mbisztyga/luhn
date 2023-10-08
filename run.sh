#!/bin/bash

gnome-terminal -- bash -c "cd ./generator && ./mvnw spring-boot:run"
gnome-terminal -- bash -c "cd ./validator && ./mvnw spring-boot:run"
gnome-terminal -- bash -c "cd ./front && npm start"