import React, { useContext, useEffect, useRef, useState } from 'react'
import DogItem from './DogItem'
import { Link } from 'react-router-dom';
import { DogsContext } from './context/DogsContext';
const Dogs = () => {

  const {imagesData, list, fetchNext} = useContext(DogsContext);

  const [search, setSearch] = useState('');
  function handleChange(e){
    setSearch(e.target.event);
  }
  let elements = imagesData;

  if (search){
    elements = elements.filter((element) => element.name.toLowerCase().includes(search.toLowerCase()))
  }


  return (
    <div className='my-12 mx-20 flex flex-col gap-12 justify-center items-center'>
      <h2 className='text-3xl'>Dogs We All Love</h2>
      <input className='w-[400px] bg-blue-300 p-4 text-white' onChange={handleChange}>
      </input>
      <div className='flex flex-wrap gap-20 justify-center items-center'>
        {imagesData && elements.map((elem,index)=> <DogItem key={index} img={elem.img} name={list[index]} id={index}/>)}
      </div>
    </div>
  )
}

export default Dogs