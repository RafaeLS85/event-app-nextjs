import { useRouter } from 'next/router'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventSummary from '../../components/event-detail/event-summary'
import { getEventById } from '../../data/dummy-data'

function EventDetailPage(){
    const router = useRouter()
    const { eventId } = router.query
    const event = getEventById(eventId)

    if(!event){
        return <p>No event found</p>
    }

    return (
        <>
           <EventSummary title={event.title} />
           <EventLogistics event={event} />
           <EventContent>
            <p>{event.description}</p>
           </EventContent>
        </>
    )
}

export default EventDetailPage