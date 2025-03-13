import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-gray-800">
            <nav className=" text-white container mx-auto p-4 flex justify-between items-center">

                <ul className="flex gap-4">
                    <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
                    <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
                </ul>
                <h1 className="text-xl font-bold">Ashraful's Portfolio</h1>
                <div className="flex gap-3">
                    <a href="https://github.com/ash-124" target="_blank"><FaGithub size={24} /></a>
                    <a href="https://linkedin.com/in/asraful-ratul" target="_blank"><FaLinkedin size={24} /></a>
                    <a href="https://facebook.com/yourfacebook" target="_blank"><FaFacebook size={24} /></a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
