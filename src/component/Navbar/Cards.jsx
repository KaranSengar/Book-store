import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className="card bg-base-100 w-96 shadow-xl  mt-8 hover:scale-105 duration-200 dark:bg-slate-950 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}
   <div className='badge badge-secondary'>{item.category}</div> 
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between mt-4">
    <div className='badge badge-outline'>{item.price}</div>
    <div className='badge badge-outline cursor-pointer p-4 hover:bg-pink-500 hover:text-white rounded-lg border duration-200'>{item.category}</div>

    </div>
  </div>
</div>
    </>
  )
}

export default Cards
