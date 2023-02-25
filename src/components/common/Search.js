import React, { createRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Search = () => {
    const [searchSuggestions, setSearchSuggestions] = useState([])
    const navigate = useNavigate()
    const searchInput = createRef()

    const searchSuggestionProvider = async (e) => {
        const searchedProductName = e.target.value.toLowerCase()
        if (searchedProductName.length > 0) {
            const products = await axios.get("https://dummyjson.com/products")
            const productNames = products.data.products.map(product => product.title)
            const searchMatch = productNames.filter(name => name.toLowerCase().includes(searchedProductName)).slice(0, 10)
            setSearchSuggestions(searchMatch)
        } else {
            setSearchSuggestions([])
        }
    }

    const searchProduct = (e, productName) => {
        e.preventDefault()
        if (typeof (productName) === "string") {
            navigate(`/search-results/${productName}`)
        } else {
            navigate(`/search-results/${searchInput.current.value}`)
        }
    }

    return (
        <div className='mx-4'>
            <form onSubmit={(e)=> searchProduct(e)}>
                <div className={`flex shadow-md ${searchSuggestions.length == 0 ? 'rounded-full' : 'rounded-t-[15px]'} overflow-hidden h-[35px]`}>
                    <input ref={searchInput} onBlur={() => setSearchSuggestions([])} onChange={searchSuggestionProvider} type="text" className='flex-grow bg-gray-100 h-full px-4 outline-0' />
                    <button onClick={searchProduct} className='bg-gray-100 h-full px-4'>
                        <img className='h-[20px]' src="/search-icon.svg" alt="" />
                    </button>
                </div>
            </form>
            <div className='absolute bg-gray-100'>
                <ul>
                    {searchSuggestions.map(productName => <li onMouseDown={(e) => e.preventDefault()} onClick={(e) => searchProduct(e, productName)} className='h-[30px] font-bold cursor-pointer'>{productName}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default Search;