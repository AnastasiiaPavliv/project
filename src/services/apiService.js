import axios from "axios";
import {baseURL} from "../configs";


const apiService= axios.create({baseURL});


apiService.interceptors.request.use((config)=>{

        config.headers.Authorization='Bearer ' +
            'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmRkZmRiZTY1NTVhOTJhYWFiZTA0ZDQ5ZTliNmNkYiIsInN1YiI6IjYzZWViMmM4Y2RkYmJjMDBkNWU0NmIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z7rnd3pHCBKPrV7DkijkzSyqznbHM4lEedvOPxqkdZU'

    return config
})


export {apiService}