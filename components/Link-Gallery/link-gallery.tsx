import styles from './link-gallery.module.css'

const LinkGallery=()=>{
    return(
        <div className={styles.linkWrapper}>
        <li className={styles.list}>
          <a className={styles.link} href="/personality">
            Personality
          </a>
        </li>
        <li className={styles.list}>
          <a className={styles.link} href="/couple">
            Couples
          </a>
        </li>
        <li className={styles.list}>
          <a className={styles.link} href="/family">
            Family moments
          </a>
        </li>
        <li className={styles.list}>
          <a className={styles.link} href="/boudoir">
            Boudoir
          </a>
        </li>
      </div>
    )
}
export default LinkGallery