import React from 'react';

const MovieI = ({item}) => {
    const{runtime,release_date,budget,poster_path,
        title,overview,original_language}=item;
    return (
        <div>
            <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={''}/>
            <div>{title}</div>
            <div>{overview}</div>
            <div>Language: {original_language}</div>
            <div>Release: {release_date}</div>
            <div>Runtime: {runtime}</div>
            <div>Budget: {budget}</div>
        </div>
    );
};

export {MovieI};