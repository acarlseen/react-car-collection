import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import AddVehicle from "../pages/AddVehicle";

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
        protected: true
    },
    {
        path: "/addvehicle",
        component: AddVehicle,
        name: 'Add Vehicle',
        protected: false,
    },
];

export default routes;