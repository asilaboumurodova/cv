type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  projectUrl: string;
};
function ProjectCard({ title, description, imgUrl, projectUrl }: ProjectCardProps) {
  return (
    <div className='.proj-container'>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </div>
  )

}

export default ProjectCard