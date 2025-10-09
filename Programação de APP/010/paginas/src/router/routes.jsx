import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Bar from "../pages/Bar";
import Borracharia from "../pages/Borracharia";
import Sorveteria from "../pages/Sorveteria";

const router = createBrowserRouter([
    {path: "/Home", element: <Home />},
    {path: "/Bar", element: <Bar />},
    {path: "/Borracharia", element: <Borracharia />},
    {path: "/Sorveteria", element: <Sorveteria />},
])

export default router;
