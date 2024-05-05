import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    surname: "",
    gender: "",
    city: "",
    mobile: "",
    address: ""
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addStepForm: (state, action) => {
            // const { name, surname, email, email, dob, gender,   } = action.payload;
            let stepOneData = action.payload
            state.name = stepOneData.name;
            state.surname = stepOneData.surname;
            state.email = stepOneData.email;
            state.phone = stepOneData.phone;
            state.dob = stepOneData.dob;
            state.gender = stepOneData.gender;
        },
    },
})

export const { addStepForm } = formSlice.actions

export default formSlice.reducer