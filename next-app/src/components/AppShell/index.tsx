// next-app/src/components/AppShell/index.tsx

'use client';

import { useState } from 'react';
import type { Section } from '@/types/Section';

import Navigation from '@/components/Navigation';

import Cover from '@/views/Cover';
import Career from '@/views/Career';
import Spec from '@/views/Spec';
import Cases from '@/views/Cases';
import Contact from '@/views/Contact';

const AppShell = () => {
  const [section, setSection] = useState<Section>('cover');

  return (
    <>
      <Navigation current={section} onChange={setSection} />

      {section === 'cover' && <Cover />}
      {section === 'career' && <Career />}
      {section === 'spec' && <Spec />}
      {section === 'cases' && <Cases />}
      {section === 'contact' && <Contact />}
    </>
  );
};

export default AppShell;
