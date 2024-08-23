# Dockerfile-root
FROM node:18 as build
WORKDIR /Single-spa-app/root-config
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

# Copiar los archivos de construcción desde la etapa anterior
COPY --from=build /Single-spa-app/root-config/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



