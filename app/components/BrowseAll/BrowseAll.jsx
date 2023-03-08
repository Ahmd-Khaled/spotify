import { CategoryCard } from '..';
import { categories } from '../../utils/lists';
import styles from './browseAll.module.css';

export default function BrowseAll() {
  return (
    <div className={styles.browse}>
      <h3 className={styles.browseTitle}>Browse all</h3>
      <div className={styles.browseList}>
        {categories?.map((category) => (
          <div key={category?.id}>
            <CategoryCard
              id={category?.id}
              img={category?.img}
              title={category?.title}
              color={category?.color}
              link={category?.link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
