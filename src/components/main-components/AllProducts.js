import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const AllProducts = () => {
    const [paginationState, setPaginationState] = useState(1)
    const { allProducts } = useSelector(state => state.product)
    if (!allProducts.length) {
        return;
    }
    let arr = [];
    const pages = ((allProducts.length / 8) + (allProducts.length % 8 ? 1 : 0)).toFixed(0)
    let pagesTemp = pages
    while (pagesTemp) {
        arr.unshift(pagesTemp)
        --pagesTemp;
    }
    return (
        <>


            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mx-4'>
                {allProducts?.slice((paginationState - 1) * 8, (paginationState) * 8).map(product => <ProductCard productData={product} key={product._id} />)}
            </div>
            <div className='flex justify-center mt-8'>
                {
                    paginationState < pages ?
                        ""
                        :
                        <button onClick={() => setPaginationState(paginationState - 1)} className='px-3 py-1 m-1 text-[white] font-bold bg-3'>
                            {"<"} Previous
                        </button>
                }
                {
                    arr.map(e => <button onClick={() => setPaginationState(e)} className='px-3 py-1 m-1 text-[white] font-bold bg-3' key={e} >{e}</button>)
                }
                {
                    paginationState < pages ?
                        <button onClick={() => setPaginationState(paginationState + 1)} className='px-3 py-1 m-1 text-[white] font-bold bg-3'>
                            Next {">"}
                        </button>
                        :
                        ""

                }

            </div>
        </>
    );
};

export default AllProducts;