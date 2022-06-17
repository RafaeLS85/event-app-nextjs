import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
    <li> 
        <img src={'/' + image} alt={title}/>
        <div>
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{dateString}</time>
                </div>
                <div>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <Link href={link}>Explore event</Link>
        </div>
    </li>
  )
}
