#!/usr/bin/env bash

NOW=$(date +%Y%m%d%H%M%S)
PROJECT_NAME="TechBlog"
VERSION=4

build(){
    BUILD_VERSION_NAME=${PROJECT_NAME}_${NOW}_${VERSION}
    echo "build start...."
     zip -r "${BUILD_VERSION_NAME}.zip" .ebextensions .npmrc next.config.js package.json postcss.config.js routes.js server.js static .next

}

build