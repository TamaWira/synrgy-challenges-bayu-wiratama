// import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cars from "./pages/Cars/Cars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cars",
    element: <Cars />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
