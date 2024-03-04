import {createBrowserRouter} from "react-router-dom";
import {Movies, MovieDetail} from "./components/movie";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Movies/>,

    },
    {
        path: '/movie/:id',
        element: <MovieDetail/>
    }
]);

export {router}