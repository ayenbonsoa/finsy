import React from 'react'

interface badgeProps {
    children: React.ReactNode
}

export default function Badge({children}:badgeProps) {
  return (
    <div className='rounded-full h-16 w-16 bg-yellow-500 flex justify-center items-center'>
        {children}
    </div>
  )
}
