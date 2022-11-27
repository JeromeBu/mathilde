import { projects } from "../data/projects";
import { routes } from "../routes";

export const HomePage = () => (
  <div>
    <h1>Ceci est la Home</h1>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <a {...routes.project({ projectId: index }).link}>{project.title}</a>
        </li>
      ))}
    </ul>
  </div>
);
