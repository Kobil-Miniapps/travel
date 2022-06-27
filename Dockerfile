#=> Build container
FROM node:alpine as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build


# production environment
FROM nginx:1.15.2-alpine
COPY --from=build /app/build /usr/share/nginx/html/
RUN rm -rf /etc/nginx/conf.d
COPY ./docker_resources/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
