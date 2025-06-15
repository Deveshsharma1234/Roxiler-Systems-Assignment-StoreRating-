import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";

const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element : <App/>,
            children: 
            [
                {
                    index : true,
                    element: <Login/>
                },
                  {
                    path : "/register",
                    element: <h1>Register</h1>
                }


            ]

        }
    ]

)



export default appRouter;