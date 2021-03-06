import { createSlice  , createAsyncThunk} from '@reduxjs/toolkit'


export const getData = createAsyncThunk('callApi', 
    async ({local}) => { 
      try{
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`).then((res) => res.json());
      }catch(error){
          console.log(error)
      }
})
export const getDataFiveDay = createAsyncThunk('callApi2', async ({local}) => {
    try{
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${local}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`).then((res) => res.json());
    }catch(error){
         console.log(error);
    }
})
export const getAqi = createAsyncThunk('callApi3', async ({local}) => {
    try{
        return fetch(`https://api.waqi.info/feed/${local}/?token=${process.env.REACT_APP_AQICN_KEY}`).then((res) => res.json());
    }catch(error){
        console.log(error);
    }
})


export const GlobalApi = createSlice({
  name: 'Getss',
  initialState: {
    value: {},
    status: null,
    value2: {},
    status2: null,
    value3: {},
    status3: null
  },
  extraReducers: {
    [getData.pending]: (state) => {
        state.status = 'Loading';
    },
    [getData.fulfilled]: (state,{payload}) => {
        state.value = payload;
        state.status = 'Thanh cong';
    },
    [getData.rejected]: (state) => {
        state.status = 'That bai';
    },
    [getDataFiveDay.pending]: (state,action) => {
        state.status2 = 'Loading';
    },
    [getDataFiveDay.fulfilled]: (state,{payload}) => {
        state.value2 = payload;
        state.status2 = 'Thanhcong';
    },
    [getDataFiveDay.rejected]: (state,action) => {
        state.status2 = 'thatbai';
    },
    [getAqi.pending]: (state,action) => {
        state.status3 = "loading";
    },
    [getAqi.fulfilled]: (state,{payload}) => {
        state.value3 = payload;
        state.status3 = "thanhcong";
    },
    [getAqi.rejected]: (state,action) => {
        state.status3 = "thatbai";
    }
  }
})

// Action creators are generated for each case reducer function

export default GlobalApi.reducer