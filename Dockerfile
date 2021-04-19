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
    && apt-get install git -y \
    && pwd \
    && ls / \
    
COPY . /jitsi-ui/
RUN  cd /jitsi-ui/ \
    && ls /jitsi-ui/ \
    && npm install \
    && make
