import React, { useEffect, useState } from 'react';
import "./Slide.css";

function Slide() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.unsplash.com/photos/?client_id=O1BlWyIOlep7SPSnzVqTTM9wY2YODzBiTjztQrJr8og`);
                if (!response.ok) {
                    throw new Error("Network issue response");
                }
                const result = await response.json();
                setData(result);
                console.log(result);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    const next = () => {
        setCount((prevCount) => (prevCount + 1) % data.length);
    };

    const prev = () => {
        setCount((prevCount) => (prevCount - 1 + data.length) % data.length);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (data.length === 0) {
        return <div>Loading...</div>;
    }
console.log(count);
    return (
        <>
            <div className='container'>
                <div className='imageSlide'>
                    <img src={data[count].urls.small} alt='slide' width="200px" height="200px" />
                </div>
            </div>
            <div className='butn'>
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </>
    );
}

export default Slide;
