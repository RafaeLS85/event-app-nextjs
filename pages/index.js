
import { EventList } from '../components/events/event-list'
import EventSearch from '../components/events/event-search'
import { getFeaturedEvents } from '../data/dummy-data'

export default function Home() {
  const featuredEvents = getFeaturedEvents()
  return (
    <>
      <EventSearch />
      <EventList items={featuredEvents} />
    </>
  )
}
