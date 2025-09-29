import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../features/productSlice';
import Spinner from '../main-components/Spinner';

const AddProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const uploadProductPic = (e) => {
        e.preventDefault()
        document.getElementById("getFile").click()
    }
    
    const fileNameUpdate = (e) => {
        if (e.target.files[0].type.includes("image")) {
            document.getElementById('error').innerText = ""
            document.getElementById('placeholderButton').innerHTML = e.target.files[0].name
        } else {
            document.getElementById('error').innerText = `Error: Only Images are allowed!!!`
            document.getElementById('error').style.color = "red"
            document.getElementById('placeholderButton').innerText = "Upload again!!!"
        }
    }
    
    const addProductData = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const price = e.target.price.value
        const description = e.target.description.value
        const productPic = e.target.productPic.files[0]
        const formData = new FormData()
        formData.append("title", title)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("productPic", productPic)
        dispatch(addProduct(formData))
        navigate("/")
    }
    
    return (
        <>
            <p className='font-bold text-[25px] mt-20 mb-12 text-center'>Add a Prouct To Database</p>
            <div className='flex justify-center' >
                <form onSubmit={addProductData} encType="multipart/form-data" className='w-[80%] lg:w-[40%]'>
                    <label className='font-bold'>Title</label>
                    <input type="text" name='title' className='my-2 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full' />
                    <div className='my-4'>
                        <label className='font-bold'>Upload Product Photo</label>
                        <input type="file" id='getFile' name='productPic' onChange={fileNameUpdate} className='hidden' />
                        <button id="placeholderButton" onClick={uploadProductPic} className='bg-3 px-2 py-1 rounded-md font-bold text-[white] ml-2'>Upload</button>
                        <div id='error' className='text-red'></div>
                    </div>
                    <label className='font-bold'>Description</label>
                    <textarea type="text" name='description' className='my-2 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full h-[150px]' />
                    <label className='font-bold'>Price (Taka)</label>
                    <input type="text" name='price' className='my-2 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full' />
                    {/* <div style={{ color: "red" }}>{data?._id ? "" : data?.message}</div> */}
                    <input type="submit" value='Create Product' className='cursor-pointer bg-3 hover:bg-blue-700 text-[white] font-bold py-2 px-4 rounded' />
                </form>
            </div>
        </>
    );
};

export default AddProduct;