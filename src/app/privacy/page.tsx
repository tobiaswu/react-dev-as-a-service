import { Navigation } from '@/components/Navigation/Navigation';
import { Pages } from '@/types';

export default function Privacy() {
  return (
    <>
      <Navigation page={Pages.privacy} />
      <h1>Privacy Policy</h1>
    </>
  );
}
