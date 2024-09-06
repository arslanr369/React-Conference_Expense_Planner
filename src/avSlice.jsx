import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "https://pixabay.com/photos/business-computer-conference-20031.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/speakers-4109274_640.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],

  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;