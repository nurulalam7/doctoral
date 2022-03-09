import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <div className="navbar m-8">
           <div className="container flex justify-between">
               <div className="text-3xl">Doctor koi</div>
               <div className="middle space-x-6">
                   <a href="">product</a>
                   <a href="">contact</a>
                </div>
                <div>
                    <button className='bg-blue-900 text-white font-bold py-2 px-4 border border-blue-700 rounded'><a href="">Get premium</a></button>
                </div>
            </div>
            <div className="grid grid-cols-3 my-20">
              <div className='col-span-2'>
                <div>
                  <h2 className='text-3xl '>FAST ACCESS TO NEARBY DOCTORS</h2>
                </div>
                <div className=''>
                  <h5 className=''>Find your own desire nearby doctor which you need for the first aid and any serious desiase and you can find your best doctors </h5>
                </div>
                <div className='flex grid grid-cols-6 my-20 gap-2 '>
                  <div className='col-span-3 bg-emerald-200 rounded py-2 px-4'><button>search by doctor,hospital</button></div>
                 <div className='col-span-2 bg-emerald-400 rounded py-2 px-4'> <button>search by location</button></div>
                  <div className='col-span-1 bg-emerald-600 py-2 px-4 rounded'><button>icon</button></div>
                </div>
              </div>
              <div className=''> <h3>this is image</h3></div>

            </div>


        </div>
    </div>
  )
}

export default Header