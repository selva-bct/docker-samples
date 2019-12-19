# Installing the operating system environment
# FROM ubuntu
 FROM node:10-alpine

# Installing the node, git
# RUN echo "deb http://archive.ubuntu.com/ubuntu precise main universe" > /etc/apt/sources.list
# RUN apt-get update
# RUN apt-get -y install python-software-properties git build-essential
# RUN add-apt-repository -y ppa:chris-lea/node.js
# RUN apt-get update
# RUN apt-get -y install nodejs


# Installing yarn
RUN npm i -g yarn

# Install the dependencies

#ADD package.json /tmp/package.json
#RUN cd /tmp && npm install
#RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
#RUN mkdir -p /opt/app 
WORKDIR /opt/app
ADD . /opt/app
RUN yarn
EXPOSE 8080
CMD [ "yarn", "start" ]

