import { ROUTES } from "@/utils/routes";
import Link from "next/link";

import styles from './page.module.css';

export default function App() {
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
    href: ROUTES.EMBED_PLAYER,
    label: 'Embed Player'
  }
]