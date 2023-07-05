import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../main-components/ProductCard';

const SearchResults = () => {
    const [searchParams, setSearchPararms] = useSearchParams()
    const [results, setResults] = useState()
    const firstWordOfSearch = searchParams.get("sk").split(' ')[0];
    useEffect(() => {
        axios
            .post("http://192.168.1.104:5000/search", { searchWord: firstWordOfSearch })
            .then(res => setResults(res.data.serachResults))
    }, [])
    return (
        <div className='grid grid-cols-4 mx-4 gap-4'>
            {
                results?.map(product => <ProductCard productData={product} key={product._id} />)
            }
        </div>
    );
};

export default SearchResults;