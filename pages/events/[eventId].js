import {useRouter} from 'next/router'

function EventDetailPage(){
    const router = useRouter()
    const {eventId} = router.query
    return <h1>Events detail page: {eventId}</h1>
}

export default EventDetailPage