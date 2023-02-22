import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies:[],
    page:null
};
const getAll=createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, thunkApi)=>{
        try{
          const {data}=  await movieService.getAll(page);
           // console.log(data.results)
          return data.results
        }catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    });
const getById=createAsyncThunk(
'movieSlice/getById',
    async ({id}, thunkApi)=>{
        try{
            const {data}=  await movieService.getById(id);
             // console.log(data)
            return data
        }catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    })


const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{

    },
    extraReducers:builder => builder
        .addCase(getAll.fulfilled, (state, action)=>{
            state.movies=action.payload
        })
        .addCase(getById.fulfilled,(state, action)=>{
            state.movies=action.payload

        })
});

const {reducer:movieReducer} = moviesSlice;

const movieActions={
 getAll, getById
};
export { moviesSlice, movieActions, movieReducer}