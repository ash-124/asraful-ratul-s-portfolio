import React from 'react';
import About from '../About';
import MyIntrests from './MyIntrests';

const AboutContainer = () => {
    return (
        <div className='flex flex-col gap-3'>

            <About />
            <MyIntrests title="What I love" description={["I love solving real-world problems through coding. Apart from programming, I enjoy listening to podcasts, playing chess, and learning new technologies."]} />
            {/* services */}
            <MyIntrests title="Services" description={['Website Design', 'Developing Beautiful Website', 'JWT Verification' ]}/>

        </div>
    );
};

export default AboutContainer;