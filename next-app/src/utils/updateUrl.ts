import type { Section } from '@/types/Section';

export const updateUrl = (section: Section) => {
  const url = new URL(window.location.href);

  url.searchParams.set('section', section);

  window.history.replaceState(null, '', url.toString());
};
