import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n.ts";
import LoadingPage from "./components/Lazy/LoadingPAge.tsx";

const AppLazyLoading = lazy(() => import("./App.tsx"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <AppLazyLoading />
    </Suspense>
  </React.StrictMode>
);
