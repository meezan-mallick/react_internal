const intialState = [
    {
        id:0,
        cardnumber:123456789876543,
        name :"meezan",
        mobile:1234567889,
        gender:"male"

    }
    
]

const cardReducer = (state = intialState,action) =>{
    switch(action.type){
        default:
            return state;
    }
}

export default cardReducer