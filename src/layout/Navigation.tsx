// src/layout/Navigation.tsx
import type { ViewState } from "../types/ViewState";

import styles from "./Navigation.module.scss";

type Props = {
  current: ViewState;
  onChange: (view: ViewState) => void;
};

const Navigation = ({ current, onChange }: Props) => {
  const items: ViewState[] = [
    "cover",
    "career",
    "spec",
    "cases",
    "contact",
  ];

  return (
    <nav className={styles.nav}>
      {items.map((item) => (
        <div
          key={item}
          className={`${styles.card} ${
            current === item ? styles.active : ""
          }`}
          onClick={() => onChange(item)}
        >
          {item}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
