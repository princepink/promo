// src/components/Navigation/types.ts
import type { Section } from '@/types/Section';

export type NavigationProps = {
  current: Section;
  onChange: (section: Section) => void;
};
