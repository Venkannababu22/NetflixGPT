import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider
        router={appRouter}
        future={{
          v7_startTransition: true,
        }}
      />
    </div>
  );
};

export default Body;
