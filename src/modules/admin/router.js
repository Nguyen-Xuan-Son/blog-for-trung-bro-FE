import {
    DashboardComponent,
    LoginComponent
} from "./components";

const adminRoutes = [{
        path: "",
        name: "dashboard",
        component: DashboardComponent,
        meta: {
            requiresAuth: true,
            title: "Dashboard"
        }
    },
    {
        path: "login",
        name: "login",
        component: LoginComponent,
        meta: {
            title: "Login"
        }
    }
];

export default adminRoutes;