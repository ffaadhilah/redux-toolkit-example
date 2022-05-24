import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice =  createSlice({
  name: 'counter',
  initialState,
  // we also can specify the initial state
  // initialState:{
  //   count: 0,
  // },
  // by specifying the initial state, we can use the state by state.count
  // by specifying the initial state
  // when using useSelector in the view page,
  // we can use it by writing as
  // state.counter
  // (from the store's reducer property)

  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      // the action param here is a variable
      // that allows to give a payload
      // with any value that we want
      // this means we can pass any certain value there
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
// to use it for dispatch inside of view page

export default counterSlice.reducer;
// to export it and use it in the store file
