import React from "react";
import './Cliqcard.scss'

import { BsBagFill, BsHeartFill, BsHeart } from 'react-icons/bs'

import { globalState } from '../Context/Context.js'
import { useContext } from 'react';

const Addcard = () => {
    let { state, dispatch } = useContext(globalState)

    let add = (getid) => {
        let y = state.arr.map((e) => {
            return getid === e.id ?
                e.card === false ? { ...e, card: e.card = true ,opps:true}
                    : { ...e, card: e.card = false } : e
        })

        dispatch({ type: 'updatearr', payload: y })
        console.log(state.arr)
    }

    let heart = (getid) => {
        let x = state.arr.map((e) => {
            return getid === e.id ?
                e.fav === 'false' ? { ...e, fav: e.fav = "true" }
                    : { ...e, fav: e.fav = "false" } : e
        })

        dispatch({ type: 'updatearr', payload: x })
        console.log(state.arr)
    }

    let inc=(getid)=>{
        let y= state.arr.map((e)=>{
             return getid===e.id?
             e.card===true?{...e,count:e.count+1}:e:e
         })
 
         dispatch({type:'updatearr', payload:y})
         console.log(state.arr)
     }

     let de=(getid)=>{
        let y= state.arr.map((e)=>{
             return getid===e.id?
             e.card===true?
             e.count>1?{...e,count:e.count-1}:{...e,card:false}:e:e
         })
 
         dispatch({type:'updatearr', payload:y})
         console.log(state.arr)
     }

    return <section>
        <div className="cardcon">
            <div className="cardrow">
                {
                    state.arr.map((a, b) => {
                        return a.card === true ? <div key={b} className="cardcol">
                            <div className="cardimg">
                                <img src={a.path} alt="loading" />
                            </div>
                            <div className="cardabout">
                                <h3>{a.name}</h3>
                                <p>{a.about}</p>
                            </div>

                            <div className="cardprice">
                                <h4>{a.oldrate}</h4>
                                <h5><s>{a.newrate}</s></h5>
                                <div id="offer">{a.offer}% Offer</div>
                            </div>

                            <div className="cardicon">
                                {a.fav === 'false' ? <div onClick={() => heart(a.id)} ><BsHeart /></div> :
                                    <div onClick={() => heart(a.id)} style={{ color: 'red' }}><BsHeartFill /></div>

                                }
                                {
                                    a.card === false ?
                                        <div className="add" onClick={() => add(a.id)}><BsBagFill /></div> :
                                        <div className="inde"><button onClick={() => de(a.id)}>-</button> <span>{a.count}</span> <button onClick={() => inc(a.id)}>+</button></div>
                                }
                            </div>
                        </div> : ''
                    })

                }
            </div>
        </div>

    </section>
}

export default Addcard