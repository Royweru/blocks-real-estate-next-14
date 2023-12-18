import React from 'react'
import { Card } from '../ui/card'
import ListingCard from '../listing-card'


const ListingMap = [
    {id:1,content:"wen"},
    {id:2,content:"wen"},
    {id:3,content:"wen"},
    {id:4,content:"wen"},
    {id:5,content:"wen"},
    {id:6,content:"wen"},
    {id:7,content:"wen"},
    {id:8,content:"wen"},
    {id:9,content:"wen"},
    {id:10,content:"wen"},
]
const MiniListing = () => {
  return (
    <div className=' w-full mt-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
       {ListingMap.map(listing=>(
         <ListingCard key={listing.id}/>
       ))}
    </div>
  )
}

export default MiniListing