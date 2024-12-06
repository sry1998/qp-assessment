# Assessment

A simple Grocery App built using **Node.js**, **Express**, **MySQL**, **Sequelize ORM**, **TypeScript**, and **Docker**. This app allows users to manage grocery items, users, and orders in a database.

## Features

- User authentication and management (e.g., sign up, login)
- Add, update, delete, and view grocery items
- Manage orders for grocery items
- Built with **Sequelize ORM** to interact with a **MySQL** database
- Containerized using **Docker** for easier deployment

## Technologies Used

- **Node.js** (Backend)
- **Express** (Web framework)
- **MySQL** (Database)
- **Sequelize** (ORM for MySQL)
- **TypeScript** (Type-safe JavaScript)
- **Docker** (Containerization)

## Getting Started

Follow these steps to get the application running locally or in a Docker container.

### Prerequisites

1. **Docker**: Make sure Docker is installed on your machine.
2. **Node.js**: If you want to run the app without Docker, Node.js should be installed.

### Run the Project

1. Clone the repository
   
git clone repo-url
cd repo-name

3. Set up the environment variables

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-password
DB_NAME=grocery_app
DB_PORT=3306

3. Install dependencies

npm install

4. Run the App

npm run start

OR

Running the App with Docker

1. Build the Docker images
   
   docker-compose build

2. Start the services

   docker-compose up

