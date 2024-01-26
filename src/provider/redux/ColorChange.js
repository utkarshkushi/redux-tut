import {createSlice} from '@reduxjs/toolkit'

export const ChangeColor = createSlice({
    name: 'ChangeColor',
    initialState:{
        color: '#EFEFEF'
    },
    reducers:{
        ChangeColorToColor(state, action){
            state.color = '#000'
        }
    }
})

export const {ChangeColorToColor} = ChangeColor.actions