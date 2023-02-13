import { useContext , createContext , useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const RestaurantsContext = createContext();

export const useRestaurantsContext = () => useContext(RestaurantsContext);

const RestaurantsContextProvider = ({ children }) => {
    const [restaurants , setRestaurants] = useState([]);
    const [cities , setCities] = useState([]);
    
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const { data : { cities } } = await axios('http://localhost:5000/get_cities');
                setCities(() => cities);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCities();
    }, [])

    return (
        <RestaurantsContext.Provider 
            value = {{
                restaurants , setRestaurants ,
                cities , setCities
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    )
}

export default RestaurantsContextProvider;