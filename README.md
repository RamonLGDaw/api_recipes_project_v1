# Recipes API

REST API developed with **NestJS** for managing cooking recipes.  
This is **version 1** of the project, focused on a basic CRUD for recipes using **MongoDB Atlas** as the database.

The project is designed as a foundation for future extensions, including **users, authentication, and authorization**.

---

## Demo (Production)

- **API base URL:**  
  https://api-recipes-project-v1.onrender.com/api/v1

- **Swagger (interactive documentation):**  
  https://api-recipes-project-v1.onrender.com/docs

---

## Project Overview

Recipes API allows you to:

- Create recipes
- Retrieve all recipes
- Retrieve a recipe by ID
- Update a recipe
- Delete a recipe

Each recipe includes:
- Name
- Preparation instructions
- List of ingredients
- Creation and update timestamps

The database is hosted on **MongoDB Atlas**, and the backend is deployed on **Render**.

---

## 🛠️ Tech Stack

- **Backend:** NestJS (Node.js + TypeScript)
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Validation:** class-validator
- **API Documentation:** Swagger (OpenAPI)
- **Deployment:** Render
- **Version Control:** Git + GitHub

---

## Local Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/RamonLGDaw/api_recipes_project_v1.git
cd api_recipes_project_v1
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Environment variables
Create a `.env` file in the root of the project:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/recipesdb
```

> The `.env` file **must not be committed** to the repository.

---

### 4️⃣ Run the project in development mode
```bash
npm run start:dev
```

The API will be available at:
```
http://localhost:3000/api/v1
```

Swagger:
```
http://localhost:3000/docs
```

---

## API Endpoints (v1)

### 🔹 Get all recipes
```http
GET /api/v1/recipes
```

---

### 🔹 Get recipe by ID
```http
GET /api/v1/recipes/:id
```

---

### 🔹 Create recipe
```http
POST /api/v1/recipes
```

---

### 🔹 Update recipe
```http
PATCH /api/v1/recipes/:id
```

---

### 🔹 Delete recipe
```http
DELETE /api/v1/recipes/:id
```

---

## Roadmap

### Current version (v1)
- [x] Recipes CRUD
- [x] MongoDB Atlas
- [x] Swagger
- [x] Deployment on Render

### Future versions
- [ ] Users
- [ ] Authentication (JWT)
- [ ] Roles & permissions
- [ ] Private / public recipes
- [ ] Tests (unit & integration)

---

## Author

Project developed by **Ramonlg.daw** as a practical exercise to consolidate backend development skills with NestJS and MongoDB.

---

## Final Notes

- Swagger is available for technical testing and exploration
- This README describes the **overall vision and usage** of the project
- The project is actively evolving

---

If you find this project useful or interesting, feel free to explore the code and follow its evolution.
