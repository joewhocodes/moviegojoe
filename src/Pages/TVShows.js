import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesTvAsync, resetMovieTvSlice } from '../Redux/moviesTvSlice';
import { tvTypes } from '../data/tvTypes';
import GenreLists from '../Components/GenreLists';

const TVShowsPage = () => {
    const tv = useSelector(state => state.moviesTv);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetMovieTvSlice());
        tvTypes.forEach(t => dispatch(getMoviesTvAsync(t)));
    }, [dispatch]);

    return ( 
        <GenreLists
            dataFile={tvTypes}
            results={tv}
            page="tv"
        />
    );
};

export default TVShowsPage;