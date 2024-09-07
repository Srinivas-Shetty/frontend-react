import React, { useEffect, useRef, useState } from 'react'
import backImg from "../imagesApp/back.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { categoriesAction } from '../redux/actions/categoriesActions';
import { addsubcategoriesAction, addSubCategoryDataOfReset, addSUBCategoryDataOfReset } from '../redux/actions/subcategoriesAction';

const AddSubCategory = () => {


    const navigate = useNavigate();

    const [categoryName, setCategoryName] = useState('')
    const [subcategoryName, setsubCategoryName] = useState('')
    const [categorySequence, setCategorySequence] = useState('')
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

   
    // useEffect(()=>{
    //     console.log(categoryName,subcategoryName,categorySequence,image);
    // },[categoryName,subcategoryName,categorySequence,image])


    const fileInputRef = useRef(null);


    const handleClearCategory = (e) => {
        e.preventDefault();
        setCategoryName('')
        setCategorySequence('')
        setsubCategoryName('')
        setImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }

    }

  

    const { categoriesData } = useSelector((state) => state.category);

    const [categoriesDetails, setCategoriesDetails] = useState([]);
    const [error, setError] = useState('');

  


    useEffect(() => {
        dispatch(categoriesAction());
    }, [dispatch]);

    useEffect(() => {
        if (categoriesData?.data) {
            setCategoriesDetails(categoriesData?.data?.data);
        }
        if (categoriesData?.error) {
            setError(categoriesData?.error?.msg);
        }
    }, [categoriesData]);

    const { addsubcategoriesData } = useSelector((state) => state.subcategory);
    // const dispatch = useDispatch();
    
    const handleAddSubCategory = (e) => {
      e.preventDefault();
      dispatch(addsubcategoriesAction(subcategoryName, categoryName, categorySequence, image));
    };
    
    useEffect(() => {
      if (addsubcategoriesData?.data) {
        toast.success(addsubcategoriesData.data.msg);
        dispatch(addSubCategoryDataOfReset())
        navigate('/subcategories')

      }
      if (addsubcategoriesData?.error) {
        toast.error(addsubcategoriesData.error?.msg === 'duplicate key value violates unique constraint "unique_sequence_no"' ? 
          "Sequence number already taken" : 
          addsubcategoriesData.error.msg);
          dispatch(addSubCategoryDataOfReset())
      }
    }, [addsubcategoriesData]);
    

    


    return (
        <div className="px-10">


            <div className="flex justify-start items-center mt-6 gap-3">
                <div>
                    <Link to={'/subcategories'}>
                        <img src={backImg} alt="backImg" />
                    </Link>
                </div>
                <div>

                    <h3 className="font-bold text-lg">Add Category</h3>
                </div>
            </div>



            <div className='mt-7 flex justify-start items-center gap-20'>
                <div className="w-1/3">

                    <div class="mb-4">
                        <label for="countries" class="block text-gray-700 text-sm font-bold mb-2">Category</label>
                        <select
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            id="countries" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value='' selected>Choose a Category</option>
                            {
                                categoriesDetails?.map((items)=>{
                                    return(
                                        <>
                                             <option value={items?.category_name} selected>{items?.category_name}</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>

                </div>
                <div className="w-1/3">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryname">
                           Sub Category Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="categoryname"
                            type="text"
                            placeholder="Category name"
                            value={subcategoryName}
                            onChange={(e) => setsubCategoryName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="w-1/3">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sequence">
                            Category Sequence
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="sequence"
                            type="number"
                            placeholder="Category sequence"
                            value={categorySequence}
                            onChange={(e) => setCategorySequence(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className='mt-7 flex justify-start items-center gap-20'>
                <div className="w-72">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sequence">
                            Image
                        </label>
                        <div className='border radius shadow-lg p-5 '>
                            <img src={image ? URL.createObjectURL(image) : ''} />
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center w-72">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input
                            id="dropzone-file"
                            type="file"
                            class="hidden"
                            ref={fileInputRef}
                            onChange={(e) => { setImage(e.target.files[0]) }}
                        />
                    </label>
                </div>

            </div>

            <div className='mt-5 flex justify-end items-center gap-5'>
                <div>
                    <button onClick={handleClearCategory} type="button" className="w-32 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                </div>
                <div>
                    <button onClick={handleAddSubCategory} type="button" className="w-32 focus:outline-none text-white bg-[#662671] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Save</button>
                </div>
            </div>







        </div>
    )
}

export default AddSubCategory;