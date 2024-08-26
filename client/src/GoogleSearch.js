import'./GoogleSearch.css';
import React, { useState } from 'react';
import Button from './Button';
import TextArea from './TextArea';
import axios from 'axios';

const GoogleSearch = () => {
  const [queries, setQueries] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQueries(event.target.value);
  };

  const searchGoogle = async () => {
    const API_KEY = 'AIzaSyAtfmP2JZeigwhoTsb85ScLL3l7gEn-2K4'; 
    const CX = 'a5574ce6b45504fe8'; 

    const searchResults = [];
    const queriesArray = queries.split('\n').map(query => query.trim()).filter(query => query !== '');

    for (const query of queriesArray) {
        const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${CX}&searchType=image&num=3`;
        try {
        const response = await axios.get(url);
        const items = response.data.items || [];
        const links = items.map(item => item.link);
        searchResults.push({ query, links });
      } catch (error) {
        console.error(`Error fetching results for "${query}":`, error);
      }
    }

    setResults(searchResults);
  };

  return (
    <div className='Container'>
      <h4>Google Search Results</h4  >
     <div className='Box' >
     <TextArea
        value={queries}
        onChange={handleInputChange}
        rows="5"
        cols="20"
        placeholder="Enter each search query on a new line"
      />
     </div>
      
      
      <br />
      <Button onClick={searchGoogle}>Search</Button>
      {results.map((result, index) => (
        <div key={index}>
          <h3>Results for "{result.query}":</h3>
          <ul>
            {result.links.map((link, i) => (
              <li key={i}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GoogleSearch;