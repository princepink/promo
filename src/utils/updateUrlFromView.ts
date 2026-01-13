// src/utils/updateUrlFromView.ts
import type { Section } from '@/types/Section';

/**
 *	Use replaceState instead of pushState
 *	Do not save Navigation operations as history.
 *	If you want to enable back history, simply replace this.
 */
export const updateUrlFromView = (section: Section): void => {
  const url = new URL(window.location.href);
  url.searchParams.set('section', section);

  window.history.replaceState(null, '', url.toString());
};
