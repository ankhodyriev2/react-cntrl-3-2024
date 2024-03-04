import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";


function MovieDetail(props) {
    const params = useParams();
    const { id } = params;
    const [moviesEl, setMoviesEl] = useState();
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=db0db81ba02a2eb52470ad910d9d6016&language=en-US`
        )
            .then(response => response.json())
            .then(data => {
                let obj = [data];
                setMoviesEl(
                    obj.map(item => {
                        return (
                            <div key={item.id}>
                                <h1 className="text-center mb-3">{item.title}</h1>
                                <Row className="text-center">
                                    <Col sm={6}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                            className="img-thumbnail mb-3"
                                            alt={item.title}
                                        />
                                    </Col>
                                    <Col sm={6} className="mt-auto mb-auto">
                                        <Row className="text-center">
                                            <Col sm={12}>
                        <span className="mr-3">
                            <b>Genres</b> :{" "} {item.genres.map(item => (<i>{item.name} </i>))}
                        </span>
                            <span className="mr-3">
                                <b> IMDB Rating </b> : {item.vote_average}
                            </span>
                                            </Col>
                                        </Row>
                                            <Row className="text-center">
                                            <Col sm={12}>
                        <span className="mr-3">
                            <b> Release Date </b> : {item.release_date}
                        </span>
                                <span className="mr-3">
                                    <b> Popularity </b> : {item.popularity}
                                </span>
                                            </Col>
                                        </Row>
                                        <p>
                                            <b>{item.adult ? "Adult Movie" : ""}</b>
                                        </p>
                                        <p className="mt-3">{item.overview}</p>
                                        <p>
                                            <b>Production Companies </b> <br />
                                            {item.production_companies.map(item => (
                                                <>
                                                    <i>{item.name}</i>
                                                    <br />
                                                </>
                                            ))}
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        );
                    }) //map
                ); //setMovies
            });
    }, [id]);
    return (
        <>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
            {moviesEl}
        </>
    );
}

export {MovieDetail}