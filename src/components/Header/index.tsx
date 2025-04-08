import { ROUTES } from "@/utils/routes";
import Link from "next/link";

import styles from './Header.module.css';

export default function Header() {

  return (
    <header className={styles.header}>
      <Link href={ROUTES.HOME} className={styles.link}>Home</Link>
    </header>
  )
}