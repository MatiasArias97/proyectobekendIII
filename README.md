Proyecto Final Backend III - Pre Entrega

Descripción

Este proyecto consiste en una API REST desarrollada con Node.js, Express y MongoDB (Atlas), que permite:

Generar datos mock de usuarios y mascotas.

Guardar los datos generados en la base de datos.

Consultar los datos de usuarios y mascotas.

Endpoints específicos para mocks bajo /api/mocks.



---

Instalación

1. Clonar el repositorio:



git clone <https://github.com/MatiasArias97/proyectobekendIII.git>
cd <proyectobekendIII>

2. Instalar dependencias:



npm install

3. Configurar la conexión a MongoDB Atlas



Editar el archivo src/app.js

Cambiar la cadena de conexión con la URL de MongoDB Atlas, incluyendo usuario y contraseña.


Ejemplo:

mongoose.connect('mongodb+srv://usuario:password@cluster0.xxxxxx.mongodb.net/proyectoFinal?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


---

Uso

1. Iniciar el servidor:

npm start

2. Probar los endpoints con Postman o programa similar:

Generar datos mock
POST /api/mocks/generateData
Body (JSON):
{
  "users": 50,
  "pets": 20
}

Obtener usuarios
GET /api/users

Obtener mascotas
GET /api/pets

Obtener usuarios mock
GET /api/mocks/mockingusers

Obtener mascotas mock
GET /api/mocks/mockingpets

---

Tecnologías utilizadas

Node.js

Express

MongoDB Atlas

Mongoose

Faker.js

---

Autor

Arias Matias - ariasms1997@gmail.com

---