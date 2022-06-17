import { EventItem } from "./event-item"
import styles from './event-list.module.scss'

export const EventList = ({items}) => {
  return (
    <ul className={styles.list}>
        {
            items.map(item => {
                return <EventItem key={item.id} item={item} />
            })
        }
    </ul>
  )
}
