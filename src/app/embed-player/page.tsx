import Link from 'next/link';
import styles from './page.module.css';
import { ROUTES } from '@/utils/routes';

export default function EmbedPlayer() {

  return (
    <div className={styles.wrapper}>
      {
        LINK_ARRAY.map(link => (
          <Link href={link.href} key={link.label} className={styles.link}>{link.label}</Link>
        ))
      }
    </div>
  );
}

const LINK_ARRAY: {
  href: string,
  label: string;
}[] = [
  {
    href: `${ROUTES.EMBED_PLAYER}doc-example`,
    label: 'Doc example'
  },
  {
    href: `${ROUTES.EMBED_PLAYER}custom-example`,
    label: 'Custom example'
  }
]