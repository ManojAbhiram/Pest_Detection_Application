import tempfile
import cv2
import numpy as np
import os
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS  # Import Flask-CORS
import requests
import base64
import concurrent.futures
import random
from keras.models import load_model
from PIL import Image

app = Flask(__name__)
# Configure CORS to allow requests from 'http://localhost:3000'
CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}})

model = load_model(r'C:\Users\DELL\Documents\Projects\Pest_Detection_Final\Pest_Detection\server\finalmodel3.h5')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        print("here")
        # Get the video file from the request
        image_file = request.files['selectedFile']
        print(image_file)

        if 'selectedFile' not in request.files or image_file.filename == '':
            return jsonify({'error': 'No image provided'})

        image = Image.open(image_file)
        image = image.resize((256, 256))

        npimage = np.array(image)
        print("np:", npimage)
        fimage = npimage / 255.0

        predictions = model.predict(np.expand_dims(fimage, axis=0)).tolist()
        print("Pred", predictions)

        # Find the index of the maximum value in predictions

        return jsonify({'predictions': predictions})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
