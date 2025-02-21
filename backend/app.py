from flask import Flask, request, jsonify
from aadhar import process_aadhar
from gate import extract_gate
from income import extract_income
from flask_cors import CORS
import os

app = Flask(__name__)

CORS(app) 
    
@app.route('/api/aadhar', methods=['POST','GET'])
def aadhar():
    data = "Abinesh"
    result = (data)
    return result

@app.route('/api/gate', methods=['POST'])
def gate():
    data = request.json
    result = extract_gate(data)
    return jsonify(result)

@app.route('/api/income', methods=['POST'])
def income():
    data = request.json
    result = extract_income(data)
    return jsonify(result)

@app.route('/upload', methods=['POST', 'GET'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded.'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No file selected.'}), 400

    # Save the file to a temporary location
    file_path = os.path.join('uploads', file.filename)
    
    try:
        # Save the uploaded file
        file.save(file_path)

        # Process the uploaded file
        res = process_aadhar(file_path)

        # Optionally, you can delete the file after processing
        # os.remove(file_path)

        return res

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(host='0.0.0.0', port=10000)  # Use port 10000 for Render
