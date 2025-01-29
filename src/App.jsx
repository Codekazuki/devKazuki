import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  ContactUs,
  HomeLayout,
  Landing,
  Experience,
  Project,
  Resume,
} from "./pages";
import { AppProvider } from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactme",
        element: <ContactUs />,
      },
      {
        path: "project",

        element: <Project />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};
export default App;
