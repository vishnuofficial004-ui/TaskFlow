# TaskFlow 

TaskFlow is a full-stack web application for managing tasks with user authentication.  
It features a secure backend, a clean frontend, and a dashboard for CRUD operations on tasks.

---

## **Tech Stack**

- **Frontend:** React.js, CSS, Axios, React Router  
- **Backend:** FastAPI, SQLAlchemy  
- **Database:** SQLite (switchable to PostgreSQL)  
- **Authentication:** JWT (JSON Web Tokens)  
- **Security:** Password hashing with bcrypt  

---

## **Features**

- **User Authentication**
  - Register / Login / Logout
  - JWT-based protected routes
- **Dashboard**
  - Display user profile
  - Create, Read, Update, Delete tasks
  - Search and filter tasks
- **Security & Scalability**
  - Hashed passwords
  - JWT token validation
  - Modular project structure
  - Scalable and production-ready

---

## **Backend Setup**

1. Navigate to backend folder:
   cd backend
2. venv\Scripts\activate
3. pip install -r requirements.txt
4. uvicorn app.main:app --reload
5. http://127.0.0.1:8000/docs

## **Frontend Setup**

1. Navigate to frontend folder:
   cd frontend
2. Install dependencies:
   npm install
3. Start frontend:
   npm start
4. Open in browser:
   http://localhost:3000

## **How to Use**

1. Register a new user.
2. Login to access the dashboard.
3. Create tasks using the form.
4. View, edit, toggle status, delete, and filter tasks.
5. Logout securely using the Logout button.

Project Structure
<pre>
TaskFlow/
├── backend/
│   └── app/
│       ├── main.py
│       ├── models/
│       ├── schemas/
│       ├── routes/
│       └── core/
└── frontend/
    ├── src/
        ├── pages/
        ├── components/
        ├── services/
        └── utils/
<\pre>
## **Consideration**
Modular and scalable for production.
Backend & frontend are clearly separated.
Scalability Considerations
Stateless JWT authentication allows horizontal scaling
Database indexing on user_id for faster queries
Modular backend ready for additional APIs/entities
Frontend structure ready for larger features
Can be containerized using Docker and deployed easily

## **Security Practices**

1. Passwords hashed using bcrypt
2. JWT token validation for protected routes
3. Error handling for invalid inputs and server errors

## **Contact**

Project by Vishnu M
Email: vishnuofficial004@gmail.com

