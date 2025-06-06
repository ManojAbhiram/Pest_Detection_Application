# 🐛 Pest Detection Application

A full-stack web application that detects crop pests from uploaded images using a deep learning model. Built with a **React frontend** and a **Python Flask backend**, this project aims to assist farmers in identifying common pests like Shoot Borer, Termites, Thrips, and Tussock Caterpillar.

---

## 🧩 Project Structure

Pest_Detection_Application/
├── client/ # React frontend
│ ├── public/ # Static files
│ └── src/ # Source code
│ ├── components/ # UI components
│ ├── images/ # Static images
│ └── pages/ # Pages (e.g., Home.jsx, Anomalies.jsx)
├── server/ # Python backend
│ ├── app.py # Main Flask app
│ ├── finalmodel3.h5 # Trained ML model (Keras)
│ ├── Download.py # Image download
│ ├── test.py # Model testing script
│ └── Validation.py # Input validation or extra logic
├── Pests/ # Dataset
│ ├── shoot borer/
│ ├── Termites/
│ ├── Thrips/
│ └── Tussock Caterpillar/
