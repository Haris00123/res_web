import React, { useEffect, useRef, useState } from 'react';
import useClickOutside from '../../utils/clickOutside';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useRestaurantsContext } from '../../context/restaurantsContext';

const SearchFoodNamePopup = ({ setShowFoodNamePopup }) => {
    const [foodName , setFoodName] = useState('');
    const [city, setCity] = useState('');
    const formRef = useRef(null);
    const [loading , setLoading] = useState(false);
    const { setRestaurants , cities } = useRestaurantsContext();
    const navigate = useNavigate();
    
    useClickOutside(formRef , () => setShowFoodNamePopup(false));

    useEffect(() => {
        
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data : { restaurants } } = await axios(`http://localhost:5000/search_top_food?Food=${foodName}&resCity=${city}`);
            setRestaurants(restaurants);
            localStorage.setItem('restaurants' , JSON.stringify(restaurants));
            setLoading(false);
            setFoodName('');
            setCity('');
            navigate(`/results?food_name=${true}`)
        } catch (error) {
            setFoodName('');
            setCity('');
            setLoading(false);
            console.log(error);
            toast.error('Something went wrong 😫.');
        }
    }


    return (
        <div className='fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-[#0000009d] z-[999]'>
            <div className='bg-white px-4 py-6 rounded-md md:w-[500px] w-[300px] mx-auto pb-8 shadow-md relative' 
            ref={formRef}
            >
                <div className='absolute top-1 right-2 text-black text-xl cursor-pointer'
                onClick={() => setShowFoodNamePopup(false)}
                >
                    <i className="uil uil-times"></i>
                </div>
                <div className='text-red-600 font-semibold text-xl uppercase '>
                    <h3>Lets Search for Food!</h3>
                </div>
                <form className='mt-8 flex flex-col gap-4' onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Food" 
                    value={foodName}
                    onChange={e => setFoodName(e.target.value)}
                    className='outline-none rounded-full w-full border py-2.5 px-4 text-black focus:border-yellow-500'
                    required
                    />
                    <input 
                    type="list"
                    list='citiesList' 
                    placeholder="City" 
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    className='outline-none rounded-full w-full border py-2.5 px-4 text-black focus:border-yellow-500'
                    required
                    />
                    <datalist id='citiesList'>
                    {
                        cities?.map((city, i) => (
                            <option key={i} value={city?.city_name} />
                        ))
                    }
                    </datalist>
                    <div className='mt-4 '>
                        <button 
                        className="btn-primary w-full" 
                        style={{
                            padding : '10px 1rem' ,
                            fontWeight : "normal"
                        }}
                        type='submit'
                        >
                            {loading ? <ClipLoader size={20} color="#fff" /> : 'Search'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchFoodNamePopup