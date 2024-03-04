import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import {MovieCard} from "./MovieCard";
import './Movies.css';

const Movies = (props) => {
    let [page, setPage] = useState(1);
    const [movieItems, setMovieItems] = useState();
    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=db0db81ba02a2eb52470ad910d9d6016&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        )
            .then(response => response.json())
            .then(data => {
                setMovieItems(
                    data.results.map((item) => (
                        <Col sm={6} className="mb-3" key={item.id}>
                            <MovieCard
                                id={item.id}
                                title={item.original_title}
                                detail={item.overview}
                                imgSrc={item.backdrop_path}
                                imdb={item.vote_average}
                            />
                        </Col>
                    ))
                );
            });
    }, []);
    function pagination(n) {
        if (n === "-") {
            if (page > 1) {
                setPage(--page);
            }
        } else {
            setPage(++page);
        }
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=db0db81ba02a2eb52470ad910d9d6016&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        )
            .then(response => response.json())
            .then(data => {
                setMovieItems(
                    data.results.map(item => (
                        <Col sm={6} className="mb-3" key={item.id}>
                            <MovieCard
                                id={item.id}
                                title={item.original_title}
                                genre={item.genre}
                                detail={item.overview}
                                imgSrc={item.backdrop_path}
                                imdb={item.vote_average}
                            />
                        </Col>
                    ))
                );
            });
    }

    return (
        <>
            <h1 className="text-center mt-3">Movies List</h1>
            <Row>{movieItems}</Row>
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page < 2 ? "disabled" : ""}`}
                        onClick={() => pagination("-")}
                    >
                        <a className="page-link"
                            tabIndex={page === 1 ? "-1" : ""}
                            style={{ cursor: "pointer" }}
                        >
                            Previous
                        </a>
                    </li>
                    <li className="page-item" onClick={() => pagination("+")}>
                        <a className="page-link" style={{ cursor: "pointer" }}>
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}


export {Movies}

