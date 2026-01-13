// src/App.tsx
import { useState } from 'react';
import type { Section } from './types/Section';

import Layout from './layout/Layout';

import Cover from './views/Cover';
import Career from './views/Career';
import Spec from './views/Spec';
import Cases from './views/Cases';
import Contact from './views/Contact';

const App = () => {
  const [section, setSection] = useState<Section>('cover');

  return (
    <Layout section={section} setSection={setSection}>
      {section === 'cover' && <Cover />}
      {section === 'career' && <Career />}
      {section === 'spec' && <Spec />}
      {section === 'cases' && <Cases />}
      {section === 'contact' && <Contact />}
    </Layout>
  );
};

export default App;
