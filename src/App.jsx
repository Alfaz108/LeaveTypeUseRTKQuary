import { RouterProvider } from "react-router-dom";
import { route } from "./Router/route";

function App() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
