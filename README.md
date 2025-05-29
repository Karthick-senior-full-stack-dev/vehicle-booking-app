# 🚗 Vehicle Booking App

This is a full-stack application built for a technical assessment. The app allows users to book a vehicle (car or bike) based on their preferences like vehicle type, model, and rental date range.

---

## 📋 Features

- React-based multi-step form with Material UI
- Vehicle types and models dynamically fetched from the backend
- Validations on both frontend and backend
- Prevents booking conflicts by checking vehicle availability
- Seed and migration scripts included for initial database setup

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Material UI
- Tailwind CSS (Utility classes)
- Axios

### Backend:
- Node.js with Express.js
- Sequelize ORM
- PostgreSQL (or any SQL DB as required)

---

## 🗂️ Project Structure

```bash
vehicle-booking-app/
├── backend/
│   ├── migrations/
│   ├── seeders/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
├── README.md
