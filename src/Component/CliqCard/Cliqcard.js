import React from "react";
import './Cliqcard.scss'

import { BsBagFill, BsHeartFill, BsHeart } from 'react-icons/bs'


import { globalState } from '../../Component/Context/Context.js'
import { useContext } from 'react';


const Cliqcard = () => {


    let { state, dispatch } = useContext(globalState)

    let heart = (getid) => {
        let x = state.arr.map((e) => {
            return getid === e.id ?
                e.fav === 'false' ?({ ...e, fav: e.fav = "true",opps:true })
                    : { ...e, fav: e.fav = "false" } : e
        })

        state.arr.find((e) => {
            return getid === e.id ?dispatch({type:'updateoops', payload:true}):''

        })

        dispatch({ type: 'updatearr', payload: x })
        console.log(state.arr)
    }

    
    let add=(getid)=>{
        let y= state.arr.map((e)=>{
             return getid===e.id?
             e.card===false?{...e,card:e.card=true}
             :{...e,card:e.card=false}:e
         })
 
         dispatch({type:'updatearr', payload:y})
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

                        return state.name==='' || state.name===null?<div key={b} className="cardcol">
                            <div className="cardimg">
                                <img src={a.path} alt="loading" />
                            </div>
                            <div className="cardabout">
                                <h3>{a.name}</h3>
                                <p>{a.about}</p>
                            </div>

                            <div className="cardprice">
                                <h4>Rs. {a.newrate}</h4>
                                <h5><s>{a.oldrate}</s></h5>
                                <div id="offer">{a.offer}% Offer</div>
                            </div>

                            <div className="cardicon">
                                {a.fav === 'false' ? <div onClick={() => heart(a.id)}><BsHeart /></div> :
                                    <div onClick={() => heart(a.id)} style={{ color: 'red' }}><BsHeartFill /></div>

                                }

                                {
                                    a.card===false?
                                    <div className="add" onClick={()=>add(a.id)}><BsBagFill /></div>:
                                    <div className="inde"><button onClick={()=>de(a.id)}>-</button> <span>{a.count}</span> <button onClick={()=>inc(a.id)}>+</button></div>
                                }
                               
                            </div>
                        </div>:a.type===state.name ||state.name===a.name ?
                        <div key={b} className="cardcol">
                        <div className="cardimg">
                            <img src={a.path} alt="loading" />
                        </div>
                        <div className="cardabout">
                            <h3>{a.name}</h3>
                            <p>{a.about}</p>
                        </div>

                        <div className="cardprice">
                            <h4>Rs. {a.newrate}</h4>
                            <h5><s>{a.oldrate}</s></h5>
                            <div id="offer">{a.offer}% Offer</div>
                        </div>

                        <div className="cardicon">
                            {a.fav === 'false' ? <div onClick={() => heart(a.id)}><BsHeart /></div> :
                                <div onClick={() => heart(a.id)} style={{ color: 'red' }}><BsHeartFill /></div>

                            }

                            {
                                a.card===false?
                                <div className="add" onClick={()=>add(a.id)}><BsBagFill /></div>:
                                <div className="inde"><button onClick={()=>de(a.id)}>-</button> <span>{a.count}</span> <button onClick={()=>inc(a.id)}>+</button></div>
                            }
                           
                        </div>
                    </div>:''
                    })

                }
            </div>
        </div>

    </section>
}

export default Cliqcard