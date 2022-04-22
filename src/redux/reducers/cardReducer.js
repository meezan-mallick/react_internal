const intialState = [
    {
        id:0,
        cardnumber:"123456789876543",
        name :"meezan",
        mobile:"1234567889",
        gender:"male"

    }
    
]

const cardReducer = (state = intialState,action) =>{
    switch(action.type){
        case "ADD_CARD":
            state = [...state, action.payload];
            return state;
        default:
            return state;
    }
}

export default cardReducer