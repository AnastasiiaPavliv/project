import React from 'react';
import {Link} from "react-router-dom";
import css from './header.module.css'
import {UserInfo} from "../userInfo/UserInfo";


const Header = () => {
    return (
        <div className={css.header}>
            <Link  to={'/'}>Movies</Link>
             <Link to={'/genres'}>Genres</Link>
            {/*<QueryClientProvider client={queryClient}>*/}
            {/*<SearchBox/>*/}
                {/*<QueryClientProvider/>*/}
            <UserInfo/>
        </div>
    );
};

export {Header};