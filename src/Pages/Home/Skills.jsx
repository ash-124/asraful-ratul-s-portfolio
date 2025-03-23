const skills = [
    { name: "HTML", level: "80%" },
    { name: "CSS", level: "75%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "90%" },
];

const Skills = () => {
    return (
        <section className="p-10">
            <h2 className="text-3xl font-bold">Skills</h2>
            <div className="mt-4">
                {skills.map((skill) => (
                    <div key={skill.name} className="mt-2">
                        <span>{skill.name}</span>
                        <div className="w-full bg-gray-300 rounded-full">
                            <div className="bg-blue-500 text-xs text-white text-center p-1 rounded-full" style={{ width: skill.level }}>
                                {skill.level}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
