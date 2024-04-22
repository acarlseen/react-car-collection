import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import AddVehicle from "../pages/AddVehicle";
import About from "../pages/About";

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
        protected: true,
    },
    {
        path: "/about",
        component: About,
        name: 'About Us',
        protected: false
    }
];

export default routes;