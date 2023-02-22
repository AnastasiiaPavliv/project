import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './genres.module.css'

const Genre = ({genre}) => {
    const navigate=useNavigate();
    const {name}=genre;
    return (
        <div className={css.div} >
            <div className={css.g} onClick={()=>navigate(genre.id.toString())}>{name}</div>
        </div>
    );
};

export {Genre};