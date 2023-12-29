
# PC Builder Backend API

This repository contains the backend API for the PC Builder application. It's built with Express and MongoDB, providing a set of API endpoints for managing PC components and categories.

## Technology Stack

- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database.
- **dotenv**: Zero-dependency module to load environment variables.

## Key Features

- RESTful API endpoints for PC components and categories.
- Connection to MongoDB for data persistence.
- CORS enabled for cross-origin requests.

## API Endpoints

The API provides several endpoints:

- `GET /components` - Retrieves all PC components.
- `GET /categories` - Retrieves all categories.
- `GET /components/:id` - Retrieves a specific component by its ID.
- `GET /products/:category` - Retrieves products by category.

## Installation

To set up this project locally, follow these steps:

### 1. Clone the Repository
git clone https://github.com/your-username/pc-builder-backend.git cd pc-builder-backend

### 2. Install Dependencies : 
npm install
### 3. Environment Setup
Create a `.env` file in the root directory with the following content:
MONGODB_URI=your_mongodb_uri
PORT=5000
Replace `your_mongodb_uri` with your actual MongoDB URI.

### 4. Start the Server : npm start
The server will start running on `http://localhost:5000/`.

## Author

-   **Name**: Imam Hossain
-   **Email**: [imamhossain6t9@gmail.com](imamhossain6t9@gmail.com)
-   **GitHub**: [Github Link](https://github.com/imam-hossain-wd)
