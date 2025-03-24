import asrafImg from '../../assets/logo3.png'
import AboutContainer from './AboutContainer/AboutContainer';
import ExperienceContainer from './ExperienceContainer';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center w-11/12 mx-auto gap-10 my-10 '>
            <div className='flex-1/4 order-2 md:order-none'>
                {/* About section */}
                <AboutContainer />
            </div>
            <div className='order-1 md:order-none flex-2/4 min-h-screen border-4 p-6  border-amber-500/50 rounded-t-full rounded-b-full'>
                {/* img section of me */}
                <img className=' w-full h-screen object-cover rounded-t-full rounded-b-full' src={asrafImg} alt="" />
            </div>
            <div className=' order-2 md:order-none flex-1/4'>
                {/* experience , clients , projects number */}
                <ExperienceContainer />
            </div>
        </div>
    );
};

export default Banner;