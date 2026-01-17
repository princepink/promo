import type { Metadata } from 'next';
import AppShell from '@/components/AppShell';
import { sectionMetadata } from '@/metadata/sectionMetadata';
import type { Section } from '@/types/Section';

type PageProps = {
  searchParams: Promise<{
    section?: string;
  }>;
};

export const generateMetadata = async ({
  searchParams,
}: PageProps): Promise<Metadata> => {
  const params = await searchParams;
  const section = params.section as Section | undefined;

  if (section && section in sectionMetadata) {
    return sectionMetadata[section];
  }

  return sectionMetadata.cover;
};

const Page = () => {
  return <AppShell />;
};

export default Page;
