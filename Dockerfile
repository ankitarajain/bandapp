# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/ankita
WORKDIR /usr/ankita

# add `/usr/ankita/node_modules/.bin` to $PATH
ENV PATH /usr/ankita/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/ankita/package.json
RUN npm install

# add app
COPY . /usr/ankita

# lint app
CMD npm run lint

# unit test app
CMD npm run unit-test

# start app
CMD npm start
