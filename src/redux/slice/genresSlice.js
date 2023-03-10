import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services";

const initialState={
    genres:[]
};

const getAll=createAsyncThunk(
    'genresSlice/getAll',
    async (_, thunkApi)=>{
        try{
            const {data}=  await genresService.getAll();

            return data.genres
        }catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    });

const genresSlice=createSlice({
    name:'genresSlice',
    initialState,
    reducers:{
    },
    extraReducers:builder => builder
        .addCase(getAll.fulfilled, (state, action)=>{
            state.genres=action.payload
        })
});
const {reducer:genresReducer}=genresSlice;

const genresActions={
    getAll
}
export {genresActions, genresSlice, genresReducer}