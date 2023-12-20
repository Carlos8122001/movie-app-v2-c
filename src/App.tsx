import { CustomRoutes } from "./routes/CustomRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-[#0D0C0F]">
          <CustomRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
