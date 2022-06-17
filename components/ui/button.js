import Link from 'next/link';
import styles from './button.module.scss';

export const Button = (props) => {
  return (
    <Link href={props.link}>        
        <a className={styles.btn}>
            {props.children}
        </a>        
    </Link>
  )
}
