import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
    const {searchText} = useParams()
    const [results, setResults] = useState()
    const firstWordOfSearch = searchText.slice(0, searchText.indexOf(' ') + 1)
    const data = axios.get
    return (
        <div>
            
        </div>
    );
};

export default SearchResults;