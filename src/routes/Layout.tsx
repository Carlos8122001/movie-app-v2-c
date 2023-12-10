import NavBar from "../components/NavBar";
import { Home } from "../pages/Home";

export default function Layout() {
  return (
    <div className="w-full h-screen bg-gray-800 flex flex-col justify-center items-center">
      <NavBar />
      <Home/>
    </div>
  );
}
