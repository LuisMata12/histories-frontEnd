import {configureStore} from '@reduxjs/toolkit'
import { storiesSlice } from './stories/storiesCalendar'

export const store = configureStore({
    reducer:{
        stories:storiesSlice.reducer
    },
})