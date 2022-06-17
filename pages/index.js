
import { EventList } from '../components/events/event-list'
import { getFeaturedEvents } from '../data/dummy-data'

export default function Home() {
  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}
