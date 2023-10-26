import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";

const Body = () =>{

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

    const email = useRef();
    const password = useRef();
     const handleBtnClick = () =>{
        //validate the form data
       const message =  checkValidateData(email.current.value, password.current.value);
       setErrorMsg(message);
     }    
    return(
        <div >
            <div className="absolute">
    <img alt="logo"
     src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_medium.jpg"/>
</div>
<div>
<form onSubmit={(e)=>{
    e.preventDefault()
}}
 className="text-white bg-opacity-80 w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black" >
    <h1 className="font-bold text-3xl py-4">{ isSignInForm?"Sign In" :"sign up"}</h1>
    { !isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-2 w-full  bg-gray-500"/>}
    
    
    <input type="text" 
    ref={email}
    placeholder="Email Address" className="p-2 my-2 w-full  bg-gray-500"/>
    <input type="password"
    ref={password} placeholder="Email Address" className="p-2 my-2 w-full bg-gray-500"/>
    
    <p className="text-red-500 font-bold text-lg">{errorMsg}</p>

    <button
    onClick={handleBtnClick}
     className="p-2 my-4 bg-red-700 w-full rounded-lg">{ isSignInForm?"Sign In" :"sign up"}</button>
  <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{ isSignInForm?"new to netflix? sign up now" :"already registerd ? sign in now"}</p>
</form>
</div>

        </div>

    )
}

export default Body;