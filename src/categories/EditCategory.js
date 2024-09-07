import React, { useEffect, useRef, useState } from 'react'
import backImg from "../imagesApp/back.png"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editcategoriesAction, editCategoryDataOfReset, getIdcategoriesAction } from '../redux/actions/categoriesActions';
import { toast } from 'react-toastify';

const EditCategory = () => {

    const [categoryName, setCategoryName] = useState('')
    const [categorySequence, setCategorySequence] = useState('')
    const [image, setImage] = useState(null);
    const [imageDb,setImageDb]=useState(null);
    const [status, setStatus] = useState('');

    const fileInputRef = useRef(null);
    const dispatch = useDispatch();

    const navigate=useNavigate();

    const { getIdCategoriesData } = useSelector((state) => state.category);

    const handleClearCategory = (e) => {
        e.preventDefault();
        setCategoryName(getIdCategoriesData?.data.data.category_name);
        setCategorySequence(getIdCategoriesData?.data.data.sequence_no);
        setStatus(getIdCategoriesData?.data.data.status);
        setImageDb(getIdCategoriesData?.data.data.image);
        setImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }

    }


    const { id } = useParams();
    console.log(id, "id");


    const [categoriesDetailsByid, setcategoriesDetailsByid] = useState([])


    useEffect(() => {

        dispatch(getIdcategoriesAction(id));
    }, [id])




    useEffect(() => {
        if (getIdCategoriesData && getIdCategoriesData?.data) {
            setcategoriesDetailsByid(getIdCategoriesData?.data);
            
            setCategoryName(getIdCategoriesData?.data.data.category_name);
            setCategorySequence(getIdCategoriesData?.data.data.sequence_no);
            setStatus(getIdCategoriesData?.data.data.status);
            setImageDb(getIdCategoriesData?.data.data.image);
        }

    }, [getIdCategoriesData]);


    const {editCategoriesData}=useSelector((state) => state.category);

    // Edit categories starts here
    const handleEditCAtegory=(e)=>{
        e.preventDefault();
        dispatch(editcategoriesAction(categoryName, categorySequence,status,image,id));
    }
console.log(editCategoriesData,"editCategoriesData");


 useEffect(() => {
        if (editCategoriesData && editCategoriesData?.data) {
            toast.success(editCategoriesData?.data?.msg); 
            dispatch(editCategoryDataOfReset());
            navigate('/categories') 
        }
        if (editCategoriesData && editCategoriesData?.error) {
            
            toast.error(editCategoriesData?.error?.msg  ==='duplicate key value violates unique constraint "unique_sequence_no"' ? "Sequence number Already taken" : editCategoriesData?.error?.msg)
            dispatch(editCategoryDataOfReset());

        }
    }, [editCategoriesData,getIdCategoriesData]);

    return (
        <div className="px-10">


            <div className="flex justify-start items-center mt-6 gap-3">
                <div>
                    <Link to={'/categories'}>
                        <img src={backImg} alt="backImg" />
                    </Link>
                </div>
                <div>

                    <h3 className="font-bold text-lg">Edit Category</h3>
                </div>
            </div>



            <div className='mt-7 flex justify-start items-center gap-20'>
                <div className="w-1/3">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryname">
                            Category Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="categoryname"
                            type="text"
                            placeholder="Category name"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
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

                <div className="w-1/3">

                    <div class="mb-4">
                        <label for="countries" class="block text-gray-700 text-sm font-bold mb-2">Status</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            id="countries" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value='' selected>Choose a status</option>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
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
                            <img src={image ? URL.createObjectURL(image) : `${process.env.REACT_APP_BACKEND}/${imageDb}`} />
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
                            id="dropzone-file" type="file" class="hidden"
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
                    <button onClick={handleEditCAtegory} type="button" className="w-32 focus:outline-none text-white bg-[#662671] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Save</button>
                </div>
            </div>







        </div>
    )
}

export default EditCategory;
