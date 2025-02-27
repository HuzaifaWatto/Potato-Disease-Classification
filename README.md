# 🍂 Potato Disease Classification using CNN

This project focuses on **classifying potato leaf diseases** using **Convolutional Neural Networks (CNN)**. The model is trained to identify three categories:

- **Healthy leaves**  
- **Leaves with Early Blight disease**  
- **Leaves with Late Blight disease**

The goal of this project is to **develop an AI-powered system that can assist farmers and agricultural experts in detecting potato diseases through simple leaf images**, enabling early intervention and better crop management.

---

## 📂 Dataset

The dataset used for this project is the **PlantVillage Dataset**, available on Kaggle:  
🔗 [PlantVillage Dataset - Kaggle](https://www.kaggle.com/datasets/arjuntejaswi/plant-village)

It contains images of healthy potato leaves and leaves affected by Early Blight and Late Blight, making it ideal for training a classification model.

---

## 🔬 Project Workflow

1. **Data Preprocessing:** Resizing, normalization, and augmentation.
2. **Model Selection:** Custom CNN architecture.
3. **Training & Validation:** Using appropriate loss functions and optimizers.
4. **Evaluation:** Assessing accuracy, confusion matrix, and learning curves.
5. **Results:** High classification accuracy with strong generalization.

---

## 📊 Results

- **Training Accuracy:** ~98%  
- **Validation Accuracy:** ~96%

The trained model effectively differentiates between **healthy and diseased leaves**, even under varying conditions.

---

## 🔗 Medium Blog

I have documented the entire process, including dataset insights, model design, training, and evaluation, in this detailed **Medium blog post**:  
📝 [Read the Full Blog on Medium](https://medium.com/@huzaifawatto/potato-disease-classification-using-convolutional-neural-networks-cnn-da6f48c1899a)

---

## 🎥 YouTube Walkthrough

For a **step-by-step explanation** of the project, check out my YouTube video:  
▶️ [Watch the YouTube Video](https://youtu.be/tCKP7PN3vpQ?si=BuN5rZ1v4BxuSUsR)

---

## 🚀 Future Scope

- **Model Deployment:** Convert to a web or mobile app for real-time disease detection.
- **Expand Dataset:** Collect more real-world data for improved generalization.
- **Multi-Crop Support:** Extend classification to other crops and diseases.

---

## 🧑‍💻 Connect with Me

For more projects and updates, follow me on:  
- **Medium:** [huzaifawatto](https://medium.com/@huzaifawatto)  
- **Kaggle:** [huzaifawatto](https://www.kaggle.com/huzaifawatto)  
- **GitHub:** [HuzaifaWatto](https://github.com/HuzaifaWatto)

---

## Installation
### Backend Installation and Run server
Make sure you installed python v3.12+ (lower version possibly run but did'nt checked)

    cd API
    pip install -r requirements.txt
    py main.py

### Frontend Installation and Run
Make sure you installed node v22+ (lower version possibly run but did'nt checked)

    cd Frontend
    npm install or npm i
    npm run dev

### Directory Map
- [Frontend]() source code for my frontend in reactjs
- [Model]() deep learning model files
- [API]() tf-serving.py for running the server through tensorflow-serving
- [dist]() responsible for running the server in render- 

### For Server Checking
[Check Server Status](http://localhost:8000/ping)

[Server URL](http://localhost:8000/predict)
: `http://localhost:8000/predict`

