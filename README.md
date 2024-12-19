# Proyecto Node

## Funcionalidades

- **Conexión con MongoDB**: Implementacion de base dedatos en MONGODB, ya desplegada y conectada al proyecto

- **CRUD de usuarios**: Permite crear, leer, actualizar y eliminar usuarios.

- **Autenticación de usuarios**: Permite iniciar sesion.

- **Validación de token de autenticación**: Verifica el token de autenticación.

## Librerías

- **mongoose**: Para manejar base de datos en mongoDB

- **bcryptjs**: Para encriptar contraseñas y validaciones.

- **jsonwebtoken**: Para el manejo de JWT.

## Estructura de Archivos

├── .env
├── .gitignore
├── config/
│   ├── database.js
├── controllers/
│   ├── auth.controller.js
│   ├── users.controller.js
├── index.js
├── middlewares/
│   ├── auth.middleware.js
├── models/
│   ├── user.model.js
├── package-lock.json
├── package.json
├── README.md
├── routes/
│   ├── auth.router.js
│   ├── index.js
│   ├── user.router.js
├── services/
│   ├── auth.service.js
│   ├── user.service.js
├── utils/
│   ├── jwt.util.js
│   ├── password.util.js



## Variables de entorno

MONGODB_URI=mongodb+srv://braian:VW0naUyu5mvmtfT3@cluster0.1anfo.mongodb.net/sps?retryWrites=true
JWT_SECRET=JWtS3creTK3y
HASH_ALG=HS256
