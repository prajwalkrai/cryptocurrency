# Crypto Dashboard Application

## Architecture Choice and Reasoning

This project is a cryptocurrency dashboard that fetches real-time data from the CoinGecko API and displays various information, such as current coin prices, rankings, and market caps. The project uses **React** for the frontend and **React Context API** to manage global state (coin data and currency selection).

- **React Context API**: Used for managing and sharing state (coin data, currency) between multiple components like `Navbar`, `Home`, and `Coin`.
- **useEffect and useState Hooks**: Handle asynchronous API requests and manage the local state of data in the components.
- **React Router**: Facilitates navigation between different pages (Home and individual Coin pages).
- **API**: Data is fetched from the CoinGecko API based on the selected currency.

The application is modular, making it scalable and easy to maintain.

### Features

- Fetches and displays real-time cryptocurrency data.
- Allows users to switch between different currencies (USD, EUR, INR).
- Displays top 10 coins on the homepage.
- Responsive design with easy navigation.
- Individual coin details displayed on separate routes.
  
## Folder Structure

- `Components`: Contains reusable components like `Navbar`, `Footer`, and `LineChart`.
- `Context`: Manages global state using React Context API (`CoinContextProvider`).
- `Pages`: Includes pages like `Home` and `Coin` that display content to the user.

### Project Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.

For detailed setup instructions, refer to the `setup.md` file.
