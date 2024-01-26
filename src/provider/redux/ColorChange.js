import {createSlice} from '@reduxjs/toolkit'

export const ChangeColor = createSlice({
    name: 'ChangeColor',
    initialState:{
        color: '#EFEFEF'
    },
    reducers:{
        ChangeColorToColor(state, action){
            // state.color = '#000' for direct pr static color change 
            state.color = action.payload
        }
    }
})

export const {ChangeColorToColor} = ChangeColor.actions