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
        path: "contactus",
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
