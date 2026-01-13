// src/utils/viewFromUrl.ts
import type { Section } from '@/types/Section';

export const viewFromUrl = (): Section | null => {
  const params = new URLSearchParams(window.location.search);
  const section = params.get('section');

  if (
    section === 'cover' ||
    section === 'career' ||
    section === 'spec' ||
    section === 'cases' ||
    section === 'contact'
  ) {
    return section;
  }

  return null;
};
