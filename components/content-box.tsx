import React from 'react'
import Box from './ui/box'

const BoxContent =[
    {
        id:1,
        title:"are yout herte too",
        desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam ",
        link:"look futher"
    },
    {
        id:2,
        title:"are yout herte too",
        desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam ",
        link:"fond out more"
    },
    {
        id:3,
        title:"are yout herte too",
        desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
        link:"get support from our IT Team"
    },
]
const ContentBox = () => {
  return (
    <div className=' w-full grid grid-cols-1 md:grid-cols-3 gap-12 px-5'>
         {BoxContent.map(content=>(
            <div key={content.id}>
                <Box  title={content.title} desc={content.desc} link={content.link} />
            </div>
            
         ))}
    </div>
  )
}

export default ContentBox