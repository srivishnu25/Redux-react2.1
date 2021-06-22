import { ADDING, DELETE } from "../actionTypes/actionTypes"


const initialState = {
     products: [{name:"abc",id:'1'}]
}

const Reducers=  (state = initialState, { type, payload }) => {
    
    switch (type) {
    
    case ADDING:
        return { ...state.products,products:[...state.products,payload] }
    case DELETE:{
        const id= payload;
        const updatePro = state.products.filter(item=> item.id!==id)
        return {...state,products:updatePro}
    }


    default:
        return state
    }
}
export default Reducers;