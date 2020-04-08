import {
    DashboardComponent,
    LoginComponent
} from "./components";

const adminRoutes = [{
        path: "",
        name: "dashboard",
        component: DashboardComponent
    },
    {
        path: "login",
        name: "login",
        component: LoginComponent
    }
];

export default adminRoutes;