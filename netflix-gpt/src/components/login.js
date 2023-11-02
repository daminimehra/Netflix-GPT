import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
       
const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
     const handleBtnClick = () =>{
        //validate the form data
       const message =  checkValidateData(email.current.value, password.current.value);
       setErrorMsg(message);

       if(message)return;

       if(!isSignInForm){
//sign up logic

createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
  
updateProfile(user, {
  displayName: name.current.value, 
}).then(() => {
  // Profile updated!
  // ...
  const {uid,email,displayName }= auth.currentUser;
  dispatch(addUser({uid:uid, email:email, displayName:displayName}))

  navigate("/browse")
}).catch((error) => {
  // An error occurred
  // ...
});
    console.log(user)
    // ...
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMsg(errorCode + "-" + errorMessage)
  });
       }
       else{
//sign in

signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode + "-" + errorMessage)
  });
       }
     }
    return(
        <div >
          <Header/>
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


export default Login;