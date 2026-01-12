import { useState } from 'react';
import type { Section } from './types/Section';

import Cover from './views/Cover';
import Career from './views/Career';
import Spec from './views/Spec';
import Cases from './views/Cases';
import Contact from './views/Contact';

function App() {
  const [section, setSection] = useState<Section>('cover');

  return (
    <>
      {section === 'cover' && <Cover />}
      {section === 'career' && <Career />}
      {section === 'spec' && <Spec />}
      {section === 'cases' && <Cases />}
      {section === 'contact' && <Contact />}
		  <button onClick={() => setSection('career')}>
  Career
</button>

    </>
  );
}

export default App;
