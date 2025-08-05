# 📧 Email Sentiment Analyzer

A simple **React** + **Express** project to analyze the sentiment of emails based on their subject and body text.

---

## 🚀 Features

- React frontend with inputs for **Subject**, **Sender**, and **Email Body**
- Basic sentiment analysis logic (Positive, Neutral, Negative) on client side
- Express backend with `/api/email/analyze` POST route for sentiment analysis
- MongoDB connection setup with Mongoose for future use
- Emoji feedback based on sentiment result

---

## 🛠 Technologies Used

- **React** – Frontend UI and state management
- **Express** – Backend server and API routes
- **MongoDB** – Database connection (using Mongoose)
- **Node.js** – JavaScript runtime environment
- **dotenv** – Environment variable configuration

---

## 💻 Code Overview

### React Frontend (App.js)

- Collects user input for email subject, sender, and body
- Uses simple keyword matching for sentiment:  
  - Positive: includes "good", "happy", "great"  
  - Negative: includes "bad", "sad", "poor"  
  - Otherwise Neutral
- Displays sentiment with emojis 😊😐😞

### Express Backend (server.js)

- Connects to MongoDB using `MONGO_URI` from `.env`
- Uses Express to handle JSON requests
- Mounts email routes at `/api/email`

### Email Routes (emailRoutes.js)

- Defines `/analyze` POST endpoint
- Dummy sentiment analysis on `emailText` from request body
- Returns sentiment result and matching emoji as JSON

---

## 📦 Environment Variables

Create a `.env` file in your server folder:


---

## 📖 Usage

1. Start MongoDB server locally or connect to cloud DB.
2. Run Express backend:  
3. Run React frontend:  
4. Open browser at [http://localhost:3000](http://localhost:3000)
5. Enter email details and analyze sentiment!

---




## 📸 Screenshots


![Real-Time-Email-Sentiment-Analyzer_1](https://github.com/Vidya1347/Real-Time-Email-Sentiment-Analyzer-ML-NLP/blob/main/Screenshot%202025-08-05%20212205.png?raw=true)

![Real-Time-Email-Sentiment-Analyzer_2](https://github.com/Vidya1347/Real-Time-Email-Sentiment-Analyzer-ML-NLP/blob/main/Screenshot%202025-08-05%20212134.png?raw=true)


![Real-Time-Email-Sentiment-Analyzer_3](https://github.com/Vidya1347/Real-Time-Email-Sentiment-Analyzer-ML-NLP/blob/main/Screenshot%202025-08-05%20212059.png?raw=true)
git add README.md
git commit -m "Fix screenshot links with GitHub raw URLs"
git push
