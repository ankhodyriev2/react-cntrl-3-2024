import {Movies, MovieDetail} from "../movie";
import './header.css';

const header =[

    {
        link: "/movies",
        title: "click here to view Movie List",
        component: Movies,
        isExact: false,
        isLink: true
    },
    {
        link: "/movie/:id",
        title: "Movies",
        component: MovieDetail,
        isExact: false,
        isLink: false
    }

];

export {header}