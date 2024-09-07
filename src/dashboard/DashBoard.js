import React from "react";
import CompanyLogo from "../imagesApp/New_TS_Logo_page-0001 1.png"

const DashBoard = () => {

    return (
        <div className="flex justify-center items-center h-96">
          <div>
            <div className="flex justify-center mb-4">
              <img style={{ width: '150px', height: '60px' }} src={CompanyLogo} alt="Company Logo" />
            </div>
            <p className="text-center text-2xl text-gray-500 mb-6" style={{ fontFamily: 'Roboto' }}>
              Welcome to TableSprint Admin
            </p>
          </div>
        </div>
      )
      
}

export default DashBoard;