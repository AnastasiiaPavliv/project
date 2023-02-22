import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux/slice";
import {Genre} from "./Genre";

const Genres = () => {
    const {genres}=useSelector(state => state.genres)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(genresActions.getAll())
    },[dispatch])
    return (
        <div>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>
            )}
        </div>
    );
};

export {Genres};