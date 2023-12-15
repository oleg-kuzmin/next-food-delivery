import Link from 'next/link';
import Image from 'next/image';
import imageFacebook from '@/public/svg/social-facebook.svg';
import imageInstagram from '@/public/svg/social-instagram.svg';
import imageVkontakte from '@/public/svg/social-vkontakte.svg';
import imageYoutube from '@/public/svg/social-youtube.svg';
import styles from './ContactsSocial.module.scss';

export default function ContactsSocial() {
  return (
    <div className={styles.ContactsSocial}>
      <span className={styles.ContactsSocial__Title}>Мы в соц сетях:</span>
      <ul className={styles.ContactsSocial__List}>
        <li>
          <Link href="https://github.com/oleg-kuzmin" className="outline-focus">
            <Image className={styles.ContactsSocial__Image} src={imageFacebook} alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/oleg-kuzmin" className="outline-focus">
            <Image className={styles.ContactsSocial__Image} src={imageVkontakte} alt="Vkontakte" />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/oleg-kuzmin" className="outline-focus">
            <Image className={styles.ContactsSocial__Image} src={imageYoutube} alt="Youtube" />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/oleg-kuzmin" className="outline-focus">
            <Image className={styles.ContactsSocial__Image} src={imageInstagram} alt="Instagram" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
