import { Route } from "type-route";
import { Project } from "../data/Project";
import { projects } from "../data/projects";
import { routes } from "../routes";

interface ProjectPageProps {
  route: Route<typeof routes.project>;
}

const BackToHome = () => <a {...routes.home().link}>Retour</a>;

export const ProjectPage = ({ route }: ProjectPageProps) => {
  const project = projects[route.params.projectId];
  if (!project)
    return (
      <div>
        Aucun projet avec ce numéro...
        <br />
        <BackToHome />
      </div>
    );
  return (
    <>
      <BackToHome />
      <ProjectDetails {...project} />
    </>
  );
};

export const ProjectDetails = ({ title, description }: Project) => (
  <div>
    <h1>This is project : {title}</h1>
    <p>{description}</p>
  </div>
);
