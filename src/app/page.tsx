import links from '../components/SocialSection/links.json';
import { SocialSection } from '@/components/SocialSection';

export default function Home() {
  return (
    <main>
      <SocialSection socialLinks={links} />
    </main>
  );
}
