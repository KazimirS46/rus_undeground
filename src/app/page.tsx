import links from '@/app/ui/SocialSection/links.json';
import { SocialSection } from '@/app/ui/SocialSection';

export default function HomePage() {
  return (
    <main>
      <SocialSection socialLinks={links} />
    </main>
  );
}
