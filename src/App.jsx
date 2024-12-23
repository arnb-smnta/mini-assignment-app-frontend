import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/useAuthHook";
import { routes } from "./lib/routes.url";
import Dashboard from "./components/dashboard";
import PrivateRoute from "./components/ui/PrivateRoute";
import Main from "./components/dashboard/Main";
import Login from "./components/login";
import Register from "./components/register";
import PublicRoute from "./components/ui/PublicRoute";
import CreateProject from "./components/assignement-app/CreateProject";
import ViewProject from "./components/assignement-app/ViewProject";
import ViewTask from "./components/assignement-app/ViewTask";
import ViewAllProjects from "./components/assignement-app/ViewAllProjects";
import EditTask from "./components/assignement-app/EditTask";
import AddTask from "./components/assignement-app/AddTask";
import EditProject from "./components/assignement-app/EditProject";
function App() {
  const { token, user } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          token && user?._id ? (
            <Navigate to={`${routes.DASHBOARD_URL}`} />
          ) : (
            <Navigate to={`${routes.LOGIN_URL}`} />
          )
        }
      />
      <Route
        path={`/Dashboard`}
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route path="app" element={<Main />} />

        {/**Assignement-app routes */}
        <Route
          path={`/Dashboard${routes.CREATEPROJECT}`}
          element={<CreateProject />}
        />
        <Route
          path={`/Dashboard${routes.VIEWPROJECT}`}
          element={<ViewProject />}
        />
        <Route path={`/Dashboard${routes.VIEWTASK}`} element={<ViewTask />} />
        <Route
          path={`/Dashboard${routes.VIEWALLPROJECTS}`}
          element={<ViewAllProjects />}
        />
        <Route path={`/Dashboard${routes.EDITTASK}`} element={<EditTask />} />
        <Route path={`/Dashboard/${routes.ADDTASK}`} element={<AddTask />} />
        <Route
          path={`/Dashboard/${routes.EDITPROJECT}`}
          element={<EditProject />}
        />
      </Route>

      <Route
        path={`${routes.LOGIN_URL}`}
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path={`${routes.REGISTER_URL}`}
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
    </Routes>
  );
}

export default App;
