import { configureStore } from '@reduxjs/toolkit';
import GlobalApi from '../Api/GlobalApi';
import searchSlice from '../Components/Search/Future1/searchSlice';
export default configureStore({
    reducer:{
        search: searchSlice,
        GlobalApi: GlobalApi
    }
})