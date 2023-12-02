import Image from 'next/image';
import logos from '@/public/svg/logos.svg';

export default function Logos({ className }) {
  return <Image className={className} src={logos} alt="logos" priority />;
}
