import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import RestaurantsContextProvider from './context/restaurantsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RestaurantsContextProvider>
            <App />
        </RestaurantsContextProvider>
    </React.StrictMode>,
)
