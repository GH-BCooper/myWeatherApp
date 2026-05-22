# 🌦️ Weather App

A modern weather application built using JavaScript and the OpenWeather API.  
Users can search for any city and instantly view real-time weather information such as temperature, humidity, wind speed, and weather conditions.

---

## 🚀 Features

- Real-time weather data
- Search weather by city name
- Dynamic weather icons
- Error handling for invalid cities
- Keyboard support using Enter key
- Responsive and clean UI

---

## 🌍 Weather Information Displayed

- Current temperature
- Real feel temperature
- City name
- Humidity
- Wind speed
- Weather condition icon

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Vite
- OpenWeather API

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_API_KEY=your_api_key
VITE_API_URL=your_api_url

⚙️ How It Works
API Request

The app sends a request to the weather API using:

fetch(apiURL + cityName + `&appid=${apiKey}`)
Weather Data Processing

The JSON response is used to update:

Temperature
Humidity
Wind speed
City name
Weather icons
Error Handling

If the city is not found:

An error message is displayed
Weather details are hidden
Search Functionality

Users can:

Click the search button
Press the Enter key

Both trigger a weather search.





Weather-App/
│
├── index.html
├── style.css
├── main.js
├── .env
│
├── assets/
│   └── images/
│       ├── clear.png
│       ├── clouds.png
│       ├── drizzle.png
│       ├── mist.png
│       ├── rain.png
│       └── snow.png
│
└── README.md



▶️ How to Run
1. Clone the Repository
git clone YOUR_REPOSITORY_LINK
2. Install Dependencies
npm install
3. Start Development Server
npm run dev
4. Open in Browser
Visit the local server URL shown in the terminal.