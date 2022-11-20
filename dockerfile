ARG REGISTRY
######## STAGE PRE-BUILD ########
FROM nexus.elm.sa/node:16.18-alpine as build
WORKDIR /app
ARG npm_config_registry
ARG SASS_BINARY_SITE
ENV npm_config_registry=${npm_config_registry} SASS_BINARY_SITE=${SASS_BINARY_SITE}

COPY . .
RUN npm install && npm run build


######## STAGE RUNTIME ########
FROM nexus.elm.sa/nginxinc/nginx-unprivileged:1.19-alpine as runtime
WORKDIR /usr/share/nginx/html

COPY --from=build /app/build .
EXPOSE 8080

# ENTRYPOINT ["nginx", "-g", "daemon off;"]