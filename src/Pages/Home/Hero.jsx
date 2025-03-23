// import profileImg from "../assets/profile.jpg"; // Add your image
// import resume from "../assets/resume.pdf"; // Add your resume

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center p-10">
            <img  alt="Ashraful" className="rounded-full w-40 h-40 shadow-lg" />
            <div className="ml-6">
                <h1 className="text-4xl font-bold">Hi, I'm Ashraful Islam Ratul</h1>
                <p className="text-lg mt-2">Full Stack Developer | MERN Enthusiast</p>
                <a  download className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                    Download Resume
                </a>
            </div>
        </section>
    );
};

export default Hero;
