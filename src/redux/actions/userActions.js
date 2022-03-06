import axios from "axios";

export const userRegister=async(valueObj)=>{
    dispatchEvent({type:"LOADING",payload:true});
    try {
        const res=await axios.post("url",valueObj);
        dispatch({type:"LOADING",payload:false})

    } catch (error) {
        console.log('error.message', error.message)
        dispatch({type:"LOADING",payload:false})
    }
}