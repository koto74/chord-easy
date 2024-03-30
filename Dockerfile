FROM node:20-slim

RUN apt-get update && apt-get install -y git vim locales-all

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

WORKDIR /workdir
