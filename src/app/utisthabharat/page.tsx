import type { Metadata } from 'next/types';


export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function BharatPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5"> hi am hete</h1>
      
    </section>
  );
}
