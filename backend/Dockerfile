# Use the official MySQL 8.0 image from Docker Hub
FROM mysql:latest

# Environment variables for MySQL configuration
ENV MYSQL_DATABASE=secoms319 \
  MYSQL_USER=secoms319user \
  MYSQL_PASSWORD=secoms319pw \
  MYSQL_ROOT_PASSWORD=adminpw

COPY init.sql /docker-entrypoint-initdb.d/
COPY csv/* /var/lib/mysql-files/

# Expose MySQL default port
EXPOSE 3306

CMD [ "mysqld" ]
