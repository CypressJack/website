import styles from '@/styles/spinner.module.scss'

export default function Spinner({className}) {
  return (
    <div className={`${className} relative h-10`}>
      <div className={styles['loader']}>
        <div className={styles['circle']}></div>
        <div className={styles['circle']}></div>
        <div className={styles['circle']}></div>
        <div className={styles['circle']}></div>
        <div className={styles['circle']}></div>
        <div className={styles['circle']}></div>
        <div className={styles['circle']}></div>
        <div className={styles['circle']}></div>
        <div className={styles['circle']}></div>
      </div>
    </div>
  )
}
