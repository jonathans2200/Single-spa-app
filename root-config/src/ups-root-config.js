import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import './styles.css'
const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

 applications.forEach(registerApplication);

// test
// registerApplication({
//   name: "@ups/react-tasks",
//   app: () => System.import("@ups/react-tasks"),
//   activeWhen: ["/tasks"]
// });

// registerApplication({
//   name: "@ups/angular-login",
//   app: () => System.import("@ups/angular-login"),
//   activeWhen: ["/"]
// });

// registerApplication({
//   name: "@ups/mf-create-user",
//   app: () => System.import("@ups/mf-create-user"),
//   activeWhen: ["/register"]
// });

layoutEngine.activate();
start();
