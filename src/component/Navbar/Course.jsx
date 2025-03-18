import { Link } from "react-router-dom";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";
const Course = () => {
  const [book,setbook]=useState([]);

useEffect(()=>{
  const getbook =async ()=>{
    try{
   const res = await axios.get("http://localhost:8001/book");
   console.log(res.data)
   setbook(res.data)
    }catch(error){
      console.log(error,'error')
    }
  }
  getbook()
}, [])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you {""}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            non odio, expedita nulla numquam quo dicta, iure minus temporibus
            similique tempore fugit earum obcaecati sunt aperiam veritatis natus
            maxime, cupiditate excepturi magnam. amet consectetur adipisicing
            elit. Quibusdam non odio, expedita nulla numquam quo dicta, iure
            minus temporibus Dolorem quia quos, est dolorum impedit voluptatibus
            atque?
          </p>
          <Link to='/'>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 ">{
             book.map((item)=>(
      <Cards key={item.id} item={item} />
             ))
        }</div>
      </div>
    </>
  );
};

export default Course;
