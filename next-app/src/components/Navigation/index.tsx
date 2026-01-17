// src/components/Navigation/index.tsx
import type { NavigationProps } from './types';
import { navItems } from './navItems';
import './navigation.css';

const Navigation = ({ current, onChange }: NavigationProps) => {
  return (
    <nav>
      <button onClick={() => onChange('cover')}>Cover</button>
      <button onClick={() => onChange('career')}>Career</button>
      <button onClick={() => onChange('spec')}>Spec</button>
      <button onClick={() => onChange('cases')}>Cases</button>
      <button onClick={() => onChange('contact')}>Contact</button>
    </nav>
  );
};

export default Navigation;
