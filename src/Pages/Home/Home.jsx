import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects/Projects';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Banner/>
            <Skills/>
            <Projects/>
        </div>
    );
};

export default Home;