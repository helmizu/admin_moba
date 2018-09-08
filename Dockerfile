# build environment
FROM node:8.11.4-alpine as builder
RUN ["mkdir", "-p", "/app"]
WORKDIR /app
COPY . .
RUN ["rm", "-rf", "node-modules"]
RUN ["rm", "-rf", "build"]
RUN ["npm", "install"]
RUN ["npm", "run", "build"]

# production environment
FROM nginx:1.15.3-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]