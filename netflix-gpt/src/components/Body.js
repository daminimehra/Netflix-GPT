import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () =>{

  const dispatch = useDispatch();
  const appRouter  = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },

    {
      path:"/body",
      element:<Body/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
  ])

  useEffect(()=>{
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName }= user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}))
    
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
     
      }
    });
  },[])

  return (
    <div >
     <RouterProvider router={appRouter}/>
    </div>
  );
}

export default Body;