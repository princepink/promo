// src/layout/Layout.tsx
import { useState, useEffect } from "react";
import type { ViewState } from "../types/ViewState";
import { getInitialView } from "../utils/viewFromUrl";

import Navigation from "./Navigation";
import ViewContainer from "./ViewContainer";

const Layout = () => {
  const [view, setView] = useState<ViewState>(getInitialView());

  // state → URL 同期
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("view", view);
    window.history.pushState(null, "", `?${params.toString()}`);
  }, [view]);

  return (
    <>
      <Navigation current={view} onChange={setView} />
      <ViewContainer view={view} />
    </>
  );
};

export default Layout;
