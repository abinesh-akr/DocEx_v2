FROM python:3.9-slim

# Install Tesseract
RUN apt-get update && apt-get install -y tesseract-ocr

# Install Python dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN pip install opencv-python
# Copy the rest of your app
WORKDIR /backend

CMD ["python","app.py"]
WORKDIR /backend
CMD ["npm","start"]
