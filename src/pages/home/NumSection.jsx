import React from 'react';
import clutch from '../../assets/img/clutch.png';

const NumSection = () => {
  return (
    <div className="container">
        <div className='pt-60 border-t border-gray-300 text-gray-light'>
            <div className='flex items-center justify-between gap-6'>
                <div>
                    <img src={clutch} alt='img'/>
                </div>
                <div className='ps-4'>
                    <h3 className='ps-16 text-gray-900 text-28 font-semibold mb-8 border-s border-s-3 border-primary-500'>380+</h3>
                    <p className='ps-16 text-gray-600 text-16 font-medium'>Consultation Calls</p>
                </div>
                <div className='ps-4'>
                    <h3 className='ps-16 text-gray-900 text-28 font-semibold mb-8 border-s border-s-3 border-primary-500'>190+</h3>
                    <p className='ps-16 text-gray-600 text-16 font-medium'>Solutions Built</p>
                </div>
                <div className='ps-4'>
                    <h3 className='ps-16 text-gray-900 text-28 font-semibold mb-8 border-s border-s-3 border-primary-500'>92%</h3>
                    <p className='ps-16 text-gray-600 text-16 font-medium'>Repeating Clients</p>
                </div>
                <div className='ps-4'>
                    <h3 className='ps-16 text-gray-900 text-28 font-semibold mb-8 border-s border-s-3 border-primary-500'>8+</h3>
                    <p className='ps-16 text-gray-600 text-16 font-medium'>Countries Served</p>
                </div>
                <div className='ps-4'>
                    <h3 className='ps-16 text-gray-900 text-28 font-semibold mb-8 border-s border-s-3 border-primary-500'>7+</h3>
                    <p className='ps-16 text-gray-600 text-16 font-medium'>Years Experience</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NumSection