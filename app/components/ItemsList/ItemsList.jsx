import Link from 'next/link';
import { SongCard } from '..';
import styles from './itemsList.module.css';

export default function ItemsList({itemsList, title, link}) {
  return (
    <div className={styles.contWrapper}>
      <div className={styles.contTop}>
        <Link className={styles.contLink} href={link}>{title}</Link>
        <Link className={styles.contShowAll} href='/focus'>Show all</Link>
      </div>
      <ul className={styles.contList}>
        {itemsList?.map((item) => (
          <li key={item.id} className={styles.contListItem}>
            <SongCard
              id={item.id}
              link={item.link}
              img={item.img}
              title={item.title}
              about={item.about}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
