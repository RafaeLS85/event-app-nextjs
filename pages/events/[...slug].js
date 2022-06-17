import {useRouter} from 'next/router'

function FilteredEventsPage(){
    
    const router = useRouter()

    console.log(router)
    return (
        <div>Filtered Events Page</div>
    )
}

export default FilteredEventsPage