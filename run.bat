@echo off
start cmd.exe /K "cd .\generator && .\mvnw spring-boot:run"
start cmd.exe /K "cd .\validator && .\mvnw spring-boot:run"