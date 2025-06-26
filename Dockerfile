# Usa imagen oficial de Node
FROM node:20

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos de dependencias primero
COPY package*.json ./

# Instala dependencias dentro del contenedor
RUN npm install

# Ahora copia el resto del código
COPY . .

# Expone el puerto que usa tu app
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
