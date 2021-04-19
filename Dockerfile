ARG JITSI_REPO=jitsi
FROM ${JITSI_REPO}/base

WORKDIR /jitsi-ui

RUN apt install curl -y \
    && cd ${WORKDIR} \
    && curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh \
    && bash nodesource_setup.sh \
    && sudo apt-get install -y nodejs \
    && sudo apt-get install gcc g++ make -y \
    && apt install git -y \
    && npm install \
    && make
