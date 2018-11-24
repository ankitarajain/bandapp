# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/ankita
WORKDIR /usr/src/ankita

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/ankita/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/ankita/package.json
RUN npm install

# add app
COPY . /usr/src/ankita

# start app
CMD npm start
