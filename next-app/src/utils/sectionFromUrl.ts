import type { Section } from '@/types/Section';

const SECTIONS: Section[] = [
  'cover',
  'career',
  'spec',
  'cases',
  'contact',
];

export const sectionFromUrl = (): Section | null => {
  const params = new URLSearchParams(window.location.search);
  const section = params.get('section');

  if (section && SECTIONS.includes(section as Section)) {
    return section as Section;
  }

  return null;
};
