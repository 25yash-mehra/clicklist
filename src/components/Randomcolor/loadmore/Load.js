import React, { useEffect, useState } from 'react';
import './Load.css';

function Load() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchApi() {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}&select=title,price`);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const result = await response.json();
            console.log(result);
            setData(prevData => [...prevData, ...result.products]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchApi();
    }, [count]);

    function dikha() {
        setCount(count +1)
    }

    return (
        <>        <div className='product'>
            {data.map((val) => (
                <div key={val.id} className='box'>
                    <div className='list'>
                        <h1>{val.title}</h1>
                        <p>Price: ${val.price}</p>
                    </div>
                </div>
            ))}
        </div>
            <button onClick={dikha}>Loadmore</button>
            </>

    );
}

export default Load;
