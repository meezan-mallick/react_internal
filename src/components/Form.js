import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Form = () => {


    const [cardNumber,setCardNumber] = useState("");
    const [name,setName] = useState("");
    const [mobileNumber,setMobilenumber] = useState("");
    const [gender,setGender] = useState("");

    const cards = useSelector((state)=>state);
    const dispatch = useDispatch();

     // Find the first digit
     function firstDigit(n)
     {
         // Remove last digit from number
         // till only one digit is left
         while (n >= 10)
             n /= 10;
        
         // return the first digit
         return Math.floor(n);
    }

    //validations
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!cardNumber || !name || !mobileNumber || !gender){
            return toast.warning("please fill all the fields");
        }
        if(firstDigit(mobileNumber) == 0 || firstDigit(mobileNumber) == 1 || firstDigit(mobileNumber) == 2 || firstDigit(mobileNumber) == 3 || firstDigit(mobileNumber) == 4 || firstDigit(mobileNumber) == 5 ){
            return toast.error("mobile number first digit should be 6,7,8,9");
        }
        if(cardNumber.length<16){
            return toast.error("card number should be more than 16 digit");
        }
        if(mobileNumber.length<10){
            return toast.error("mobile number should be more than 10 digit");
        }
        else{
            
            const data = {
                id: cards[cards.length - 1].id + 1,
                cardNumber,
                name,
                mobileNumber,
                gender
            }

            dispatch({type:"ADD_CARD",payload:data})
            toast.success("Card Added");
        }
    }


    return (


        <div className="container">

            <div className="row">

                <div className="col-md-6 offset-3 shadow p-4 mt-3">
                <h1 className="display-6  text-center">Add Debit Card</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-2">
                            <input class="form-control" type="number" placeholder="Debit Card number"value={cardNumber}   onChange={e => setCardNumber(e.target.value)}/>
                        </div>
                        <div className="form-group p-2">
                            <input class="form-control" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="form-group p-2">
                            <input class="form-control" type="number" placeholder="Mobile number"value={mobileNumber} onChange={e => setMobilenumber(e.target.value)}/>
                        </div>
                        <div className="form-group p-2">
                            <input class="form-control" type="text" placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)}/>
                        </div>
                        <div className="form-group p-2">
                            <input className="btn btn-primary" type="submit" value="Add"/>
                        </div>
                        
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Form