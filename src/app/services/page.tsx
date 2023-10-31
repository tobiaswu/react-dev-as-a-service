import { Navigation } from '@/components/Navigation/Navigation';
import { Pages } from '@/types';

export default function Services() {
  return (
    <>
      <Navigation page={Pages.services} />
      <h1>My Services</h1>
    </>
  );
}
