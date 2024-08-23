# Dockerfile-root
FROM node:18 as build
WORKDIR /Single-spa-app/react-tasks
COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

# FROM nginx:alpine
# # Copiar los archivos de construcción desde la etapa anterior
# COPY --from=build /Single-spa-app/react-tasks/dist /usr/share/nginx/html

# # Copiar la configuración de Nginx
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

CMD ["npm", "start"]