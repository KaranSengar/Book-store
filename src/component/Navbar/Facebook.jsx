import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Cards from './Cards';
import axios from 'axios';


const Facebook = () => {
  const [book , setbook]= useState([])
 
  useEffect(()=>{
    const getbook = async ()=>{
      try{
        const res = await axios.get("http://localhost:8001/book")
        console.log(res.data)
        
        const data = res.data.filter((data)=>data.category === "Free")
        setbook(data)
      }catch(error){
        console.log(error,'error')
      }
    }
    getbook()
  }, [])
   
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrowshow:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
<>
<div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
<div>
<h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid omnis libero. Sequi officiis maiores ratione inventore sunt sapiente error !</p>
</div>

<div>
<Slider {...settings}>
       {
        book.map((item)=>{
       return <Cards item={item} key={item.id}/>
        })
       }
      </Slider>
      </div>

</div>
</>  )
}

export default Facebook