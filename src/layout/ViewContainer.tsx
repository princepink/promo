// src/layout/ViewContainer.tsx
import type { ViewState } from "../types/ViewState";

import Cover from "../views/Cover";
import Career from "../views/Career";
import Spec from "../views/Spec";
import Cases from "../views/Cases";
import Contact from "../views/Contact";

import styles from "./ViewContainer.module.scss";

type Props = {
  view: ViewState;
};

const ViewContainer = ({ view }: Props) => {
  switch (view) {
    case "cover":
      return <Cover />;
    case "career":
      return <Career />;
    case "spec":
      return <Spec />;
    case "cases":
      return <Cases />;
    case "contact":
      return <Contact />;
    default:
      return null;
  }
};

export default ViewContainer;
