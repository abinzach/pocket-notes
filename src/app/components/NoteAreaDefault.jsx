import Image from 'next/image'
import React from 'react'

const NoteAreaDefault = () => {
  return (
    <div className='flex flex-col bg-red-100 h-full items-center w-full'>
        
    <Image src="/default.png" width={500} height={500} alt='default'/>
    <h2 className='text-3xl font-bold'>Pocket Notes</h2>
    <p className='font-bold w-1/2'>Send and receive messages without keeping your phone online.
    Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    
    </div>
  )
}

export default NoteAreaDefault


