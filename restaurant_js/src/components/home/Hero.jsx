import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SearchForm from '../SearchForm';
import SearchFoodNamePopup from './SearchFoodNamePopup';

const Hero = () => {
    const [info , setInfo] = useState({});
    const [showFoodNamePopup , setShowFoodNamePopup] = useState(false);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const { data } = await axios('http://localhost:5000/get_infodetails');
                setInfo(prev => data);
            } catch (error) {
                console.log('Fetch Info Error,' , error);
            }
        }
        fetchInfo();
    }, []);

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

    function formatNumber (labelValue) {
        return Math.abs(Number(labelValue)) >= 1.0e+9
        ? (Math.abs(Number(labelValue)) / 1.0e+9) + "B"
        : Math.abs(Number(labelValue)) >= 1.0e+6
        ? (Math.abs(Number(labelValue)) / 1.0e+6) + "M"
        : Math.abs(Number(labelValue)) >= 1.0e+3
        ? (Math.abs(Number(labelValue)) / 1.0e+3) + "K"
        : Math.abs(Number(labelValue));
    
        // For Adding decimal
        // ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
    }

    return (
        <section className="home" id='home'>
            <div className="container">
                <h1>Find <span>Top Foods</span>&nbsp; From Local Restaurants</h1>
                <SearchForm />
                <div className="home-icons">
                    <div className="box">
                        <div className="img">
                            <img src="images/fact-icon1.png" alt="" />
                        </div>
                        <div className="text">
                            <h2>{formatNumber(info?.restaurants)}</h2>
                            <span>Restaurant</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="svgs/cities.svg" alt="" />
                        </div>
                        <div className="text">
                            <h2>{formatNumber(info?.cities)}</h2>
                            <span>Cities</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="svgs/reviews.svg" alt="" />
                        </div>
                        <div className="text">
                            <h2>{formatNumber(info?.reviews)}</h2>
                            <span>Reviews</span>
                        </div>
                    </div>
                    {/* <div className="box">
                        <div className="img">
                            <img src="images/fact-icon4.png" alt="" />
                        </div>
                        <div className="text">
                            <h2>235</h2>
                            <span>Regular users</span>
                        </div>
                    </div> */}
                </div>
                <div className='search-foodName' onClick={() => {
                    setShowFoodNamePopup(true);
                }}>
                    <button>Search For Restaurants By Food Instead!</button>
                </div>
                { 
                    showFoodNamePopup && 
                    <SearchFoodNamePopup 
                    setShowFoodNamePopup={setShowFoodNamePopup}
                    />
                }
            </div>
        </section>
    )
}

export default Hero