FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/Chasenitro001/CHA-SE-MD /root/Chasenitro001

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Chasenitro001/node_modules

# Install dependencies
WORKDIR /root/Chasenitro001
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
