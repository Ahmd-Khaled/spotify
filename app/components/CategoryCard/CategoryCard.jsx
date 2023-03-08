import Image from 'next/image';
import Link from 'next/link';
import styles from './categoryCard.module.css';

export default function CategoryCard({ id, img, title, color, link }) {
  console.log(color)
  return (
    <Link href={link} className={styles.category} style={{backgroundColor:color}}>
      <h4 className={styles.categoryTitle}>{title}</h4>
      <Image className={styles.categoryImg} width={100} height={100} src={`/imgs/cards/${img}`} alt={title} />
    </Link>
  )
}
