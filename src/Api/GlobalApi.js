import { createSlice  , createAsyncThunk} from '@reduxjs/toolkit'


export const getData = createAsyncThunk('callApi', 
    async ({local}) => { 
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&units=metric&appid=84f0c05e16abc57b03ca8fa00b59f78e`).then((res) => res.json()).catch(function(){
            console.log('error');
        })
})
export const getDataFiveDay = createAsyncThunk('callApi2', async ({local}) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${local}&units=metric&appid=84f0c05e16abc57b03ca8fa00b59f78e`).then((res) => res.json()).catch(function() {
      console.log("error");
  });
})


export const GlobalApi = createSlice({
  name: 'Getss',
  initialState: {
    value: {},
    status: null,
    value2: {},
    status2: null
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
    }
  }
})

// Action creators are generated for each case reducer function

export default GlobalApi.reducer