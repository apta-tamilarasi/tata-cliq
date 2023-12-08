import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import { globalState } from './Component/Context/Context.js'
import { initialState,Reducer } from './Component/Context/Reducer.js'

import Cliqnav from './Component/Cliq-nav/Cliqnav.js'
import Wishlistcard from "./Component/Wishlist/wishlistlcard.js";
import Addcard from "./Component/Addcard/Addcard.js";


const Routing = () => {

    let [state,dispatch]=useReducer(Reducer,initialState)
    console.log(state)
    console.log(dispatch)
    return (


        <globalState.Provider value={{state,dispatch}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Cliqnav />}></Route>
                    <Route path='/wishlist' element={<Wishlistcard/>}></Route>
                    <Route path='/add' element={<Addcard/>}></Route>
                </Routes>
            </BrowserRouter>
        </globalState.Provider>
    )
}

export default Routing