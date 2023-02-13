import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/resTopFoods.css';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

const ResTopFoods = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [foods , setFoods] = useState([]);
    const [loading , setLoading] = useState(false);

    useEffect(() => {
        const fetchTopFoods = async () => {
            try {
                setLoading(true);
                const { data : { top_foods } } = await axios(`http://localhost:5000/get_top_foods?resId=${id}`);
                setFoods(() => top_foods);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
                toast.error('Something went wrong.')
            }   
        }
        fetchTopFoods();
    }, [])

    return (
        <div className='resTopFoods'>
            <button className='backBtn'
            onClick={() => navigate(-1)}
            >
                <span>Go Back</span>
            </button>
            <div className='results' style={{
                marginTop : "2rem",
            }}>
                <h3>Top Foods</h3>
                {
                    loading 
                    ?
                        <div className='flex-center'>
                            <ClipLoader size={25}  />
                        </div>
                    :
                    foods?.length > 0 
                    ? 
                    <div className="results-grid">
                        {
                            foods?.map(food =>(
                                <div key={food?.id} className='results-grid-item'
                                >
                                
                                    <div className="results-grid-item-content">
                                        <h4>{food?.food}</h4>
                                        <p> 
                                         <span style={{ 
                                            color : 'black',
                                            fontWeight : '500'
                                        }}>Rank : </span> 
                                        {food?.rank}</p>
                                        {/*
                                        <span> City , {res?.restaurant_city}</span> */}
                                        
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

export default ResTopFoods