import React, { useState } from "react";
import headerLogo from "../imagesApp/headerlogo.png"
import avatar from "../imagesApp/avatarheader.png"
import logoutImg from "../imagesApp/logout.png"

const Header = ({ onLogout }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogoutClick = () => {
        setIsModalOpen(true);
    };

    const confirmLogout = () => {
        // Handle actual logout logic here (e.g., clearing tokens, redirecting)
        // console.log("Logged out");
        // setIsModalOpen(false);
        onLogout()
    };

    const cancelLogout = () => {
        setIsModalOpen(false);
    };

    // return(
    //     <>
    //         <div className="bg-[#662671] flex justify-between items-center p-4 px-5">
    //             <div className="flex justify-center items-center gap-2 ">
    //                 <div>
    //                     <img src={headerLogo}  />
    //                 </div>
    //                 <div>
    //                     <p className="text-white text-2xl font-bold">TableSprint</p>
    //                 </div>
    //             </div>
    //             <div>

    //             <img src={avatar}  />
    //             </div>
    //         </div>
    //     </>
    // )

    return (
        <>
            <div className="bg-[#662671] flex justify-between items-center p-4 px-5">
                <div className="flex justify-center items-center gap-2">
                    <div>
                        <img src={headerLogo} alt="Logo" />
                    </div>
                    <div>
                        <p className="text-white text-2xl font-bold">TableSprint</p>
                    </div>
                </div>
                <div>
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="cursor-pointer"
                        onClick={handleLogoutClick}
                    />
                </div>
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
                                <h2 className="text-xl font-semibold ">Log Out</h2>
                            </div>
                        </div>


                       
                        <p className="text-center">Are you sure you want to log out?</p>
                        <div className='mt-5 flex justify-center items-center gap-2'>
                            <div>
                                <button onClick={cancelLogout} type="button" className="w-32 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                            </div>
                            <div>
                                <button onClick={confirmLogout} type="button" className="w-32 focus:outline-none text-white bg-[#662671] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;