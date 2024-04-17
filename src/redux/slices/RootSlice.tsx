import { createSlice } from '@reduxjs/toolkit'

// vin = request.json['vin']
// make = request.json['make']
// model = request.json['model']
// year = request.json['year']
// color = request.json['color']
// car_name = request.json['car_name']
// owner = id


const rootSlice = createSlice({
    name: "root",
    initialState: {
        vin: "VIN",
        make: "Make",
        model: "Model",
        year: "Year",
        color: "Color",
        car_name: "Car Name"
    },
    reducers: {
        // action is submitted elsewhere - written to state.vin
        chooseVIN: (state, action) => { state.vin = action.payload }, // Setting the input to the state.<var>
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseColor: (state, action) => { state.color = action.payload },
        chooseCarName: (state, action) => { state.car_name = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseVIN, chooseMake, chooseModel, chooseYear, chooseColor, chooseCarName} = rootSlice.actions