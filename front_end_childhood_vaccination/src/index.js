import "./styles/index.css";
import "./styles/App.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  HashRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginChild from "./components/pages/Logins/LoginChild";
import LoginVaccinator from "./components/pages/Logins/LoginVaccinator";
import Error from "./components/pages/Error";
import VaccinationCard from "./components/pages/Child/VaccinationCard";
import RegisterChild from "./components/pages/HealthPersonnel/RegisterChild";
import ActionTable from "./components/pages/HealthPersonnel/ActionTable";
import CreateUsers from "./components/pages/Admin/CreateUsers";
import Users from "./components/pages/Admin/Users";
import Menu from "./components/pages/Menu";
import User from "./components/pages/Admin/User";

function ProtectedRoute({ children, allowedRoles }) {
  const rolUsuario = localStorage.getItem("rol");

  const isAllowed = allowedRoles.includes(rolUsuario);

  if (!isAllowed) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginChild />,
    errorElement: <Error />,
  },
  {
    path: "loginVaccinator",
    element: <LoginVaccinator />,
    errorElement: <Error />,
  },
  {
    path: "Menu",
    element: <Menu />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            path: "vaccinationCard/:documento",
            element: (
              <ProtectedRoute allowedRoles={["Child"]}>
                <VaccinationCard />
              </ProtectedRoute>
            ),
          },
          {
            path: "RegisterChild",
            element: (
              <ProtectedRoute
                allowedRoles={["Enfermera", "Jefe de enfermeria"]}
              >
                <RegisterChild />
              </ProtectedRoute>
            ),
            children: [
              {
                errorElement: <Error />,
                children: [
                  {
                    path: "Action/:documento",
                    element: (
                      <ProtectedRoute
                        allowedRoles={["Enfermera", "Jefe de enfermeria"]}
                      >
                        <ActionTable />
                      </ProtectedRoute>
                    ),
                  },
                ],
              },
            ],
          },
          {
            path: "CreateUsers",
            element: (
              <ProtectedRoute allowedRoles={["Jefe de enfermeria"]}>
                <CreateUsers />
              </ProtectedRoute>
            ),
            children: [
              {
                errorElement: <Error />,
                children: [
                  {
                    path: "Users",
                    element: (
                      <ProtectedRoute allowedRoles={["Jefe de enfermeria"]}>
                        <Users />
                      </ProtectedRoute>
                    ),
                  },
                  {
                    path: "User/:documento",
                    element: (
                      <ProtectedRoute allowedRoles={["Jefe de enfermeria"]}>
                        <User />
                      </ProtectedRoute>
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
