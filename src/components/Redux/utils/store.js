import {configureStore} from '@reduxjs/toolkit'
import countSlice from './countSlice';

const store = configureStore({
    reducer : {
        countsl : countSlice
    }
})

export default store;