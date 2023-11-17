import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import MainRoute from "./routes/MainRoute";
import ErrorPage from "./pages/ErrorPage";
import LoadingPage from "./pages/LoadingPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { register } from "swiper/element/bundle";
// imports
register();

// end swiper reg

const mode = import.meta.env.PROD;
if (mode) {
  disableReactDevTools();
  console.log = () => {};
}

// routes
const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainRoute />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <HomePage />
            </Suspense>
          ),
        },
        // {
        //   path: "/contact",
        //   element: <Contact />,
        // },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ],
  { basename: "/weClone/" },
);

// main app
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>,
);
