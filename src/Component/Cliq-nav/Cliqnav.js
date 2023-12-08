import React, { useState } from "react"
import './Cliqnav.scss'

import {IoPersonCircleSharp} from 'react-icons/io5'
import Cliqcard from "../CliqCard/Cliqcard.js"
import {BsHeartFill,BsBagFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'

import { globalState } from '../../Component/Context/Context.js'
import { useContext } from 'react';
import { useNavigate } from "react-router-dom"

const Cliqnav = () => {

    let {state,dispatch}=useContext(globalState)
    let a=useNavigate()

    let wishlist=()=>{
        a('/wishlist')

    }
    
    let add=()=>{
        a('/add')

    }

    let [searchname,setname]=useState()

    let hand=(e)=>{
        if(e.target.name==='productname'){
            setname(e.target.value)
            console.log((searchname))
         }
         console.log(searchname)

    }

    let search=()=>{
        console.log('hello')  
            dispatch({type:'updatename',payload:searchname}) 

    }
    return <div>

    <section className="navsec">
            <div className="navcon">
                <div className="navrow">
                    <div className="navcol1">
                        <div className="navlogo">
                            <img src="https://5.imimg.com/data5/SELLER/Default/2022/7/XJ/UE/CP/69487233/tata-cliq-gift-voucher-card-500x500.jpg" alt="loading"></img>

                        </div>


                    </div>

                    <div className="navcol2">
                    <div className="sec1">
                        <div className="navcol2-row1">
                            <div className="tata">
                                Tata CLIQ Luxury
                            </div>

                            <div className="head">
                                <h4>CLIQ CASH</h4>
                                <h4>Gift Card</h4>
                                <h4>Cliq Care</h4>
                                <h4>Track Order</h4>
                                <h4><IoPersonCircleSharp/></h4>
                            </div>

                        </div>
                        <div className="sec1-1">
                            <div className="input">
                                <input type="text" name='productname' onChange={hand}  value={searchname} placeholder="Search product"></input>
                                 
                            </div>
                            <div className="icon" onClick={search}>
                                <AiOutlineSearch />

                            </div>
                            

                        </div>

                    </div>

                        <div className="navcol2-row2">
                            <div onClick={wishlist} className="heart">
                                <BsHeartFill/>
                            </div>
                            <div onClick={add}>
                                <div className="add"><BsBagFill /></div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </section>
        <section>
            {
                state.arr.filter((e)=>
                     e.name.toLowerCase().includes(searchname)
                ).map((e)=>(
                    <li> {e.name}</li>
                    
                ))
            }
        </section>
        <Cliqcard/>
        </div>
}

export default Cliqnav