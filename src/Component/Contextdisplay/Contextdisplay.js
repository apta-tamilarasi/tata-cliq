
import React, { useContext } from "react"

import { globalState } from '../../Component/Context/Context.js'

const Contextdisplay=()=>{


    let {state,dispatch}=useContext(globalState)

   const change=()=>{
    dispatch({type:'updatename', payload:'kalai'})
 

   }

   const hand=(id)=>{

  let x= state.arr.map((e)=>{
        return e.id===id?{...e,newrate:parseInt(e.newrate)-20}:e
    })
    dispatch({type:'updatearr', payload:x})
 

   }

    return <section>

    <div>
        <h2 onClick={change}>{state.name}</h2>
        {
            state.arr.map((a)=>{
                console.log(a)
                return <div>
                    <div>
                            <img src={a.image} alt="loading"></img>
                    </div>
                    <h2>{a.name}</h2>
                    <h4>{a.newrate}</h4>

                    <button onClick={()=>hand(a.id)}>20% Offer</button>
                </div>
            })
        }


    </div>
    </section>
}

export default Contextdisplay

