import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slice";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";

import css from './movies.module.css'
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {
  const {movies, page}=  useSelector(state=>state.movies);
  const dispatch=useDispatch();
   const [query, setQuery]=useSearchParams({page:'1'});

 

  useEffect(()=>{
    dispatch(movieActions.getAll({page:query.get('page')}))
  },[dispatch, query])

    return (
        <div>
        <div className={css.btn}> <button
              disabled={page}
              onClick={() => setQuery(query=>({page:+query.get('page')-1}))}
          >Prev</button>

          <button onClick={() => setQuery((query) => ({page:+query.get('page')+1}))}>
            Next</button>
        </div>
               <div className={css.movies}>
  {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
           </div>
    );
};

export {MoviesList};