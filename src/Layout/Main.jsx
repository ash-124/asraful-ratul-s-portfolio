import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Navbar */}
            <div className='bg-amber-900/30 fixed backdrop-blur-lg w-full   shadow-md '>
                <Navbar />
            </div>
            {/* Dynamic Contents */}
            <div className="flex-grow">
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Main;