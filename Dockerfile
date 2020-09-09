FROM node:lts-alpine as develop-stage

ARG uid
WORKDIR /app
RUN chown -R $uid:$uid /app
USER $uid
COPY . .

# build stage
FROM develop-stage as build-stage
RUN yarn build


FROM nginx:1.15.7-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]