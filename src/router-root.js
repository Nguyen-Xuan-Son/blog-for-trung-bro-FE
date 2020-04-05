import GuessComponent from "./modules/guess";
import AdminComponent from "./modules/admin";
import NotFoundComponent from "./utils/components-common/not-found-component";

const routes = [
    { path: "/", component: GuessComponent },
    { path: "/admin", component: AdminComponent },
    { path: "**", component: NotFoundComponent }
];

export default routes;