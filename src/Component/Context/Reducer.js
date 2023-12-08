import product from '../../product.json'

export const initialState={
    name:'',
    oops:false,
    arr:product.data

}

export const Reducer=(state,action)=>{

    if(action.type==='updatearr'){
        console.log(action)
        return {...state, arr:action.payload}
    }

    if(action.type==='updatename'){
        console.log(action)
        return {...state, name:action.payload}
    }

    if(action.type==='updateoops'){
        console.log(action)
        return {...state, oops:action.payload}
    }
 

}