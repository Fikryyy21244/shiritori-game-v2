import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  if (location.pathname === "/main/start") {
  }

  return (
    <div>
      <main className="flex flex-col justify-center px-40 w-full min-h-screen max-lg:px-10 ">
        <Outlet />
        {location.pathname === "/main/playing" ||
        location.pathname === "/main/game-over" ? (
          <></>
        ) : (
          <Footer />
        )}
      </main>
    </div>
  );
}

export default App;
