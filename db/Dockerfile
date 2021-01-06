FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD pwd123 
ENV MYSQL_DATABASE sls_db
ENV MYSQL_USER docker  
ENV MYSQL_PASSWORD password

EXPOSE 3307

COPY ./init.sql /docker-entrypoint-initdb.d