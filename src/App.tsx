import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./lib/components/PageLayout.tsx";
import Root from "./routes/Root.tsx";
import Software from "./routes/software/Software.tsx";
import Music from "./routes/music/Music.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/software",
        element: <Software />,
      },
      {
        path: "/music",
        element: <Music />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
