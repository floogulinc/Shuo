FROM node:4.0-onbuild
MAINTAINER Christine Dodrill <xena@yolo-swag.com>

# Create a non-root user for shuo to run in.
RUN useradd --create-home shuo

# Needed for setup of Node.js
ENV HOME /home/shuo

# Customize this to specify where Shuo puts its data.
# To link a data container, have it expose /home/shuo/data
ENV SHUO_HOME /home/shuo/data

# Expose HTTP
EXPOSE 9000

# Drop root.
USER shuo

# Don't use an entrypoint here. It makes debugging difficult.
CMD node index.js --home $SHUO_HOME
