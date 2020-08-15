# inisialisasi base image dari node
FROM node:14 
LABEL Abda Rafi H <abda_rafi@yahoo.com>
# membuat workdir
WORKDIR /app 
# copy seluruh file yang dibutuhkan ke workdir supaya app berjalan
COPY package.json /app 
COPY yarn.lock /app
RUN yarn install 
COPY . /app 
# menjalankan aplikasi
CMD yarn start 
EXPOSE 3000