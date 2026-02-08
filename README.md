# DoneIt– Full-Stack Task Management System

**DoneIt** is a **Full-Stack Task Management System** built using the MERN Stack. It helps users manage projects and tasks efficiently with secure authentication, authorization, and a clean dashboard UI.

---

## 🚀 Demo

> 🌐 Live Demo: 👉 [View DoneIt](https://doneit-ecru.vercel.app/)

---

## 🛠️ Tools Used

| Tool | Description |
|------|-------------|
| ![MongoDB](https://img.icons8.com/color/24/mongodb.png) **MongoDB** | NoSQL Database for storing Products |
| ![Express](https://img.icons8.com/ios/24/express-js.png) **Express.js** | Backend API framework |
| ![React](https://img.icons8.com/color/24/react-native.png) **React** | Frontend UI library |
| ![Node.js](https://img.icons8.com/color/24/nodejs.png) **Node.js** | Server-side JavaScript runtime |
| ![TailwindCSS](https://img.icons8.com/color/24/tailwindcss.png) **TailwindCSS** | Modern, responsive UI styling |
| ![VSCode](https://img.icons8.com/color/24/visual-studio-code-2019.png) **VS Code** | Code editor |


---

## 🌟 Features

- 🔐 Authentication & Security – JWT-based Register, Login & Logout with bcrypt password hashing
- 👤 User Profile Management – Secure user profiles with protected access
- 📁 Project Management – Create, update, delete, and manage projects effortlessly
- 📝 Task Management System – Add, edit, delete tasks under specific projects
- 🔄 Task Status Tracking – Organize tasks as Todo, In Progress, or Done
- 🚦 Task Priority Levels – Manage priorities with Low, Medium, and High labels
- 📊 Dashboard Overview – View project lists and task statistics at a glance
- 🎨 Responsive UI – Clean, modern interface built with Tailwind CSS

---

## 🖼️ Overview 

<img width="1920" height="1080" alt="Screenshot 2026-02-04 155155" src="https://github.com/user-attachments/assets/cd1d205a-503f-4971-b0db-034c6ad0a4bc" />

<img width="1920" height="1080" alt="Screenshot 2026-02-04 155144" src="https://github.com/user-attachments/assets/70bd8812-53ba-4be1-a866-c47efec6993c" />

<img width="1920" height="1080" alt="Screenshot 2026-02-04 155023" src="https://github.com/user-attachments/assets/fcd375f6-3ed6-4855-b9dd-cb7974dae386" />

<img width="1920" height="1080" alt="Screenshot 2026-02-04 155039" src="https://github.com/user-attachments/assets/2a713a68-31a0-4e8e-83bb-d8250f1bcab9" />

<img width="1920" height="1080" alt="Screenshot 2026-02-04 155054" src="https://github.com/user-attachments/assets/df5457d5-02eb-4878-867a-b9e88f568a7f" />

<img width="1920" height="1080" alt="Screenshot 2026-02-04 155106" src="https://github.com/user-attachments/assets/9ccf6aa9-e911-4d25-9d17-3e1af51e417b" />

<img width="1920" height="1080" alt="Screenshot 2026-02-04 155120" src="https://github.com/user-attachments/assets/c7d25ec0-7da3-45ce-b007-b18c31df65ec" />


---

## 🚀 Getting Started

### 🔐 Environment Variables Setup

1. Create a `.env` file in the **backend** folder:
   ```env
   
   PORT=5000
   MONGO_URI=your_mongo_uri

   JWT_SECRET=your_access_token_secret
   JWT_EXPIRE=7d

   NODE_ENV=development
   REACT_APP_API_URL=your_react_app_api_url
   
3. Add .env to .gitignore to keep it private.
4. Restart your dev server after setting these variables.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14+)
- **npm**
- **MongoDB** Atlas account

### Installation

 🧬 Clone the repository:
   ```bash
   git clone https://github.com/Kundan696922/doneit.git
   cd doneit
   ```

🔧 Run the Backend
   ```bash
   cd backend
   npm install
   npm run dev
   ```

💻 Run the Frontend
   ```bash
   cd frontend
   npm install
   npm run dev
