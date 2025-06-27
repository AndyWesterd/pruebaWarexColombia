
# Prueba Técnica - Desarrollador Full Stack (Node.js, React.js, PostgreSQL)

 El objetivo de la prueba tecnica es generar un JSON estructurado bajo el estándar FEV-RIPS a partir de una base de datos en PostgreSQL, utilizando un backend en Node.js con express y un frontend en React.js.

## Funcionalidades

- Backend en Node.js (Express) que expone el endpoint `GET /api/rips-json/:numFactura`.
- Frontend en React.js que permite consultar ese endpoint y visualizar el JSON.
- Generación de JSON estructurado con información de hasta 10 usuarios y sus respectivos procedimientos.

## Requisitos

- Node.js
- PostgreSQL (con base de datos configurada)

##  |Instalación|

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/pruebaWarexColombia.git
cd pruebaWarexColombia
```

### 2. Backend

```bash
cd backend
npm install
```

- Configura tu archivo `.env` con las variables de entorno de los datos de conexión a la base de datos PostgreSQL:

```env
DB_NAME=tu_basededatos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
```
### 3. Base de datos

- Crea la base de datos directamente en el gestor - Nota(Ya hay datos de prueba directamente en el seeders, las tablas y sus respectivas relaciones se crean automaticamente).

- Ejecuta el servidor backend:

```bash
node app.js
```

### 4. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

## Uso

1. Inicia el backend y el frontend.
2. En el navegador, accede al frontend.
3. Ingresa un número de factura válido.
4. El sistema consultará el backend y mostrará el JSON generado con los usuarios y procedimientos.

