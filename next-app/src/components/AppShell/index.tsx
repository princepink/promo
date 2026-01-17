'use client';

import { useEffect, useState } from 'react';
import type { Section } from '@/types/Section';

import Navigation from '@/components/Navigation';
import { sectionFromUrl } from '@/utils/sectionFromUrl';
import { updateUrl } from '@/utils/updateUrl';

import Cover from '@/views/Cover';
import Career from '@/views/Career';
import Spec from '@/views/Spec';
import Cases from '@/views/Cases';
import Contact from '@/views/Contact';

const AppShell = () => {
  const [section, setSection] = useState<Section>('cover');

  useEffect(() => {
    const initial = sectionFromUrl();

    if (initial) {
      setSection(initial);
    }
  }, []);

  useEffect(() => {
    updateUrl(section);
  }, [section]);

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
