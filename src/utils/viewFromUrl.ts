// src/utils/viewFromUrl.ts
import type { ViewState } from "../types/ViewState";

const isViewState = (value: string): value is ViewState => {
  return ["cover", "career", "spec", "cases", "contact"].includes(value);
};

export const getInitialView = (): ViewState => {
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");

  if (view && isViewState(view)) {
    return view;
  }
  return "cover";
};
