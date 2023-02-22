import Link from 'next/link';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}></div>
        {/* <Search /> */}
        <Link href={''} className={styles.link}>
          Войти
        </Link>
      </div>
    </header>
  );
};
