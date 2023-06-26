import React, { createRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import products from '../../data'


const Search = () => {
    const [searchSuggestions, setSearchSuggestions] = useState([])
    const navigate = useNavigate()
    const searchInput = createRef()


    // search suggestion
    const searchSuggestionProvider = async (e) => {
        const searchedProductName = e.target.value.toLowerCase()
        if (searchedProductName.length > 0) {
            const searchMatch = products.filter(product => product.title.toLowerCase().includes(searchedProductName)).slice(0, 10)
            setSearchSuggestions(searchMatch)
        } else {
            setSearchSuggestions([])
        }
    }

    // searching product
    const searchProduct = (e, product) => {
        e.preventDefault()
        if (product?.id) {
            console.log(product)
            searchInput.current.value = product.title
            searchInput.current.focus = false
            navigate(`/product/${product.id}`, { state: product })
        } else {
            navigate(`/search-results?sk=${searchInput.current.value}`)
        }
        setSearchSuggestions([])
    }

    return (
        <form onSubmit={searchProduct} className={"w-full relative"}>
            <div className={searchSuggestions.length == 0 ? 'rounded-full flex overflow-hidden h-[35px]' : 'rounded-t-[15px] flex overflow-hidden h-[35px]'}>
                <input ref={searchInput} onBlur={() => setSearchSuggestions([])} onChange={searchSuggestionProvider} type="text" className='flex-grow bg-gray-100 h-full px-4 outline-0 font-bold ' placeholder='Search...' />
            </div>
            <div className='absolute bg-[white] w-full rounded-b-xl'>
                <div className='px-4'>
                    {searchSuggestions.map(product => {
                        const x = <div onMouseDown={(e) => e.preventDefault()} onClick={(e) => searchProduct(e, product)} key={product.id} className='h-[40px] font-bold cursor-pointer hover:bg-2 py-[5px]'>
                            <div className='flex'>
                                <img src={product.images[0]} className='w-[30px] h-[30px] overflow-hidden mr-4' alt="" />
                                <p>{product.title.slice(0, 20)}</p>
                            </div>
                        </div>
                        return x
                    })}
                </div>
            </div>
        </form>
    );
};

export default Search;