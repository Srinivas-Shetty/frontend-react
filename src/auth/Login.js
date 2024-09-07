


import React, { useEffect, useState } from "react";
import CompanyLogo from "../imagesApp/New_TS_Logo_page-0001 1.png";
import LoginBackground from "../imagesApp/login-background.png";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, loginDataOfReset, resetpasswordAction, resetpasswordDataOfReset } from "../redux/actions/authActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import logoutImg from "../imagesApp/logout.png"


const Login = ({ onLogin }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const { loginData } = useSelector((state) => state.auth);

    const [loginDetails, setLoginDetails] = useState({});
    const [loading, setLoading] = useState();
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAction(email, password));
    };

    useEffect(() => {
        if (loginData && loginData?.data) {
            setLoginDetails(loginData?.data);
            localStorage.setItem('token', JSON.stringify(loginData?.data));
            onLogin();

            toast.success(loginData?.data?.msg); 
            dispatch(loginDataOfReset()) 
            navigate('/dashboard');
        }
        if (loginData && loginData?.error) {
            setError(loginData?.error?.msg);
            toast.error(loginData?.error?.msg); 
            dispatch(loginDataOfReset()) 
        }
    }, [loginData]);


///modal

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [forgotEmail,setforgotEmail]=useState('')

    const handleForgotPasswordClick = () => {
        setIsModalOpen(true);
    };

    const { resetpasswordData } = useSelector((state) => state.auth);

console.log(resetpasswordData,"resetpasswordData");


    const submitEmail = () => {
        dispatch(resetpasswordAction(email));
        // setIsModalOpen(false);  // Close modal after confirming delete
    };
    
    const cancelForgotPassword = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (resetpasswordData && resetpasswordData?.data) {
            toast.success(resetpasswordData?.data?.msg);
            setIsModalOpen(false);
            dispatch(resetpasswordDataOfReset())
        }
        if (resetpasswordData && resetpasswordData?.error) {
            toast.error(resetpasswordData?.error?.msg);
            dispatch(resetpasswordDataOfReset())
        }
    }, [resetpasswordData, dispatch]);


    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${LoginBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    width: '100%',
                    position: 'relative',
                }}
            >
                {/* Dark Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                ></div>

                {/* Login Form */}
                <div
                    className="bg-white p-6 rounded w-full max-w-lg"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '30%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                    }}
                >
                    <div className="flex justify-center mb-4">
                        <img style={{ width: '150px', height: '60px' }} src={CompanyLogo} alt="Company Logo" />
                    </div>
                    <p className="text-center text-2xl text-gray-500 mb-6" style={{ fontFamily: 'Roboto' }}>
                        Welcome to TableSprint Admin
                    </p>

                    <form className="text-left" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <p onClick={handleForgotPasswordClick} className="text-right text-lg text-blue-600 mb-4 cursor-pointer">Forgot password?</p>
                        <button
                            className="w-full bg-[#5C218B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Log In
                        </button>
                        <Link to='/register'>
                        <p className="text-center text-lg mt-6 font-semibold">
                            Don't have an account? <span className="text-blue-600 cursor-pointer">Register</span>
                        </p>
                        </Link>
                    </form>




                </div>
                   {/* Modal for confirming logout */}
   {/* {isModalOpen && (
                    <div className="z-10 fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                            <div className="flex justify-center items-center gap-2">
                                <div>
                                    <img src={logoutImg} alt="logoutImg" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold ">Did </h2>
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
                )} */}

{isModalOpen && (
  <div className="z-10 fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
      {/* Modal Header */}
      <div className="flex justify-center items-center gap-2 mb-4">
        {/* <div>
          <img src={forgotPasswordImg} alt="forgotPassword" className="w-12 h-12" />
        </div> */}
        <div>
          <h2 className="text-2xl font-semibold">Did you forget password?</h2>
        </div>
      </div>

 
      <p className="text-center text-gray-600 mb-4">Enter your email address and we’ll send you a link to restore password</p>

  
      <div className="mb-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={forgotEmail}
          onChange={(e)=>{
            setforgotEmail(e.target.value)
          }}
        />
      </div>


      <div className='mt-5 flex justify-center items-center gap-2'>
        <div>
          <button onClick={cancelForgotPassword} type="button" className="w-32 py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100">Cancel</button>
        </div>
        <div>
          <button
          disabled={resetpasswordData?.loading}
          onClick={submitEmail} type="button" className="w-32 focus:outline-none text-white bg-[#662671] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 ">{resetpasswordData?.loading ? "Sending..." : "Send"}</button>
        </div>
      </div>
    </div>
  </div>
)}

            </div>
        </>
    );

}

export default Login;

