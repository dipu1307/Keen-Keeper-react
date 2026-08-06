import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import TimeLine from "../../pages/TimeLine/TimeLine";
import Stats from "../../pages/Stats/Stats";
import FriendDetails from "../../pages/FriendDetails/FriendDetails";
import NotFound from "../../pages/NotFound/NotFound";
import MainLayout from "../../layouts/MainLayout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <Home/>

        },
        {
        path: "/timeline",
        element: <TimeLine/>
    },
    {
        path: "/stats",
        element: <Stats/>
    },
    {
        path: "/friend/:id",
        element: <FriendDetails/>
    },
    {
        path: "*",
        element: <NotFound/>
    },
    ],
    },
    
    

]);