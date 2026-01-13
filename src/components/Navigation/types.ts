// src/components/Navigation/types.ts
import type { Section } from '@/types/Section';

export type NavigationProps = {
  currentSection: Section;
  setSection: (section: Section) => void;
};
