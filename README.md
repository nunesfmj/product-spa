# 💼 Product SPA

A single-page application (SPA) built with **React**, **TypeScript**, and **Redux** to manage a list of products. It supports full CRUD operations and can be run locally using Node.js or inside containers using Docker and Docker Compose.

---

## 📊 Tech Stack

* **React** (no CRA)
* **Redux** (vanilla)
* **TypeScript**
* **Webpack**
* **Jest** + **Testing Library**
* **Docker** / **Docker Compose**

---

## 📦 Requirements

To run the project, ensure you have the following installed:

* [Node.js](https://nodejs.org/)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Project Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd product-spa
```

### 2. Install dependencies (Node.js)

```bash
npm install
```

---

## 🔠 Run Locally with Node.js

1. Start the development server:

```bash
npm start
```

2. Open your browser:

```
http://localhost:3000
```

---

## 🐳 Run with Docker

### Build the Docker image:

```bash
docker build -t product-spa:latest .
```

### Run the container:

```bash
docker run -p 3000:80 product-spa:latest
```

---

## 🐙 Run with Docker Compose

### Start services:

```bash
docker-compose up --build
```

This will build the image and start the front-end container (and API if configured).

### Stop services:

```bash
docker-compose down
```

---

## 🧪 Run Tests

Run unit and integration tests using Jest:

```bash
npm test
```

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

---

## 📁 Folder Structure

```
.
├── src/
│   ├── components/       # React components
│   ├── redux/            # Redux store, actions, reducers
│   ├── types/            # TypeScript types
├── public/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📜 License

This project is licensed under the MIT License.
