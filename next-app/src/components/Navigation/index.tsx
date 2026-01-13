// src/components/Navigation/index.tsx
import type { NavigationProps } from './types';
import { navItems } from './navItems';
import './navigation.css';

const Navigation = ({
  currentSection,
  setSection,
}: NavigationProps) => {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              data-active={currentSection === item.id}
              onClick={() => setSection(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
