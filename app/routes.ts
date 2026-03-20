import { type RouteConfig, index ,layout,route} from "@react-router/dev/routes";

export default [
    // index("routes/home.tsx"),
    layout("./layout/layout.tsx", [
     index("routes/home.tsx"),
     route("about", "./views/about/about.tsx"),
     route("contact", "./views/contact/contact.tsx"),
  ]),
] satisfies RouteConfig;
