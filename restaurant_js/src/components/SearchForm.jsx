import { useState } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import { useRestaurantsContext } from '../context/restaurantsContext';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const SearchForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [resName , setResName] = useState('');
    const [resCity , setResCity] = useState('');
    const [loading , setLoading] = useState(false);
    const { setRestaurants , cities } = useRestaurantsContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data : { restaurants } } = await axios.get(`http://127.0.0.1:5000/get_restaurants_names?resName=${resName}&resCity=${resCity}`);
            setRestaurants(restaurants);
            localStorage.setItem('restaurants' , JSON.stringify(restaurants));
            setLoading(false); 
            setResName('');
            if(location.pathname === '/result'){
                return;
            }
            navigate('/results');
        } catch (error) {
            setLoading(false);
            console.log('get restaurants name error.' , error)
        }
    }
    return (
        <div className='w-full bg-[#ffbe00] sm:py-4  sm:px-4 px-1 my-8'>
            <form className="flex items-center justify-between sm:gap-2 " onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Restaurant Name" 
                value={resName}
                onChange={e => setResName(e.target.value)}
                required
                className='text-black outline-none sm:p-4 p-2 w-full '
                />
                <input 
                type="list" 
                list='citiesList' 
                placeholder="City" 
                value={resCity}
                onChange={e => setResCity(e.target.value)}
                required
                className='text-black outline-none sm:p-4 p-2 w-full '

                />
                <datalist id='citiesList'>
                    {
                        cities?.map((city, i) => (
                            <option key={i} value={city?.city_name} />
                        ))
                    }
                </datalist>
                <button 
                type="submit"
                className='bg-[#ea1b25] py-4 sm:px-8 px-4 hover:bg-black duration-200 cursor-pointer ease-in-out'
                
                >
                    {loading ? <ClipLoader size={20} color="#fff" /> : 'Search'}
                </button>
                
            </form>
        </div>
    )
}

export default SearchForm