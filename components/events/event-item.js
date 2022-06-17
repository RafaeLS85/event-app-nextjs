import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
import DateIcon from '../icons/date-icon'
import { Button } from '../ui/button'
import styles from './event-item.module.scss'

export const EventItem = ({item}) => {

    const {title, image, date, location, id} = item
    const dateString = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
    const formattedAddress = location.replace(', ', '\n')
    const link = `/events/${id}`

  return (
    <li className={styles.item}> 
        <img src={'/' + image} alt={title}/>
        <div className={styles.content}>
            <div className={styles.summary}>
                <h2>{title}</h2>
                <div className={styles.date}>
                    <DateIcon />
                    <time>{dateString}</time>
                </div>
                <div className={styles.address}>
                    <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={styles.actions}>                
                <Button link={link}>
                    <span>Explore Event</span>
                    <span className={styles.icon}> <ArrowRightIcon /></span>                    
                </Button>
            </div>

        </div>
    </li>
  )
}
