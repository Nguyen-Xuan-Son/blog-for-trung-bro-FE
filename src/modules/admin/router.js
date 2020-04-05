import {
    DashboardComponent,
    LoginComponent
} from "./components";

const adminRoutes = [
    { path: "", component: DashboardComponent },
    { path: "login", component: LoginComponent }
];

export default adminRoutes;