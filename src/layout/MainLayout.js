import React from 'react';
import {Header} from "../components/header/Header";
import {Outlet} from "react-router-dom";
import {MoviesListCard} from "../components";
import {MovieDetailsPage} from "../pages";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <MovieDetailsPage/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};