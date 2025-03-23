import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Navbar */}
            <div className='bg-amber-100'>
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