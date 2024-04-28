import "./styles/index.css";
import './styles/App.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Menu from "./components/common/Menu";
import LoginChild from "./components/pages/Logins/LoginChild";
import LoginVaccinator from "./components/pages/Logins/LoginVaccinator";
import Error from "./components/pages/Error";
import VaccinationCard from "./components/pages/Child/VaccinationCard";
import RegisterChild from "./components/pages/Vaccinators/RegisterChild";

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
    path: "/loginVaccinator",
    element: <LoginVaccinator />,
    errorElement: <Error />,
  },
  {
    path: "/Menu",
    element: <Menu />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            path: "vaccinationCard",
            element: (
              <ProtectedRoute allowedRoles={["Child"]}>
                <VaccinationCard />
              </ProtectedRoute>
            ),
          },
          {
            path: "RegisterChild",
            element: (
              <ProtectedRoute allowedRoles={["Enfermera"]}>
                <RegisterChild />
              </ProtectedRoute>
            ),
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
