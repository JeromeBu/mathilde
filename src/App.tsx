import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { RouteProvider, useRoute } from "./routes";

const Router = () => {
  const route = useRoute();

  return (
    <>
      {route.name === "home" && <HomePage />}
      {route.name === "project" && <ProjectPage route={route} />}
    </>
  );
};

export const App = () => (
  <RouteProvider>
    <Router />
  </RouteProvider>
);
