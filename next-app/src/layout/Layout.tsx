// src/layout/Layout.tsx
import type { ReactNode } from 'react';
import type { Section } from '../types/Section';
import Navigation from '../components/Navigation';

type LayoutProps = {
  section: Section;
  setSection: (section: Section) => void;
  children: ReactNode;
};

const Layout = ({
  section,
  setSection,
  children,
}: LayoutProps) => {
  return (
    <>
      <Navigation
        currentSection={section}
        setSection={setSection}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
