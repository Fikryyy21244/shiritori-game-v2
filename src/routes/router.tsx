import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/page";
import HowToPlayPage from "../pages/HowToPlay/page";
import AboutPage from "../pages/About/page";
import KotobaListPage from "../pages/KotobaList/page";
import PlayPage from "../pages/Play/page";
import PlayingPage from "../pages/Playing/page";
import GameOverPage from "../pages/GameOver/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/main",
        element: <PlayPage />,
      },
      {
        path: "/list-kotoba",
        element: <KotobaListPage />,
      },
      {
        path: "/tentang",
        element: <AboutPage />,
      },
      {
        path: "/cara-bermain",
        element: <HowToPlayPage />,
      },
      {
        path: "/main/playing",
        element: <PlayingPage />,
      },
      {
        path: "/main/game-over",
        element: <GameOverPage />,
      },
    ],
  },
]);

export default router;
