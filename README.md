# 📝 Velora– Full-Stack E-Commerce Web App

**DoneIt** is a **Full-Stack Task Management System** built using the MERN Stack. It helps users manage projects and tasks efficiently with secure authentication, authorization, and a clean dashboard UI.

---

## 🚀 Demo

> 🌐 Live Demo: 👉 [View Velora](https://doneit-jttb7vfuu-kundans-projects-0fb18e7d.vercel.app/)

---

## 🛠️ Tools Used

| Tool | Description |
|------|-------------|
| ![MongoDB](https://img.icons8.com/color/24/mongodb.png) **MongoDB** | NoSQL Database for storing Products |
| ![Express](https://img.icons8.com/ios/24/express-js.png) **Express.js** | Backend API framework |
| ![React](https://img.icons8.com/color/24/react-native.png) **React** | Frontend UI library |
| ![Node.js](https://img.icons8.com/color/24/nodejs.png) **Node.js** | Server-side JavaScript runtime |
| ![TailwindCSS](https://img.icons8.com/color/24/tailwindcss.png) **TailwindCSS + DaisyUI** | Modern, responsive UI styling |
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

<img width="1280" height="720" alt="velora" src="https://github.com/user-attachments/assets/c1afbccb-c894-4573-a2a4-8aef921289c2" />

<img width="1280" height="720" alt="velora2" src="https://github.com/user-attachments/assets/1bdf8bb7-41d3-47b7-9c2f-13fa81d1443a" />

<img width="1280" height="720" alt="velora3" src="https://github.com/user-attachments/assets/0b5267af-d78b-4008-af7d-fcb357c2823e" />

<img width="1280" height="720" alt="velora4" src="https://github.com/user-attachments/assets/496b091d-d8d1-40ff-93a4-16bc46174d46" />

<img width="1280" height="720" alt="velora5" src="https://github.com/user-attachments/assets/1cefefa0-c5d1-4a1a-941e-ace172a95962" />


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
   cd velora
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
