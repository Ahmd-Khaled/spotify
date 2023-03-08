import styles from './contentWrapper.module.css';

export default function ContentWrapper({children, bgGradient}) {
  return (
    <div className={bgGradient ? `${styles.bgGradient}` : `${styles.contentWrapper}`}>{children}</div>
  )
}
