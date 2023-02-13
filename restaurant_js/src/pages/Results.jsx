import React from 'react'
import SearchForm from '../components/SearchForm';
import '../styles/results.css';
import { useRestaurantsContext } from '../context/restaurantsContext';
import { useEffect } from 'react';
import { useNavigate , useSearchParams } from 'react-router-dom';

const Results = () => {
    const navigate = useNavigate();
    const { restaurants , setRestaurants } = useRestaurantsContext();
    const [searchParams, setSearchParams] = useSearchParams();
    const food_name = searchParams.get("food_name")
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('restaurants').length > 0)){
            setRestaurants(() => JSON.parse(localStorage.getItem('restaurants')))
        }
    }, [])

    return (
        <div className='results-container'>
            <div className='search-form '>
                <SearchForm />
            </div>
            <div className='results'>
                <h3>Results</h3>
                {
                    restaurants?.length > 0 
                    ? 
                    <div className="results-grid">
                        {
                            restaurants?.map(res =>(
                                <div key={res?.id} className='results-grid-item'
                                onClick={() => food_name ? '' : navigate(`/top-foods/${res?.id}`)}
                                >
                                
                                    <div className="results-grid-item-content">
                                        <h4>{res?.restaurant_name}</h4>
                                        <p> 
                                        <span style={{ 
                                            color : 'black',
                                            fontWeight : '500'
                                        }}>Address: </span> 
                                        {res?.restaurant_address}</p>
                                        {
                                            food_name 
                                            ? 
                                                <span> Food , {res?.food}</span>
                                            : 
                                            <span> City , {res?.restaurant_city}</span>
                                        }
                                        
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    : 
                        <div className='not-found'>No Item Found.</div>
                }
            </div>
            
        </div>
    )
}

export default Results