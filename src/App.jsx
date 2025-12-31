import { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRouter } from "./router/routes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  useEffect(() => {
    const routes = getRouter();
    setAllRoutes((prev) => [...prev, routes]);
  }, []);
  return <Router allRoutes={allRoutes} />;
}

export default App;
