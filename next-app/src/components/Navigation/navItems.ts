// src/components/Navigation/navItems.ts
import type { Section } from '@/types/Section';

export type NavItem = {
  id: Section;
  label: string;
};

export const navItems: NavItem[] = [
  { id: 'cover', label: 'Cover' },
  { id: 'career', label: 'Career' },
  { id: 'spec', label: 'Spec' },
  { id: 'cases', label: 'Cases' },
  { id: 'contact', label: 'Contact' },
];
