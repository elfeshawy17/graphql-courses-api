# 🚀 Posts Management API (GraphQL + Express + Mongoose)

## 📌 Project Overview
This is a **Posts Management API** built using **GraphQL, Express.js, and Mongoose**. It allows users to perform CRUD operations on **Users** and **Posts**, with a well-structured schema and seamless database integration.

## 🛠️ Technologies Used
- **GraphQL** - For flexible and efficient API queries.
- **Express.js** - Lightweight and fast backend framework.
- **Mongoose** - ODM for MongoDB, making database interactions easy.
- **Node.js** - Runtime environment.

## 📂 Project Structure
```
📦 course-management-api
├── 📂 data
│   ├── 📂 models         # Mongoose models
│   │   ├── dbConnection.js  # Database connection
├── 📂 graphQl
│   ├── 📂 mutations      # GraphQL mutations
│   ├── 📂 queries        # GraphQL queries
│   ├── 📂 schemas        # GraphQL schema definitions
│   │   ├── schema.js     # Main GraphQL schema
├── 📂 node_modules       # Node dependencies (ignored)
├── .env                 # Environment variables
├── .gitignore           # Ignore unnecessary files
├── eslint.config.js     # ESLint configuration
├── package-lock.json    # Dependency lock file
├── package.json         # Project dependencies
├── server.js            # Main entry point
```

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/repo-name.git
cd repo-name
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
### 4️⃣ Start the Server
```sh
npm start
```
The API will be available at: `http://localhost:5000/graphql`

## 🛠️ API Features
- **User Management:**
  - Create, read, update, and delete users.
- **Post Management:**
  - Add, view, update, and delete Posts.
- **GraphQL Queries & Mutations**
  - Supports efficient data fetching and manipulation.

## 🚀 Example GraphQL Queries
### Fetch All Posts
```graphql
query {
  posts {
    id
    title
    body
    author {
      name
    }
  }
}
```
### Create a New User
```graphql
mutation {
  addUser(name: "John Doe", age: "30") {
    name
    age
  }
}
```

## 🛡️ Best Practices Followed
✅ **ESLint & Prettier** for clean code formatting.
✅ **Environment Variables** for secure configuration.
✅ **Modular Structure** for maintainability.
