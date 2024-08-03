import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/LayOut";
import { WhoAmI } from "./components/myComponent/whoAmI/WhoAmI";
import { MySkills } from "./components/myComponent/skills/MySkills";
import { MyProject } from "./components/myComponent/myProject/MyProject";
import { Children } from "./components/myComponent/skills/children/Children";

import { Categories } from "./components/myComponent/skills/children/skillInfo/RRDRouting/Categories";
import { Provider } from "react-redux";
import { store } from "./state/store";
const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: App,
      },
      {
        path: "who-am-i",
        element: <WhoAmI />,
      },
      {
        path: "skills",
        element: <MySkills />,
        children: [
          {
            path: "/skills/:mySkill",
            element: <Children />,
            children: [
              {
                path: "/skills/:mySkill/:id",
                element: <Categories />,
              },
            ],
          },
        ],
      },

      {
        path: "project",
        element: <MyProject />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
