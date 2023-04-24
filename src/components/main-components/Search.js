import React, { createRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import products from '../../data'
import axios from 'axios'


const Search = () => {
    const [searchSuggestions, setSearchSuggestions] = useState([])
    const navigate = useNavigate()
    const searchInput = createRef()

    const searchSuggestionProvider = async (e) => {
        const searchedProductName = e.target.value.toLowerCase()
        if (searchedProductName.length > 0) {
            // const data = await axios.get("https://dummyjson.com/products")
            // const products = data.data.products
            // const productNames = products.data.products.map(product => product.title)
            // const productNames = products.map(product => product.title)
            const searchMatch = products.filter(product => product.title.toLowerCase().includes(searchedProductName)).slice(0, 10)
            setSearchSuggestions(searchMatch)
        } else {
            setSearchSuggestions([])
        }
    }

    const searchProduct = (e, product) => {
        setSearchSuggestions([])
        // if (e.type == "submit") {
        //     e.preventDefault()
        // } else {

        // }
        if (product?.id) {
            navigate(`/search-results/${product.id}`)
        } else {
            navigate(`/search-results/${searchInput.current.value}`)
        }
        // if (typeof (productName) === "string") {
        //     navigate(`/search-results/${productName}`)
        // } else {
        //     navigate(`/search-results/${searchInput.current.value}`)
        // }
    }

    return (
        <form onSubmit={searchProduct} className={"w-full relative"}>
            {/* <div className={`flex ${searchBarState ? "shadow-first" : "shadow-0"} ${searchSuggestions.length == 0 ? 'rounded-full' : 'rounded-t-[15px]'} overflow-hidden h-[35px]`}> */}
            <div className={searchSuggestions.length == 0 ? 'rounded-full flex overflow-hidden h-[35px]' : 'rounded-t-[15px] flex overflow-hidden h-[35px]'}>
                <input ref={searchInput} onBlur={() => setSearchSuggestions([])} onChange={searchSuggestionProvider} type="text" className='flex-grow bg-gray-100 h-full px-4 outline-0 font-bold ' placeholder='Search...' />
                {/* <button onClick={searchProduct} className='bg-gray-100 h-full px-4'>
                    <img className='h-[20px]' src="/search-icon.svg" alt="" />
                </button> */}
            </div>
            <div className='absolute bg-[white] w-full rounded-b-xl'>
                <ul className='px-4'>
                    {/* {searchSuggestions.map(product => <li onMouseDown={(e) => e.preventDefault()} onClick={() => searchProduct(product)} key={product.id} className='h-[30px] font-bold cursor-pointer'>{product.title}</li>)} */}
                    {searchSuggestions.map(product => <li onMouseDown={(e) => e.preventDefault()} onClick={() => searchProduct(product)} key={product.id} className='h-[30px] font-bold cursor-pointer'>{product.title}</li>)}
                </ul>
            </div>
        </form>
    );
};

export default Search;