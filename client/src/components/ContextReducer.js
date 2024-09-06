import React,{createContext,useContext,useReducer} from 'react'
const cartStateContext=createContext();
const cartDispatchContext=createContext();

const reducer=(state,action)=>{
    console.log(action.qty);
    console.log(action.mg);
        console.log(action.date);
    switch(action.type){
        case "ADD":
            return [...state,{name:action.name,qty:action.qty,mg:action.mg,price:action.price,date:action.date}]
        case "Remove":
            let newArr=[...state]
            newArr.splice(action.index,1)
            return newArr;
            case "DROP":
                let emptyArray=[]
                return emptyArray
            default:
                console.log("error")
    }
}
 export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,[]);
    return(
        <cartDispatchContext.Provider value={dispatch}>
            <cartStateContext.Provider value={state}>
                {children}
            </cartStateContext.Provider>
        </cartDispatchContext.Provider>
    )
}
export const useCart=()=>useContext(cartStateContext);
export const useDispatch=()=>useContext(cartDispatchContext);