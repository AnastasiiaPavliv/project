import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService={
    getAll:(page=1)=>apiService.get(urls.movie, {params:{page}}),
    getById:(id)=>apiService.get(urls.movie)
}
export {movieService}