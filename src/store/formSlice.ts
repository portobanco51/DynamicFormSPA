import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState } from "../types";

export const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  address1: "",
  city: "",
  state: "",
  zip: 0,
  phone: "",
  jobTitle: "",
  reason: "",
  submitted: false,
};

// creating the formSlice with redux toolkit, slice contains two functions to set the Form data from the Form.tsx component and to clean the form when submitted with a custom method

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearForm: (state) => {
      return {
        ...state,
        firstName: "",
        lastName: "",
        email: "",
        address1: "",
        city: "",
        state: "",
        zip: 0,
        phone: "",
        jobTitle: "",
        reason: "",
        submitted: false,
      };
    },
  },
});

export const { setFormData, clearForm } = formSlice.actions;
export default formSlice.reducer;
