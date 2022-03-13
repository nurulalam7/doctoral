import React from 'react'
import { useForm } from 'react-hook-form';

import ima from '../Assets/ima1.jpg'

const Header = () => {
 const{register,handlesubmit}=useForm();

  const onSubmit= data =>{
    console.log("data")
  };

  
  
  return (
    <div>
       <div className="navbar m-8">
           <div className="container flex justify-between">
               <div className="text-3xl text-red-500 font-mono">Doctor koi</div>
               <div className="middle space-x-6">
                   <a href="/">patient</a>
                   <a href="/">Contact</a>
                </div>
                <div>
                    <button className='bg-blue-900 text-white font-bold py-2 px-4 border border-blue-700 rounded'><a href="/">Get premium</a></button>
                </div>
            </div>
            <div className="grid grid-cols-3 my-20">
              <div className='col-span-2 my-20'>
                <div>
                  <h2 className='text-4xl font-bold '>FAST ACCESS TO NEARBY DOCTORS</h2>
                </div>
                <div className='my-20'>
                  <h5 className='table-row'>Find your own desire nearby doctor which you need for the first aid and any serious desiase and you can find your best doctors </h5>
                </div>
                <div >
                  <form onSubmit={handlesubmit(onSubmit)} className='flex grid grid-cols-6 my-20 gap-2 ' action="" >
                    <input {...register("location")} className='col-span-3  rounded py-2 px-4' type="text" name='name'  placeholder='search by name' />
                    <input className='col-span-2  rounded py-2 px-4' type="text" name='location' placeholder='search by location' />
                    <button type='submit' className='bg-emerald-500 rounded-full'>search</button>
                  </form>
                 
                </div>
                
              </div>
              <div className=' w-full'> <img src={ima} alt="" /></div>

            </div>


        </div>
       
    </div>
  )
}

export default Header