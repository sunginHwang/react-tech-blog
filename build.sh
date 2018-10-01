#!/usr/bin/env bash

NOW=$(date +%Y%m%d%H%M%S)
PROJECT_NAME="TechBlog"
VERSION=4
S3_REPO_PATH="s3://elasticbeanstalk-ap-northeast-2-674632797140/"

build(){
    BUILD_VERSION_NAME=${PROJECT_NAME}_${NOW}_${VERSION}
    echo "build start...."
    mkdir build
    cd ./build
    BUILD_FILE="${BUILD_VERSION_NAME}.zip"
    zip -r "${BUILD_FILE}" ../.ebextensions ../.npmrc ../next.config.js ../package.json ../postcss.config.js ../routes.js ../server.js ../static ../.next

    s3_upload ${BUILD_FILE};
}

s3_upload(){

 FILE_NAME="$1"
 OPTION=""
 aws s3 cp "${FILE_NAME}" "${S3_REPO_PATH}" ${OPTION}
}

build