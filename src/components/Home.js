import React from 'react'
import Cards from './Cards'

const products=[
    {
      id : 1,
      name:"mega",
      price:5000,
      photo:'./Assets/image1.jpg',
      instock:4,
    },
    {
      id : 2,
      name:"web",
      price:6000,
      photo:"./Assets/image2.jpg",
      instock:5,
    },
    {
      id : 3,
      name:"HP",
      price:7000,
      photo:"./Assets/image3.jpg",
      instock:3,
    },
    {
      id : 4,
      name:"Haier",
      price:8000,
      photo:"./Assets/image4.jpg",
      instock:4,
    },
    {
      id : 5,
      name:"Nokia",
      price:9000,
      photo:"./Assets/image5.jpg",
      instock:7,
    },
    {
      id : 6,
      name:"Dell",
      price:10000,
      photo:"./Assets/image6.jpg",
      instock:6,
    },
    {
      id : 7,
      name:"OPPO",
      price:8000,
      photo:"./Assets/image7.jpg",
      instock:7,
    },
    {
      id : 8,
      name:"VIVO",
      price:9000,
      photo:"./Assets/image8.jpg",
      instock:5,
    },
  ]
 
const Home=()=> 
{
  return(
    <div>
  <div className='container'>
     <div className='d-flex flex-wrap jusrify-content-evenly mt-2'>
           {products.map(item=><Cards data={item}/>)} 
     </div>
    </div>
    </div>
  )
}

export default Home