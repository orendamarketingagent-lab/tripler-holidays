import TestimonialsClient from '@/components/TestimonialsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Triple R Holidays',
  description: 'Read what our travelers say about their experience with Triple R Holidays Sri Lanka tours and services.'
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
