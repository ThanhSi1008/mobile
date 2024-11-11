// redux/bikesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bikes: [
    { id: '1', name: 'Pinarello', price: '$1800', image: 'https://link_to_image_1.png' },
    { id: '2', name: 'Pina Mountain', price: '$1700', image: 'https://link_to_image_2.png' },
    { id: '3', name: 'Pina Bike', price: '$1500', image: 'https://link_to_image_3.png' },
    { id: '4', name: 'Pinarello X', price: '$1900', image: 'https://link_to_image_4.png' },
  ],
};

const bikesSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    setBikes: (state, action) => {
      state.bikes = action.payload;
    },
    addBike: (state, action) => {
      state.bikes.push(action.payload);
    },
  },
});

export const { setBikes, addBike } = bikesSlice.actions;
export default bikesSlice.reducer;
