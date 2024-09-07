import React, { useState } from "react";
import { FaBox, FaChevronLeft, FaChevronRight, FaHome, FaList, FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import homeicon from '../imagesApp/home (3) 1.png'



const Sidebar = () => {


    return (
        <div className="fixed w-60 h-screen bg-[#F4F4F4] flex flex-col overflow-y-auto">
            <nav className="flex-1 mt-4">
                <ul>
                    <Link to="/dashboard" activeClassName="bg-[#F4EDAF]">
                        <li className="flex flex-col">
                            <div
                                className="text-xl flex items-center justify-between px-4 py-2 hover:bg-[#F4EDAF] transition-colors duration-200 cursor-pointer"
                            >
                                <div className="flex items-center">
                                    <FaHome className="text-gray-500 mr-3" />
                                    <span className="text-gray-500">Dashboard</span>
                                </div>
                                <FaChevronRight className="text-gray-500 ml-2" />
                            </div>
                        </li>
                    </Link>
    
                    <Link to="/categories" activeClassName="bg-[#F4EDAF]">
                        <li className="flex flex-col">
                            <div
                                className="text-xl flex items-center justify-between px-4 py-2 hover:bg-[#F4EDAF] transition-colors duration-200 cursor-pointer"
                            >
                                <div className="flex items-center">
                                    <FaList className="text-gray-500 mr-3" />
                                    <span className="text-gray-500">Categories</span>
                                </div>
                                <FaChevronRight className="text-gray-500 ml-2" />
                            </div>
                        </li>
                    </Link>
    
                    <Link to="/subcategories" activeClassName="bg-[#F4EDAF]">
                        <li className="flex flex-col">
                            <div
                                className="text-xl flex items-center justify-between px-4 py-2 hover:bg-[#F4EDAF] transition-colors duration-200 cursor-pointer"
                            >
                                <div className="flex items-center">
                                    <FaTags className="text-gray-500 mr-3" />
                                    <span className="text-gray-500">Sub Categories</span>
                                </div>
                                <FaChevronRight className="text-gray-500 ml-2" />
                            </div>
                        </li>
                    </Link>
    
                    <Link to="/products" activeClassName="bg-[#F4EDAF]">
                        <li className="flex flex-col">
                            <div
                                className="text-xl flex items-center justify-between px-4 py-2 hover:bg-[#F4EDAF] transition-colors duration-200 cursor-pointer"
                            >
                                <div className="flex items-center">
                                    <FaBox className="text-gray-500 mr-3" />
                                    <span className="text-gray-500">Products</span>
                                </div>
                                <FaChevronRight className="text-gray-500 ml-2" />
                            </div>
                        </li>
                    </Link>
    
                    {/* Add more items as needed */}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
