import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRouter } from "./router/routes";

function App() {
  const allRoutes = [...publicRoutes, getRouter()]; // ✅ no state, no effect
  return <Router allRoutes={allRoutes} />;
}

export default App;
