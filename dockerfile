FROM nginx:alpine

COPY ./default.conf /etc/nginx/conf.d/

RUN rm -frv /usr/share/nginx/html/*
COPY ./dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
