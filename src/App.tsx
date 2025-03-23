import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Builds from "./pages/Builds";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="builds" element={<Builds />} />
        <Route path="skills" element={<Skills />} />
        <Route path="cv" element={<CV />} />
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
