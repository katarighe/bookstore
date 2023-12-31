import { ImUser } from 'react-icons/im';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading_text}>Bookstore CMS</h1>
        <nav className={styles.navigation}>
          <ul>
            <li><Link to="/">BOOKS</Link></li>
            <li><Link to="/categories">CATEGORIES</Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.im_icon}>
        <ImUser />
      </div>
    </header>
  );
}
