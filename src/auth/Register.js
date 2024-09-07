// import React, { useEffect, useState } from "react";
// import CompanyLogo from "../imagesApp/New_TS_Logo_page-0001 1.png"
// import LoginBackground from "../imagesApp/login-background.png"
// import { useDispatch, useSelector } from "react-redux";
// import { loginAction } from "../redux/actions/authActions";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";

// const Login = ({onLogin} ) => {

//     const navigate=useNavigate()


//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const dispatch = useDispatch();
//     const { loginData } = useSelector((state) => state.auth);
//     console.log(loginData,"loginData");
//     console.log(loginData.error,"loginData   weeeeeeee");

//     const [loginDetails,setLoginDetails]=useState({})
//     const [loading,setLoading]=useState()
//     const [error,setError]=useState('')
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(loginAction(email, password));
//       };

//       useEffect(() => {
//         if (loginData && loginData?.data) {
//             setLoginDetails(loginData?.data)
//             localStorage.setItem('token', JSON.stringify(loginData?.data));
//             onLogin()
//             alert(loginData?.data?.msg)
//             toast.error(loginData?.data?.msg)
//             navigate('/dashboard')

//         }
//         if(loginData && loginData?.error){
//             setError(loginData?.error?.msg)
//             alert(loginData?.error?.msg)
//             toast.error(loginData?.error?.msg)
//         }
       
  
//      }, [loginData])


//      console.log(error,"error")


import React, { useEffect, useState } from "react";
import CompanyLogo from "../imagesApp/New_TS_Logo_page-0001 1.png";
import LoginBackground from "../imagesApp/login-background.png";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, registerAction, rgisterDataOfReset } from "../redux/actions/authActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');

    const dispatch = useDispatch();
    const { registerData } = useSelector((state) => state.auth);

    const [loginDetails, setLoginDetails] = useState({});
    const [loading, setLoading] = useState();
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password!=confirmpassword){
            toast.error("Password does not match")
        }
        else{
            dispatch(registerAction(email, password));
        }
        
        
    };

    useEffect(() => {
        if (registerData && registerData?.data) {
            setLoginDetails(registerData?.data);
            toast.success(registerData?.data?.msg);
            dispatch(rgisterDataOfReset())  // Show success toast
            navigate('/login');
        }
        if (registerData && registerData?.error) {
            setError(registerData?.error?.msg);
            toast.error(registerData?.error?.msg); 
            dispatch(rgisterDataOfReset()) // Show error toast
        }
    }, [registerData]);

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
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                               Confirm Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={confirmpassword}
                                onChange={(e) => setconfirmpassword(e.target.value)}
                            />
                        </div>
                        <button
                            className="w-full bg-[#5C218B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Register
                        </button>
                        <Link to='/login'>
                        <p className="text-center text-lg mt-6 font-semibold">
                           Already have an account? <span className="text-blue-600 cursor-pointer">Login</span>
                        </p>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );

}

export default Register;

