import { useState } from 'react';
import axios from 'axios';
import styles from '../styles.module.css'



const GiphySearch = () => {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [offset, setOffset] = useState(0);
  const [totalPage, setTotalPages] = useState();
  const [pagination, setpagination] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_GIPHY_API_KEY;
  const BASE_URL = 'https://api.giphy.com/v1/gifs';



  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/search`, {
        params: {
          q: query,
          api_key: "GlVGYHkr3WSBnllca54iNt0yFbjz7L65",
          offset: offset,
          limit: 4, // Set the limit to 4 items per page
        },
      });
      setGifs(response.data.data);
      setError('');
      const totalCount = response.data.pagination.total_count;
      setTotalPages(Math.ceil(totalCount / 4));
    } catch (error) {
      console.error('Error fetching Giphy API:', error);
      setGifs([]);
      setError('Error fetching gifs. Please try again.');
    } finally {
      setpagination(true)
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + 4); // Increment by 4 for the next page
    handleSearch();
  };
  const handleSecondPage = () => {
    setOffset((prevOffset) => prevOffset + 8); // Increment by 4 for the next page
    handleSearch();
  };
  
  const handlePrevPage = () => {
    setOffset((prevOffset) => Math.max(prevOffset - 4, 0)); // Ensure offset doesn't go below 0
    handleSearch();
  };

  const currentPage = Math.floor(offset / 4) + 1;

  return (
    <div className={styles.container} >
      <div className={styles.main} >
        <div className={styles.search} id='search'>
          <input
            type="text"
            value={query}
            placeholder="Article name and Keyword..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch} disabled={loading} style={{textAlign:"left"}}>Search</button>
        </div>

        {loading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
          {
            gifs.map((gif) => (
              <img
                key={gif.id}
                src={gif.images.fixed_height.url}
                alt={gif.title}
                style={{ margin: '5px', borderRadius: '5px' }}
              />
            ))}
        </div>
        {
          pagination && (<div className={styles.pagination} style={{marginTop:"3rem",marginBottom:"2rem"}}>
            <button onClick={handlePrevPage} disabled={offset === 0} >
              Previous
            </button>
            {/* <span> page {currentPage} of {totalPage}</span> */}
            <button onClick={handlePrevPage} style={{ width: "1.2rem", height: "1.7rem", backgroundColor: "#FCE5EE", borderBottomWidth: "0.2rem", borderBottomColor: "#F392B9" }} >{currentPage}</button>
            <button onClick={handleSecondPage}>{currentPage+1}</button>
            <button onClick={handleNextPage}>{currentPage+2}</button>
            <button onClick={handleNextPage}>Next </button>
          </div>)
        }
      </div>
      <style jsx>{`
          #search ::placeholder{
            color:#000000
          }
        .loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default GiphySearch;
