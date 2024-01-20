
# Climate App

## Description

Climate App is a modern, responsive web application designed to provide real-time weather information. Built with React and Vite, this app delivers a fast, efficient, and engaging user experience. Utilizing the OpenWeather Map API, it offers accurate and up-to-date weather data including temperature, humidity, wind speed, and more for locations worldwide.

## Features

- Real-time weather data retrieval.
- Search functionality for finding weather by city.
- Display of temperature, humidity, wind speed, and other weather parameters.
- Responsive design for desktop and mobile devices.

## Technologies

- React: A JavaScript library for building user interfaces.
- Vite: A modern frontend build tool.
- OpenWeather Map API: A service providing comprehensive weather data.

## Installation

To set up the Climate App locally, follow these steps:

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/climate-app.git
   cd climate-app
   ```

2. **Install Dependencies**

   Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

3. **API Key Configuration**

   Sign up for an API key at [OpenWeather Map](https://openweathermap.org/api).

   Create a `.env` file in the project root and add your API key:

   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key
   ```

4. **Run the Application**

   Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

To use the Climate App, simply enter the name of the city in the search bar and hit enter. The app will display the current weather details for the selected location.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for more information.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any queries or suggestions, please reach out to [Your Name] at [your.email@example.com].
