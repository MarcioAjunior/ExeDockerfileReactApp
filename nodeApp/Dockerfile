FROM node:15 as builder

WORKDIR /

COPY . .

RUN apt-get update && apt-get install -y wget

WORKDIR /app

ENV NODE_ENV development


RUN npm run build

FROM nginx:1.15.0-alpine

COPY --from=builder /app/build /usr/share/nginx/html

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

#"nginx" "-g" "daemon off;"