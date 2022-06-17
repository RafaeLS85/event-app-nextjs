import { EventItem } from "./event-item"

export const EventList = ({items}) => {
  return (
    <ul>
        {
            items.map(item => {
                return <EventItem key={item.id} item={item} />
            })
        }
    </ul>
  )
}
