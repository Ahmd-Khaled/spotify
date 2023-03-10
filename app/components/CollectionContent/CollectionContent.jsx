import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from './collectionContent.module.css'

export default function CollectionContent({ icon, title, txt, btn }) {
  return (
    <section>
      <div className={styles.collCont}>
        <div className={styles.collContIcon}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className={styles.collContTitle}>
          <h3>{title}</h3>
        </div>
        <div className={styles.collContTxt}>
          <span>{btn}</span>
        </div>
        <div className={styles.collContBtn}>
          <Link href='/'>{btn}</Link>
        </div>
      </div>
    </section>
  )
}
