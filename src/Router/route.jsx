import {createBrowserRouter} from "react-router-dom";
import ShowData from "../component/ShowData";
import AddData from "../component/AddData";
import MainSection from "../component/MainSection";
import Update from "../component/Update";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainSection></MainSection>,
    children: [
      {
        path: "/",
        element: <ShowData />,
      },
      {
        path: "/addData",
        element: <AddData />,
      },
      {
        path: "/update/:id",
        element: <Update/>,
      }
    ],
  },
]);
