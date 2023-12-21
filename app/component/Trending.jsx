// components/TrendingGifs.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles.module.css'

const Trending = () => {
    const [gifs, setGifs] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const fetchTrendingGifs = async () => {
            try {
                const response = await axios.get(
                    'https://api.giphy.com/v1/gifs/trending',
                    {
                        params: {
                            api_key: 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65',
                            offset: offset,
                            limit: 4,
                        },
                    }
                );

                setGifs(response.data.data);
            } catch (error) {
                console.error('Error fetching Giphy API:', error);
            }
        };

        fetchTrendingGifs();
    }, [offset]);

    const handleNextPage = () => {
        setOffset((prevOffset) => prevOffset + 4);
    };

    const handlePrevPage = () => {
        setOffset((prevOffset) => Math.max(prevOffset - 4, 0));
    };

    return (
        <div className={styles.container} style={{display:"flex",flexDirection:"column"}}>
                <h1 style={{fontWeight:"bold", marginBottom:"1.2rem"}}>Trending GIFs</h1>
            <div className={styles.main} style={{padding:"2rem"}}>
                <div style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
                    {gifs.map((gif) => (
                        <img
                            key={gif.id}
                            src={gif.images.fixed_height.url}
                            alt={gif.title}
                        />
                    ))}
                </div>
                <div style={{width: "55%",display: "flex",justifyContent:"space-between",marginTop:"4rem",marginBottom:"2.9rem"}} >
                    <button onClick={handlePrevPage} disabled={offset === 0}>
                        Previous
                    </button>
                    <button onClick={handleNextPage} >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Trending;
