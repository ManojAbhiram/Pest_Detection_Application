# 🐛 Pest Detection Application

A full-stack web application that detects crop pests from uploaded images using a deep learning model. Built with a **React frontend** and a **Python Flask backend**, this project aims to assist farmers in identifying common pests like Shoot Borer, Termites, Thrips, and Tussock Caterpillar.

---

## 🧩 Project Structure

## 📂 Project Structure

Pest_Detection_Application/
├── client/                  # React frontend
│   ├── public/              # Static files (HTML, icons, manifest)
│   └── src/                 # Source code
│       ├── components/      # Reusable UI components
│       ├── images/          # Static image assets
│       └── pages/           # Main page components (e.g., Home.jsx, Anomalies.jsx)
│       ├── App.js
│       ├── index.js
│       └── tailwind.config.js
├── server/                  # Python backend
│   ├── app.py               # Main Flask app
│   ├── Download.py          # Image download or processing logic
│   ├── test.py              # Script to test the model
│   ├── Validation.py        # Validation logic
│   └── finalmodel3.h5       # Trained ML model (Keras)
├── Pests/                   # Dataset folders
│   ├── shoot borer/
│   ├── Termites/
│   ├── Thrips/
│   └── Tussock Caterpillar/
