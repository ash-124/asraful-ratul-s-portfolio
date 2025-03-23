const ProjectCard = ({ project }) => {
    return (
      <div className="border p-4 rounded shadow">
        <img src={project.img} alt={project.name} className="w-full h-40 object-cover" />
        <h3 className="text-xl mt-2">{project.name}</h3>
        <a href={project.link} target="_blank" className="text-blue-500">Live Site</a> |
        <a href={project.github} target="_blank" className="text-blue-500"> GitHub</a>
      </div>
    );
  };
  
  export default ProjectCard;
  