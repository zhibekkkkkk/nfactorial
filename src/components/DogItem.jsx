import React from 'react'
import {useNavigate} from 'react-router-dom'
const DogItem = ({img,name,id}) => {
  const navigate = useNavigate();
  return (
    <div className='p-4 rounded-xl bg-[#322C2B] w-[270px] h-[360px] flex flex-col text-white items-center gap-4'>
        <div className='w-full bg-slate-200 h-[200px]'>
            <img src={img} alt="" className='w-full h-full rounded-xl object-contain'/>
        </div>
        <h3 className='text-4xl'>{name}</h3>
    </div>
  )
}

export default DogItem