import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../main-components/ProductCard';
import Spinner from '../main-components/Spinner';
import { useSelector } from 'react-redux';

const SearchResults = () => {
    const { allProducts } = useSelector(state => state.product)
    const [searchParams, setSearchPararms] = useSearchParams()
    const [results, setResults] = useState()
    const firstWordOfSearch = searchParams.get("sk").split(' ')[0];

    if (!allProducts) {
        return <Spinner></Spinner>
    }
    
    return (
        <>
            <p className='text-[25px] font-bold text-center my-4'>Search Results</p>
            <div className='grid grid-cols-4 mx-4 gap-4'>
                {
                    allProducts.map(product => {
                        if (product.title.includes(firstWordOfSearch)) {
                            return <ProductCard productData={product} key={product._id} />
                        }
                    })
                }
            </div>
        </>
    );
};

export default SearchResults;