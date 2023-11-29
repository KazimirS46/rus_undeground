import Link from 'next/link';
import Image from 'next/image';

function MainLogoLink() {
  return (
    <Link href={'/'}>
      <Image
        alt=''
        src={'/headerLogo.svg'}
        width={800}
        height={800}
      />
    </Link>
  );
}

export default MainLogoLink;
