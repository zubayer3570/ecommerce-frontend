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
    let pages = Math.ceil(allProducts.length / 10)
    let pagesTemp = pages
    let currentPage = 1
    while (pagesTemp) {
        arr.unshift(pagesTemp)
        --pagesTemp;
    }
    return (
        <>


            <div className='w-full flex justify-center'>
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-6 lg:mx-4 w-[95%] lg:w-[80%]'>
                    {allProducts
                        ?.slice((paginationState - 1) * 10, (paginationState) * 10)
                        .map(product => <ProductCard productData={product} key={product._id} />)}
                </div>
            </div>

            {/* pagination */}
            <div className='flex justify-center mt-8'>
                {
                    paginationState => 1 ?
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
                    paginationState + 2 < arr.length ?
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