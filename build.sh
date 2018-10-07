#!/usr/bin/env bash

NOW=$(date +%Y%m%d%H%M%S)
PROJECT_NAME="techblog"
BEANSTALK_NAME="techBlog"

VERSION=11
S3_BUCKET="elasticbeanstalk-ap-northeast-2-674632797140"
S3_REPO_PATH="s3://${S3_BUCKET}/"

build(){
    BUILD_VERSION_NAME=${PROJECT_NAME}-${NOW}-${VERSION}
    echo "build start...."
    mkdir build
    BUILD_FILE="${BUILD_VERSION_NAME}.zip"
    zip -r "${BUILD_FILE}" .ebextensions .npmrc next.config.js package.json postcss.config.js routes.js server.js static .next
    mv "${BUILD_FILE}" ./build/
    s3_upload "${BUILD_FILE}"
}

s3_upload(){

 FILE_NAME="$1"
 OPTION=""
 aws s3 cp "./build${FILE_NAME}" "${S3_REPO_PATH}" ${OPTION}
 s3_version_mapping ${FILE_NAME}
}

s3_version_mapping(){
  S3_KEY="$1"

 aws elasticbeanstalk create-application-version \
     --application-name "${BEANSTALK_NAME}" \
     --version-label "${PROJECT_NAME}-${NOW}" \
     --description "${VERSION}-build-success" \
     --source-bundle S3Bucket="${S3_BUCKET}",S3Key="${S3_KEY}" \
     --auto-create-application
}


build