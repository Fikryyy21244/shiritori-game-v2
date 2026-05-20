import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <main className="flex flex-col justify-center px-40 w-full min-h-screen ">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default App;
