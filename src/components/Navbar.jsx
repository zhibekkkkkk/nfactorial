import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DogsContext } from './context/DogsContext'
const Navbar = () => {

    const {fetchNext} = useContext(DogsContext);

    function clickHandler(){
        fetchNext()
    }
    return (
        <div className='w-full flex justify-between items-center text-[24px] py-4 shadow shadow-black-md px-20'>
        <div className='flex w-full justify-between'>
            <Link to="/dogs"><h1 className='text-3xl'>ILoveDogs</h1></Link>
            <button className='rounded-2xl bg-orange-500 px-[7px] text-white' onClick={clickHandler}>+1</button>
            <Link to="/">Me</Link>
        </div>
        </div>
    )
}

export default Navbar