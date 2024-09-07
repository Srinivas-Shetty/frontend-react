import React, { useEffect, useState } from "react";
import categoryLogo from "../imagesApp/category.png";
import THicon from "../imagesApp/table.png";
import edit from "../imagesApp/edit.png"
import { Link, useNavigate } from "react-router-dom";
import deleteimage from "../imagesApp/delete.png";
import { useDispatch, useSelector } from "react-redux";
import { categoriesAction, deletecategoriesAction, deleteCategoryDataOfReset } from "../redux/actions/categoriesActions";
import logoutImg from "../imagesApp/logout.png"
import { toast } from "react-toastify";

const ListOfCategories = () => {







    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { categoriesData } = useSelector((state) => state.category);

    const [categoriesDetails, setCategoriesDetails] = useState([]);
    const [error, setError] = useState('');

    const handleAddCategory = () => {
        navigate("/add-categories");
    };


    useEffect(() => {
        dispatch(categoriesAction());
    }, [dispatch]);

    useEffect(() => {
        if (categoriesData?.data) {
            setCategoriesDetails(categoriesData?.data);
        }
        if (categoriesData?.error) {
            setError(categoriesData?.error?.msg);
        }
    }, [categoriesData]);



    // delete start


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteid, setDeleteId] = useState(null);

    const handleDeleteClick = (id) => {
        setIsModalOpen(true);
        setDeleteId(id)
    };

    const { deleteCategoriesData } = useSelector((state) => state.category);

    const confirmDelete = () => {
        dispatch(deletecategoriesAction(deleteid));
        setIsModalOpen(false);  // Close modal after confirming delete
    };

    const cancelLogout = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (deleteCategoriesData && deleteCategoriesData?.data) {
            toast.success(deleteCategoriesData?.data?.msg);
            dispatch(deleteCategoryDataOfReset())
            dispatch(categoriesAction());
        }
        if (deleteCategoriesData && deleteCategoriesData?.error) {
            toast.error(deleteCategoriesData?.error?.msg);
        }
    }, [deleteCategoriesData, dispatch]);




    return (
        <>
            <div className="px-10">


                <div className="flex justify-between items-center mt-6">
                    <div className="flex justify-start items-center gap-3 ">
                        <div>
                            <img src={categoryLogo} alt="category" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Category</h3>
                        </div>
                        <div className="w-96">

                            <form class="max-w-md mx-auto">
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div>
                        <button
                            onClick={handleAddCategory}
                            type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Category</button>
                    </div>
                </div>


                <div className="mt-8 relative overflow-x-auto ">
                    <table className="w-full   text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-[#FFF8B7] dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex justify-center items-center gap-3">
                                        <div>
                                            Id
                                        </div>
                                        <div>
                                            <img src={THicon} />
                                        </div>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">

                                    <div className="flex justify-center items-center gap-3">
                                        <div>
                                            Category name
                                        </div>
                                        <div>
                                            <img src={THicon} />
                                        </div>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex justify-center items-center gap-3">
                                        <div>
                                            Image
                                        </div>
                                        <div>
                                            <img src={THicon} />
                                        </div>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex justify-center items-center gap-3">
                                        <div>
                                            Sequence
                                        </div>
                                        <div>
                                            <img src={THicon} />
                                        </div>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex justify-center items-center gap-3">
                                        <div>
                                            Status
                                        </div>
                                        <div>
                                            <img src={THicon} />
                                        </div>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                categoriesDetails?.data?.length > 0 ?

                                    (
                                        categoriesDetails?.data?.map((items, index) => {
                                            return (
                                                <>
                                                    <div className="p-1"></div>
                                                    <tr className="bg-[#F2F2F2] mt-4 dark:bg-gray-800 dark:border-gray-700">
                                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {index + 1}
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            {items?.category_name}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {/* {items?.image} */}
                                                            <div className="text-center">
                                                                <img style={{ maxHeight: '34px', width: '50px' }}
                                                                    src={`${process.env.REACT_APP_BACKEND}/${items?.image}`}
                                                                    alt="category image"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {items?.sequence_no}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {items?.status == 0 ? <span className="text-red-600">Inactive</span> : <span className="text-green-600">Active</span>}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex justify-center items-center gap-2">
                                                                <div>
                                                                    <Link to={`/edit-categories/${items?.id}`}>
                                                                        <img src={edit} />
                                                                    </Link>
                                                                </div>
                                                                <div>
                                                                    <div className="cursor-pointer" onClick={(e) => {
                                                                        handleDeleteClick(items?.id)
                                                                    }}>
                                                                        <img src={deleteimage} />
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    )

                                    :

                                    (<div>No Data</div>)
                            }



                        </tbody>
                    </table>
                </div>


                {/* Modal for confirming logout */}
                {isModalOpen && (
                    <div className="z-10 fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                            <div className="flex justify-center items-center gap-2">
                                <div>
                                    <img src={logoutImg} alt="logoutImg" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold ">Delete</h2>
                                </div>
                            </div>



                            <p className="text-center">Are you sure you want to Delete?</p>
                            <div className='mt-5 flex justify-center items-center gap-2'>
                                <div>
                                    <button onClick={cancelLogout} type="button" className="w-32 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                                </div>
                                <div>
                                    <button onClick={confirmDelete} type="button" className="w-32 focus:outline-none text-white bg-[#662671] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </>
    )
}

export default ListOfCategories;