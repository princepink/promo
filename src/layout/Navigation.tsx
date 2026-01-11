// src/layout/Navigation.tsx
import type { ViewState } from "../types/ViewState";

type Props = {
  current: ViewState;
  onChange: (view: ViewState) => void;
};

const Navigation = ({ current, onChange }: Props) => {
  return (
    <nav>
      <button onClick={() => onChange("cover")}>Cover</button>
      <button onClick={() => onChange("career")}>Career</button>
      <button onClick={() => onChange("spec")}>Spec</button>
      <button onClick={() => onChange("cases")}>Cases</button>
      <button onClick={() => onChange("contact")}>Contact</button>
    </nav>
  );
};

export default Navigation;
