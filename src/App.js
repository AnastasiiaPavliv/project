import './App.css';

import { Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {MoviesPage, MovieDetailsPage, GenresPage, GenrePage} from "./pages";


function App () {
  return (
      <div>
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<MoviesPage/>}/>
              <Route path={'genres'} element={<GenresPage/>}/>
              <Route path={'genres/:id'} element={<GenrePage/>}/>
              <Route path={':id'} element={<MovieDetailsPage/>}/>
          </Route>
      </Routes>
</div>
    );
}

export {App};
