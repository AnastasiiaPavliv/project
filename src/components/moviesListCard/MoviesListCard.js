import React from 'react';
import css from './card.module.css'
import {useNavigate} from "react-router-dom";


const MoviesListCard = ({movie}) => {
    const navigate=useNavigate();
    const {id,title, poster_path}= movie;

    return (

        <div className={css.card} onClick={()=>navigate(id.toString())}>

            <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={''}/>
           <div>{title}</div>

        </div>
    );
};

export {MoviesListCard};