import ProjectCard from "./ProjectCard";

const projects = [
  { name: "Lingo Bingo", img: "lingo.jpg", link: "https://lingo.com", github: "https://github.com/ashraful/lingo" },
  { name: "Visa Navigator", img: "visa.jpg", link: "https://visa.com", github: "https://github.com/ashraful/visa" },
];

const Projects = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
