import React from 'react';
import asrafImg from '../../assets/logo3.png'
import AboutContainer from './AboutContainer/AboutContainer';
import ExperienceContainer from './ExperienceContainer';

const Banner = () => {
    return (
        <div className='flex items-center w-11/12 mx-auto gap-10 '>
            <div className='flex-1/4'>
                {/* About section */}
                <AboutContainer/>
            </div>
            <div className='flex-2/4 min-h-screen border border-red-300'>
                {/* img section of me */}
                <img className='h-full w-full' src={asrafImg} alt="" />
            </div>
            <div className='flex-1/4'>
                {/* experience , clients , projects number */}
                <ExperienceContainer/>
            </div>
        </div>
    );
};

export default Banner;