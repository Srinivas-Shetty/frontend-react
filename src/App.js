import React, { useState } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import Login from './auth/Login';
import DashBoard from './dashboard/DashBoard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './bars/Header';
import Sidebar from './bars/SideBar';
import ListOfCategories from './categories/ListOfCategories';
import AddCategory from './categories/AddCategory';
import EditCategory from './categories/EditCategory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListOfSubCategories from './subCategories/ListOfSubCategories';
import AddSubCategory from './subCategories/AddSubCategory';
import Register from './auth/Register';
import ResetPassword from './auth/ResetPassword';
import ListOfProducts from './products/ListOfProducts';
import AddProducts from './products/addProducts';

import "./App.css"

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));


  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
  };
 
  



  return (
    <Provider store={store}>
<ToastContainer />
      <Router>
        <div className="flex flex-col h-screen">
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
            <Route
              path="*"
              element={
                isAuthenticated ? (
                  <>
                    <div className="scroll-container">
                      <div className="sticky-header w-full  ">
                        <Header onLogout={handleLogout} />
                      </div>

                      <div className="flex flex-1 ">
                        <div className='z-50'>
                           <Sidebar />
                        </div>
                       
                        <main className="flex-1 ml-60 ">
                          <Routes>
                          <Route path="/" element={<DashBoard />} />
                            <Route path="/dashboard" element={<DashBoard />} />
                            <Route path="/categories" element={<ListOfCategories />} />
                            <Route path="/add-categories" element={<AddCategory />} />
                            <Route path="/edit-categories/:id?" element={<EditCategory />} />
                            <Route path="/subcategories" element={<ListOfSubCategories />} />
                            <Route path="/add-subcategories" element={<AddSubCategory />} />
                            <Route path="/products" element={<ListOfProducts />} />
                            <Route path="/add-products" element={<AddProducts />} />
                          </Routes>
                        </main>
                      </div>
                    </div>
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </div>
      </Router>

    </Provider>
  );
}

export default App;
