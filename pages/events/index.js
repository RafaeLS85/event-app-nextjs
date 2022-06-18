import { EventList } from "../../components/events/event-list"
import { getAllEvents } from "../../data/dummy-data"

function EventsPage(){
    const events = getAllEvents()
    return (
        <div>            
            <EventList items={events}/>
        </div>
    )
}

export default EventsPage