Proyecto Final Backend III - Adopciones de Mascotas 🐶🐱

## Descripción 📄

Este proyecto es una API REST para la gestión de usuarios, mascotas y adopciones. Forma parte del curso Backend III y fue desarrollado con Node.js, Express, MongoDB y Docker.

---

## Tecnologías 🛠

- Node.js
- Express
- MongoDB + Mongoose
- Docker
- Swagger (Documentación)
- dotenv (variables de entorno)
- Jest / Supertest (tests funcionales)

---

## Instalación 🔧

1. Clonar el repositorio:
git clone https://github.com/MatiasArias97/proyectobekendIII.git cd
2. Instalar dependencias:


npm install

3. Configurar el archivo .env con tu URL de conexión a MongoDB:

mongoose.connect('mongodb+srv://usuario:password@cluster0.xxxxxx.mongodb.net/proyectoFinal?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, });

4. Iniciar el servidor:



npm start


---

Documentación Swagger 📘

La documentación del módulo de usuarios está disponible en:

> http://localhost:3000/api/docs


---

Docker 🐳

1. Construir la imagen:

docker build -t beeckendiii .

2. Correr el contenedor:

docker run -p 3000:3000 beeckendiii

3. Imagen publicada:

> https://hub.docker.com/r/ariasmatias97/beeckendiii

---

Scripts útiles

Test funcional

npm test


---

Endpoints principales

GET /api/users - Obtener usuarios

GET /api/pets - Obtener mascotas

POST /api/adoptions - Solicitar adopción

GET /api/docs - Documentación Swagger



---

Autor

Matías Arias
Proyecto Final Backend III