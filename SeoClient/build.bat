@echo off
setlocal enabledelayedexpansion

if "%1"=="" goto usage

SET env=%1

@echo ########## Clear dist folder ##########
if exist dist\ rd /s /q dist\%env%
if exist dist del /f /q dist\%env%
@echo ########## Cleared dist folder ##########

SET env=%1

@echo ########## Starting build for environment %env% ... ##########
call ng build --aot --configuration=production --output-path=dist/%env% || exit /b 1
xcopy /I /Y "web.config" "dist\%env%\" || exit /b 1
@echo ########## Build finished for environment %env% ##########

:usage
@echo Usage: %0 "<environment>"
