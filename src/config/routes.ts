import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"

interface RouteType {
    path: string,
    component: ()=> JSX.Element,
    name: string
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
        protected: false,
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: 'User Dashboard',
        protected: false
    },
];

export default routes;