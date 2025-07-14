import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("test", "routes/test.tsx"),
  route("result", "routes/result.tsx"),
  route("explore", "routes/explore.tsx"),
] satisfies RouteConfig;
