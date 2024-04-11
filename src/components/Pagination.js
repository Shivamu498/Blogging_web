import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page, handlePageChange,totalPages }=useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center fixed bottom-0 bg-white py-3  border-t-2 '>
     
      <div className='w-[670px] flex w-full justify-between'>
        <div className='flex gap-x-2'>
        {
          page>1 && 
          <button onClick={ () => handlePageChange(page-1)} className='border border-blue-500 rounded-md py-1 px-3 bg-white font-bold'>
            PREVIOUS
          </button>
        }
     
        {
          page<totalPages &&
          <button onClick={ () => handlePageChange(page+1)} className='border border-blue-500 rounded-md py-1 px-3 bg-white font-bold'>
            Next
          </button>
        }

        </div>
       
        <p className='font-bold py-1 px-3'>Page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pagination
