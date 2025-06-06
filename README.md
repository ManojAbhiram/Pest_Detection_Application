# 🐛 Pest Detection Application

A full-stack web application that detects crop pests from uploaded images using a deep learning model. Built with a **React frontend** and a **Python Flask backend**, this project aims to assist farmers in identifying common pests like Shoot Borer, Termites, Thrips, and Tussock Caterpillar.


---
<pre><code>```bash Pest_Detection_Application/ ├── client/ # React frontend │ ├── public/ # Static files (HTML, icons, manifest) │ └── src/ # Source code │ ├── components/ # Reusable UI components │ ├── images/ # Static image assets │ └── pages/ # Main page components (e.g., Home.jsx, Anomalies.jsx) │ ├── App.js │ ├── index.js │ └── tailwind.config.js ├── server/ # Python backend │ ├── app.py # Main Flask app │ ├── Download.py # Image download or processing logic │ ├── test.py # Script to test the model │ ├── Validation.py # Validation logic │ └── finalmodel3.h5 # Trained ML model (Keras) ├── Pests/ # Dataset folders │ ├── shoot borer/ │ ├── Termites/ │ ├── Thrips/ │ └── Tussock Caterpillar/ ``` </code></pre>

## ⚙️ Technologies Used

### Frontend
- React
- Tailwind CSS
- Fetch API

### Backend
- Python
- Flask
- TensorFlow / Keras
- NumPy, OpenCV, Pillow

---

## 🚀 Getting Started

### 🔧 Backend Setup

1. Navigate to the server folder:
```bash
cd server
```

2. Create a virtual environment and activate it:
```bash
python -m venv venv
venv\Scripts\activate  # On Windows
```

3. Install required packages:
```bash
pip install flask tensorflow numpy opencv-python pillow
```

4. Run the Flask server:
```bash
python app.py
```

### 🌐 Frontend Setup
1. Navigate to the client folder:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React app:
```bash
npm start
```

### 🧠 Model Info

- **Model Path**: `server/finalmodel3.h5`  
- **Model Type**: Keras (HDF5 format)  
- **Training Data**: Image dataset consisting of various pest categories located under the `Pests/` directory.

📦 **Note:** The trained model file (`finalmodel3.h5`) is **not included in this GitHub repository** due to file size limitations.

🔗 **Download the model manually and place it inside the `server/` directory:**

https://drive.google.com/file/d/1eZobQPU-lgm7_wLyAQQdlO6uQzU3xeSv/view?usp=sharing


