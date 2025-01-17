ARG JITSI_REPO=jitsi
FROM ubuntu:20.04 as build-stage
VOLUME ["/config", "/usr/share/jitsi-meet/transcripts"]
ADD /config .
RUN ls
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
    && ls / 
    
COPY . /jitsi-ui/
RUN  cd /jitsi-ui/ \
    && ls /jitsi-ui/ \
    && npm install \
    && make
    
EXPOSE 80 443


ENTRYPOINT ["nginx", "-g", "daemon off;"]

#production with Nginx
FROM nginx:1.15
#COPY --from=build-stage  /jitsi-ui/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage  /jitsi-ui/nginx/nginx.conf /etc/nginx/nginx.conf
RUN cat hello
