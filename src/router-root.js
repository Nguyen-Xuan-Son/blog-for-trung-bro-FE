import adminRoutes from "./modules/admin/router";
import guessRoutes from "./modules/guess/router";

import GuessComponent from "./modules/guess";
import AdminComponent from "./modules/admin";
import NotFoundComponent from "./utils/components-common/not-found-component";

const routes = [{
        path: "/",
        name: "home",
        component: GuessComponent,
        children: guessRoutes
    },
    {
        path: "/admin",
        name: "admin",
        component: AdminComponent,
        children: adminRoutes
    },
    {
        path: "**",
        name: "notFound",
        component: NotFoundComponent
    }
];

export default routes;