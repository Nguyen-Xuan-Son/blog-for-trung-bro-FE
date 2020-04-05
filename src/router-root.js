import GuessComponent from "./modules/guess";
import AdminComponent from "./modules/admin";

const routes = [
    { path: "/", component: GuessComponent },
    { path: "/admin", component: AdminComponent }
];

export default routes;