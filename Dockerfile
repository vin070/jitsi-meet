ARG JITSI_REPO=jitsi
FROM ubuntu:18.04

WORKDIR /jitsi-ui

RUN apt-get update \
    && apt install curl -y \
    && cd ${WORKDIR} \
    && curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh \
    && bash nodesource_setup.sh \
    && apt-get install -y nodejs \
    && apt-get install gcc g++ make -y \
    && apt apt install git -y \
    && git pull https://vin070:vi4neet%40123@github.com/vin070/jitsi-meet.git \
    && npm install \
    && make
