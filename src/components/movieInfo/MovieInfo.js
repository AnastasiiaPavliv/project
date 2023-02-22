import React, {useEffect} from 'react';
import {movieActions} from "../../redux/slice";
import {useDispatch, useSelector} from "react-redux";
import {MovieI} from "./movieI";

const MovieInfo = () => {
    const {details, page}=useSelector(state => state.movies)
    const dispatch=useDispatch();

    // useEffect(()=>{
    //     dispatch(movieActions.getById())
    // },[dispatch])

        useEffect(()=>{
    dispatch(movieActions.getAll({page}))
    },[dispatch])

    console.log(details)

    return (
        <div>
            {details&&<div>{details.id}</div>}
            {/*{details?.map(item=><MovieI key={item.id} item={item}/>)}*/}
        </div>
    );

};

export {MovieInfo};