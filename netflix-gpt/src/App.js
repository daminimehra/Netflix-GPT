import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/login";
import Body from "./components/Body";

function App() {
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
  return (
    <div >
     <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
