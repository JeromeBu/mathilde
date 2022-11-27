import { createRouter, defineRoute, param } from "type-route";

export const { RouteProvider, useRoute, routes } = createRouter({
  home: defineRoute("/"),
  project: defineRoute(
    {
      projectId: param.path.number,
    },
    (p) => `/projet/${p.projectId}`
  ),
});
