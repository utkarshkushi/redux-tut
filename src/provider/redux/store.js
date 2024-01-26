import {configureStore} from '@reduxjs/toolkit'
import { ChangeColor } from './ColorChange'
import { TodoSlice } from './Todos'



export const store = configureStore({
    reducer:{
        'ChangeColor': ChangeColor.reducer,
        [TodoSlice.name]: TodoSlice.reducer
    }
})
