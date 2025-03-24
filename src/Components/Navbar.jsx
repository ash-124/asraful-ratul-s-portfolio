import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import logo3 from '../assets/logo3.png';
const Navbar = () => {
    return (
        <div className="navbar  w-11/12 mx-auto ">
            <div className="navbar-start">
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-lg text-white">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <ul className=" md:flex gap-4 hidden font-semibold text-lg text-white">
                    <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
                    <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-center grow">
                <img src={logo3} className="w-20 h-20  rounded-t-box rounded-full object-cover" alt="" />
            </div>
            <div className="navbar-end">
                <div className="flex gap-3">
                    <a href="https://github.com/ash-124" target="_blank"><FaGithub size={24} /></a>
                    <a href="https://linkedin.com/in/asraful-ratul" target="_blank"><FaLinkedin size={24} /></a>
                    <a href="https://facebook.com/yourfacebook" target="_blank"><FaFacebook size={24} /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
