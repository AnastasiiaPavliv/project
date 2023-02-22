import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const NewPage = ({page}) => {
    // const navigate=useNavigate();
    return (
        <div>
            {/*<Link to={`/${page}`}>prev</Link>*/}
            {/*<button onClick={()=>navigate(page.toString())}>prev</button>*/}
        </div>
    );
};

export {NewPage};