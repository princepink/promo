import type { Section } from '@/types/Section';
import type { Metadata } from 'next';

type SectionMetadataMap = {
  [key in Section]: Metadata;
};

const baseOg = {
  type: 'website',
  siteName: 'PR App',
};

export const sectionMetadata: SectionMetadataMap = {
  cover: {
    title: 'Cover | PR App',
    description: 'Frontend-focused personal PR application.',
    openGraph: {
      ...baseOg,
      title: 'Cover | PR App',
      description: 'Frontend-focused personal PR application.',
    },
  },
  career: {
    title: 'Career | PR App',
    description: 'Career history and professional background.',
  },
  spec: {
    title: 'Spec | PR App',
    description: 'Technical skills, stack, and specifications.',
  },
  cases: {
    title: 'Cases | PR App',
    description: 'Selected projects and case studies.',
  },
  contact: {
    title: 'Contact | PR App',
    description: 'Contact information and links.',
  },
};
